import struct
import zlib
import os
from PIL import Image

def from8bit(c):
    if c >= 216 or c <= 0:
        return (0, 0, 0, 255)
    r = int(c / 36) % 6 * 51
    g = int(c / 6) % 6 * 51
    b = c % 6 * 51
    return (r, g, b, 255)

def extract_minimap():
    filepath = r'C:\Users\Gabe\Downloads\minimap854.otmm'
    out_dir = r'C:\Users\Gabe\Documents\Poke alliance\map_images'
    os.makedirs(out_dir, exist_ok=True)
    
    with open(filepath, 'rb') as f:
        data = f.read()

    sig, start, version, flags = struct.unpack('<IHH I', data[:12])
    print(f'Parsing OTMM... Version: {version}')
    idx = start

    blocks_by_z = {}
    bounds_by_z = {}

    while idx < len(data):
        if idx + 5 > len(data): break
        x, y, z = struct.unpack('<HHB', data[idx:idx+5])
        idx += 5
        
        if idx + 2 > len(data): break
        comp_len = struct.unpack('<H', data[idx:idx+2])[0]
        idx += 2
        
        if idx + comp_len > len(data): break
        comp_data = data[idx:idx+comp_len]
        idx += comp_len
        
        try:
            decomp = zlib.decompress(comp_data)
        except Exception:
            continue
            
        if z not in blocks_by_z:
            blocks_by_z[z] = []
            bounds_by_z[z] = {'min_x': 65535, 'min_y': 65535, 'max_x': 0, 'max_y': 0}
            
        blocks_by_z[z].append((x, y, decomp))
        b = bounds_by_z[z]
        if x < b['min_x']: b['min_x'] = x
        if y < b['min_y']: b['min_y'] = y
        if x > b['max_x']: b['max_x'] = x
        if y > b['max_y']: b['max_y'] = y

    print(f'Found {sum(len(blocks) for blocks in blocks_by_z.values())} total blocks across {len(blocks_by_z)} floors.')
    
    for z, blocks in blocks_by_z.items():
        b = bounds_by_z[z]
        width = b['max_x'] - b['min_x'] + 64
        height = b['max_y'] - b['min_y'] + 64
        print(f'Rendering Z={z}: {width}x{height} pixels (Blocks: {len(blocks)})')
        
        # Create an empty transparent image
        img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
        pixels = img.load()
        
        for x, y, decomp in blocks:
            start_x = x - b['min_x']
            start_y = y - b['min_y']
            
            for local_y in range(64):
                for local_x in range(64):
                    tile_idx = (local_y * 64 + local_x) * 3
                    if tile_idx + 2 < len(decomp):
                        color = decomp[tile_idx + 1]
                        if color != 255:
                            pixels[start_x + local_x, start_y + local_y] = from8bit(color)
                            
        out_path = os.path.join(out_dir, f'floor_{z}.png')
        img.save(out_path)
        print(f'Saved {out_path}')

if __name__ == '__main__':
    extract_minimap()

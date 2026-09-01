import zlib
import struct
import os
import sys

filepath = r'C:\Users\Gabe\Downloads\minimap854.otmm'
with open(filepath, 'rb') as f:
    data = f.read()

print(f"File size: {len(data)}", flush=True)

chunks = []
idx = 0
while idx < len(data):
    z_idx = data.find(b'\x78\x5e', idx)
    z_idx2 = data.find(b'\x78\x9c', idx)
    
    if z_idx == -1 and z_idx2 == -1:
        break
        
    start = -1
    if z_idx != -1 and z_idx2 != -1:
        start = min(z_idx, z_idx2)
    else:
        start = max(z_idx, z_idx2)
        
    try:
        d = zlib.decompressobj()
        decompressed = d.decompress(data[start:])
        chunks.append(decompressed)
        consumed = len(data[start:]) - len(d.unused_data)
        idx = start + consumed
        if consumed == 0:
            idx = start + 2
    except Exception as e:
        idx = start + 2
        
    if len(chunks) % 1000 == 0 and len(chunks) > 0:
        print(f"Found {len(chunks)} chunks so far...", flush=True)
        break # stop early for testing

print(f'Extracted {len(chunks)} chunks.', flush=True)
if chunks:
    print(f'Chunk sizes (first 10): {[len(c) for c in chunks[:10]]}', flush=True)
    
    # Analyze the first chunk
    chunk = chunks[0]
    print(f'Chunk 1 length: {len(chunk)}', flush=True)

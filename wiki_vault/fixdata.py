import json, re
with open(r'C:\Users\Gabe\Documents\Poke alliance\dashboard\data.js', 'r', encoding='utf-8') as f:
    raw = f.read()
keys_order = ['fundamentos', 'automacao', 'meta', 'pvp', 'dungeons', 'economia', 'refino']
data = {}
for key in keys_order:
    pattern = r'  ' + key + r': ("(?:[^"\\]|\\.)*")'
    m = re.search(pattern, raw, re.DOTALL)
    if m:
        try:
            val = json.loads(m.group(1))
            val = val.strip()
            if val.startswith('\\\\'): val = val[1:]
            if val.endswith('\\\\'): val = val[:-1]
            val = val.strip()
            data[key] = val
            print(key, 'OK:', len(val), 'chars')
        except Exception as e:
            print(key, 'ERROR:', e)
lines = ['const PAGES_DATA = {']
for i, k in enumerate(keys_order):
    if k in data:
        comma = ',' if i < len(keys_order)-1 else ''
        lines.append('  ' + k + ': ' + json.dumps(data[k], ensure_ascii=False) + comma)
lines.append('};')
out = chr(10).join(lines)
with open(r'C:\Users\Gabe\Documents\Poke alliance\dashboard\data.js', 'w', encoding='utf-8') as f:
    f.write(out)
print('Written', len(out), 'bytes')

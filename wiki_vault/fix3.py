import json, re
datafile = r'C:\Users\Gabe\Documents\Poke alliance\dashboard\data.js'
with open(datafile, 'r', encoding='utf-8') as f:
    raw = f.read()
keys_order = ['fundamentos', 'automacao', 'meta', 'pvp', 'dungeons', 'economia', 'refino']
data = {}
for key in keys_order:
    idx = raw.find('  ' + key + ': "')
    if idx == -1:
        print(key + ' NOT FOUND')
        continue
    start = idx + len('  ' + key + ': ')
    decoder = json.JSONDecoder()
    try:
        val, _ = decoder.raw_decode(raw, start)
    except Exception as e:
        print(key + ' ERROR: ' + str(e))
        continue
    while val.startswith('\\'):
        val = val[1:]
    while val.endswith('\\'):
        val = val[:-1]
    val = val.strip()
    data[key] = val
    print(key + ' OK starts: ' + repr(val[:30]))
out_lines = ['const PAGES_DATA = {']
for i, k in enumerate(keys_order):
    if k in data:
        comma = ',' if i < len(keys_order)-1 else ''
        out_lines.append('  ' + k + ': ' + json.dumps(data[k], ensure_ascii=False) + comma)
out_lines.append('};')
out = chr(10).join(out_lines)
with open(datafile, 'w', encoding='utf-8') as f:
    f.write(out)
print('Written ' + str(len(out)) + ' bytes')

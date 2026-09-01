import urllib.request
import json
import time

url = "https://pokeapi.co/api/v2/pokemon?limit=151"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())
    
pokedex = []

for i, p in enumerate(data['results']):
    p_id = i + 1
    # fetch individual
    try:
        p_req = urllib.request.Request(p['url'], headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(p_req) as p_resp:
            p_data = json.loads(p_resp.read().decode())
        
        types = [t['type']['name'].capitalize() for t in p_data['types']]
        
        pokedex.append({
            "id": p_id,
            "name": p['name'].capitalize(),
            "types": types,
            "tier": "Tier C", # Placeholder
            "location": "A ser mapeado pela Wiki",
            "evolution": "Status de Evolução Pendente",
            "img": f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{p_id}.png"
        })
        if p_id % 25 == 0:
            print(f"Fetched {p_id}/151")
    except Exception as e:
        print(f"Error fetching {p_id}: {e}")

# Apply meta knowledge overrides
meta_overrides = {
    "Charizard": {"tier": "Tier A", "location": "Vulcanos e Quests Avançadas"},
    "Slowking": {"tier": "Tier A", "location": "Ilhas e Respawns de Água"},
    "Golem": {"tier": "Tier A", "location": "Cavernas Profundas"},
    "Magmar": {"tier": "Tier B", "location": "Cavernas Vulcânicas"},
    "Tangela": {"tier": "Tier B", "location": "Saffron (Arredores)"},
    "Mewtwo": {"tier": "Tier S", "location": "Lockout Mensal (Dungeon Clones)"}
}

for pk in pokedex:
    if pk['name'] in meta_overrides:
        pk['tier'] = meta_overrides[pk['name']]['tier']
        pk['location'] = meta_overrides[pk['name']]['location']

js_content = "const POKEDEX_DATA = " + json.dumps(pokedex, ensure_ascii=False, indent=2) + ";\n"

out_path = r"C:\Users\Gabe\Documents\Poke alliance\dashboard\pokedex_data.js"
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
print("Concluído!")

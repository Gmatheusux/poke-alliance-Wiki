import os
import shutil

src = 'wiki_vault'
dest = 'dashboard/data'

dirs = ['pokemons', 'itens', 'quests', 'sistemas', 'raw_jsons']
for d in dirs:
    os.makedirs(os.path.join(dest, d), exist_ok=True)

# Map files to their new semantic folders
mapping = {
    'itens/helds.md': 'sistemas/helds.md',
    'itens/boost.md': 'sistemas/boost.md',
    'itens/star-machine.md': 'sistemas/star-machine.md',
    'itens/comandos-disponiveis.md': 'sistemas/comandos-disponiveis.md',
    'itens/como-usar-tp.md': 'sistemas/como-usar-tp.md',
    'itens/experiencia-e-level.md': 'sistemas/experiencia-e-level.md',
    'itens/fly-surf-e-ride.md': 'sistemas/fly-surf-e-ride.md',
    'itens/primeiros-passos.md': 'sistemas/primeiros-passos.md',
    'itens/talentos.md': 'sistemas/talentos.md',
    'itens/treinamento.md': 'sistemas/treinamento.md',
    
    'itens/arcane-shards-dungeons.md': 'quests/arcane-shards-dungeons.md',
    'itens/gyms-kanto-hoenn.md': 'quests/gyms-kanto-hoenn.md',
    'itens/hazard-mega-dens.md': 'quests/hazard-mega-dens.md',
    'itens/tasks-do-mundo.md': 'quests/tasks-do-mundo.md',
    
    'mapas_e_quests/lucky_amulet.md': 'quests/lucky_amulet.md',
    'mapas_e_quests/porygon-dr-vektor.md': 'quests/porygon-dr-vektor.md',
    'mapas_e_quests/quests-principais.md': 'quests/quests-principais.md',
    
    'mecanicas_e_dicas.md': 'sistemas/mecanicas_e_dicas.md',
    'meta_e_builds.md': 'sistemas/meta_e_builds.md'
}

for src_rel, dest_rel in mapping.items():
    src_file = os.path.join(src, src_rel)
    dest_file = os.path.join(dest, dest_rel)
    if os.path.exists(src_file):
        shutil.copy2(src_file, dest_file)
        
# Copy pokemons
src_poke = os.path.join(src, 'pokemons')
if os.path.exists(src_poke):
    for f in os.listdir(src_poke):
        if f.endswith('.md'):
            shutil.copy2(os.path.join(src_poke, f), os.path.join(dest, 'pokemons', f))

# Copy json files
for f in os.listdir(src):
    if f.endswith('.json'):
        shutil.copy2(os.path.join(src, f), os.path.join(dest, 'raw_jsons', f))
        
print("Migração concluída.")

document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.getElementById('pokedex-grid');
    const searchInput = document.getElementById('dex-search');
    const typeFilter = document.getElementById('dex-type-filter');
    const levelFilter = document.getElementById('dex-level-filter');
    const clearBtn = document.getElementById('dex-clear-filters');
    const modal = document.getElementById('dex-modal');
    const modalClose = document.getElementById('dex-modal-close');
    const modalContent = document.getElementById('dex-modal-body');

    if (!pokedexContainer || typeof POKEDEX_DATA === 'undefined') return;

    const typeColors = {
        'Normal': '#A8A77A', 'Fire': '#EE8130', 'Water': '#6390F0',
        'Electric': '#F7D02C', 'Grass': '#7AC74C', 'Ice': '#96D9D6',
        'Fighting': '#C22E28', 'Poison': '#A33EA1', 'Ground': '#E2BF65',
        'Flying': '#A98FF3', 'Psychic': '#F95587', 'Bug': '#A6B91A',
        'Rock': '#B6A136', 'Ghost': '#735797', 'Dragon': '#6F35FC',
        'Dark': '#705746', 'Steel': '#B7B7CE', 'Fairy': '#D685AD'
    };

    function renderCards(data) {
        pokedexContainer.innerHTML = '';
        data.forEach(pk => {
            const card = document.createElement('div');
            card.className = 'dex-card';
            
            const typesHtml = pk.types.map(t => 
                `<span class="dex-type" style="background-color: ${typeColors[t] || '#777'}">${t}</span>`
            ).join('');

            const levelHtml = pk.min_level ? `<div style="font-size: 11px; color: #8b949e; margin-top: 5px; font-weight: bold;">Lvl Mín: ${pk.min_level}</div>` : '';

            card.innerHTML = `
                <div class="dex-id">#${String(pk.id).padStart(3, '0')}</div>
                <img class="dex-img" src="${pk.img}" alt="${pk.name}" loading="lazy">
                <div class="dex-name">${pk.name}</div>
                <div class="dex-types-container">${typesHtml}</div>
                <div class="dex-tier">${pk.tier}</div>
                ${levelHtml}
            `;
            
            card.addEventListener('click', () => openModal(pk));
            pokedexContainer.appendChild(card);
        });
    }

    function filterDex() {
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        const type = typeFilter ? typeFilter.value : 'all';
        const levelText = levelFilter ? levelFilter.value : '';
        const maxLevel = levelText ? parseInt(levelText) : 9999;

        const filtered = POKEDEX_DATA.filter(pk => {
            const matchesName = pk.name.toLowerCase().includes(query) || String(pk.id) === query;
            const matchesType = type === 'all' || pk.types.includes(type);
            const pkLevel = pk.min_level || 1;
            const matchesLevel = pkLevel <= maxLevel;
            
            return matchesName && matchesType && matchesLevel;
        });
        renderCards(filtered);
    }

    function clearFilters() {
        if(searchInput) searchInput.value = '';
        if(typeFilter) typeFilter.value = 'all';
        if(levelFilter) levelFilter.value = '';
        filterDex();
    }

    function openModal(pk) {
        const typesHtml = pk.types.map(t => 
            `<span class="dex-type" style="background-color: ${typeColors[t] || '#777'}">${t}</span>`
        ).join('');

        const movesHtml = (pk.moveset && pk.moveset.length > 0) 
            ? pk.moveset.map(m => {
                if (typeof m === 'object' && m.type) {
                    const bgColor = typeColors[m.type] || '#777';
                    const catBadge = m.category ? `<span style="font-size: 10px; opacity: 0.85; margin-left: 4px; text-transform: uppercase;">[${m.category}]</span>` : '';
                    return `<span style="background: ${bgColor}; padding: 4px 10px; border-radius: 6px; font-size: 13px; margin-right: 6px; margin-bottom: 6px; display: inline-block; font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${m.name}${catBadge}</span>`;
                } else {
                    return `<span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 13px; margin-right: 5px; margin-bottom: 5px; display: inline-block; font-weight: bold;">${m}</span>`;
                }
            }).join('')
            : '<em>Não catalogado</em>';

        const lvlText = pk.min_level ? pk.min_level : 'Desconhecido';

        modalContent.innerHTML = `
            <div class="modal-header-info">
                <img src="${pk.img}" alt="${pk.name}" class="modal-img">
                <div>
                    <h2>${pk.name} <span class="modal-id">#${String(pk.id).padStart(3, '0')}</span></h2>
                    <div class="dex-types-container" style="justify-content: flex-start;">${typesHtml}</div>
                    <div class="modal-tier-badge">${pk.tier}</div>
                </div>
            </div>
            <div class="modal-details">
                <h3>Informações no Poke Alliance</h3>
                <ul class="modal-list">
                    <li><span>Level Mínimo:</span> <strong style="color: var(--heading);">${lvlText}</strong></li>
                    <li><span>Onde Pegar (Bioma):</span> <strong>${pk.location}</strong></li>
                    <li><span>Evolução:</span> <strong>${pk.evolution}</strong></li>
                    <li><span>Versão Shiny:</span> <strong>Disponível (Use Cam System)</strong></li>
                    <li><span>Move Set Principal (Por Tipagem):</span> <div style="margin-top: 8px;">${movesHtml}</div></li>
                </ul>
            </div>
        `;
        modal.style.display = 'flex';
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    if (searchInput) searchInput.addEventListener('input', filterDex);
    if (typeFilter) typeFilter.addEventListener('change', filterDex);
    if (levelFilter) levelFilter.addEventListener('input', filterDex);
    if (clearBtn) clearBtn.addEventListener('click', clearFilters);

    // Initial render sorted by ID so the new appended meta mons show up nicely
    renderCards(POKEDEX_DATA.sort((a,b) => a.id - b.id));
});

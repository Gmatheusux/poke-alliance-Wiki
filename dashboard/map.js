document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    // Initialize Leaflet Map using CRS.Simple (flat map)
    const map = L.map('map-container', {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 3,
        zoomControl: true,
        attributionControl: false
    });

    const width = 6656;
    const height = 5376;
    const bounds = [[0, 0], [height, width]];

    // Using the generated floor_7 map image
    L.imageOverlay('../map_images/floor_7.png', bounds).addTo(map);

    // Initial view centering
    map.fitBounds(bounds);

    // Plot Markers from map_markers.js
    const min_y = 128;
    const min_x = 0;

    if (typeof mapMarkers !== 'undefined') {
        mapMarkers.forEach(m => {
            // Only plot surface markers (Z=7)
            if (m.z === 7) {
                const rx = m.x - min_x;
                const ry = m.y - min_y;
                
                // Leaflet Simple CRS mapping: Y grows bottom-to-top
                const lat = height - ry;
                const lng = rx;
                
                // Custom icon styling for better dark theme integration
                const iconHtml = `<div style="
                    background: #CC5500;
                    color: white;
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    border: 2px solid #fff;
                    box-shadow: 0 0 5px rgba(0,0,0,0.8);
                ">${m.icon}</div>`;

                const customIcon = L.divIcon({
                    html: iconHtml,
                    className: 'custom-leaflet-icon',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                });

                L.marker([lat, lng], { icon: customIcon })
                    .bindPopup(`
                        <div style="font-family: 'Russo One', sans-serif; color: #CC5500; font-size: 14px; margin-bottom: 5px;">
                            ${m.description}
                        </div>
                        <div style="color: #666; font-size: 12px;">
                            Global Coords: [${m.x}, ${m.y}, ${m.z}]
                        </div>
                    `)
                    .addTo(map);
            }
        });
    }

    // Fix map rendering bug when switching tabs in SPAs
    // Listen for tab clicks to invalidate size
    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.addEventListener('click', () => {
            setTimeout(() => {
                map.invalidateSize();
            }, 100);
        });
    });
});

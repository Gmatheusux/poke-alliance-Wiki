import json

with open('map_markers.json', 'r', encoding='utf-8') as f:
    markers = json.load(f)

markers_js = 'const mapMarkers = ' + json.dumps(markers) + ';'

html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste de Minimapa - Poke Alliance</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin=""/>
    <style>
        body {{ margin: 0; padding: 0; background-color: #111; color: #fff; font-family: sans-serif; display: flex; flex-direction: column; height: 100vh; }}
        .header {{ padding: 15px 20px; background-color: #1a1a1a; border-bottom: 2px solid #CC5500; }}
        .header h1 {{ margin: 0; font-size: 1.2rem; color: #CC5500; }}
        #map-container {{ flex: 1; width: 100%; }}
        .leaflet-container {{ background-color: #000; }}
    </style>
</head>
<body>
    <div class="header">
        <h1>Teste Interativo com {len(markers)} Marcadores</h1>
    </div>
    <div id="map-container"></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
    <script>
        {markers_js}
        
        const map = L.map('map-container', {{
            crs: L.CRS.Simple,
            minZoom: -2,
            maxZoom: 3,
            zoomControl: true
        }});

        const width = 6656;
        const height = 5376;
        const bounds = [[0, 0], [height, width]];
        L.imageOverlay('./map_images/floor_7.png', bounds).addTo(map);
        map.fitBounds(bounds);

        const min_y = 128;
        const min_x = 0;
        
        mapMarkers.forEach(m => {{
            if (m.z === 7) {{
                const rx = m.x - min_x;
                const ry = m.y - min_y;
                const lat = height - ry;
                const lng = rx;
                
                L.marker([lat, lng])
                    .bindPopup('<b>' + m.description + '</b><br>Icon ID: ' + m.icon)
                    .addTo(map);
            }}
        }});
    </script>
</body>
</html>"""

with open('test_map.html', 'w', encoding='utf-8') as f:
    f.write(html)

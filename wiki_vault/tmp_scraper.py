import json
import urllib.request, urllib.parse, re
from youtube_transcript_api import YouTubeTranscriptApi
query_encoded = urllib.parse.quote('poke alliance melhores pokemons por tipo tier list')
html = urllib.request.urlopen(f'https://www.youtube.com/results?search_query={query_encoded}').read().decode()
video_ids = list(dict.fromkeys(re.findall(r'"videoId":"([^"]+)"', html)))[:4]
out = []
for v in video_ids:
    try:
        t = YouTubeTranscriptApi().fetch(v, languages=['pt', 'pt-BR', 'en'])
        txt = " ".join([s.text for s in t])
        out.append({'id': v, 'text': txt})
    except Exception as e:
        out.append({'id': v, 'error': str(e)})
print(json.dumps(out, indent=2))

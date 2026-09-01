import sys
import json
from youtube_transcript_api import YouTubeTranscriptApi
from youtubesearchpython import VideosSearch

def search_and_transcribe(query):
    try:
        import urllib.request, urllib.parse, re
        query_encoded = urllib.parse.quote(query)
        html = urllib.request.urlopen(f'https://www.youtube.com/results?search_query={query_encoded}').read().decode()
        video_ids = list(dict.fromkeys(re.findall(r'"videoId":"([^"]+)"', html)))[:4]
        
        output = []
        for vid_id in video_ids:
            title = f"Video {vid_id}"
            
            try:
                api = YouTubeTranscriptApi()
                fetched = api.fetch(vid_id, languages=['pt', 'en', 'pt-BR'])
                text = " ".join([t.text for t in fetched])
                # Limitar o tamanho do texto para evitar estourar o buffer
                output.append({"title": title, "url": f"https://youtu.be/{vid_id}", "transcript": text[:4000]})
            except Exception as e:
                output.append({"title": title, "url": f"https://youtu.be/{vid_id}", "transcript": f"No transcript available: {e}"})
                
        print(json.dumps(output, ensure_ascii=False, indent=2))
    except Exception as e:
        print(f"Failed to search: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        query = sys.argv[1]
        search_and_transcribe(query)

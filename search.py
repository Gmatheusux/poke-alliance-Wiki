import urllib.request
import re
url = 'https://duckduckgo.com/html/?q=pokopia'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # strip all tags and find pokopia
    text = re.sub(r'<[^>]+>', ' ', html)
    idx = text.lower().find('pokopia')
    if idx != -1:
        print(text[max(0, idx-100):idx+200])
except Exception as e:
    print(e)

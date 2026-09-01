import time
import json
from playwright.sync_api import sync_playwright

def scrape_wiki():
    print("Starting Playwright...")
    wiki_data = {}
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        print("Navigating to Home...")
        page.goto("https://wiki.pokealliance.com/", wait_until="networkidle")
        time.sleep(2)
        
        # Get all links on the home page to find categories
        links = page.evaluate("""() => {
            return Array.from(document.querySelectorAll('a'))
                .map(a => ({ text: a.innerText.trim(), href: a.href }))
                .filter(l => l.href.startsWith('https://wiki.pokealliance.com/') && l.text.length > 2);
        }""")
        
        unique_links = {l['href']: l['text'] for l in links}
        print(f"Found {len(unique_links)} unique pages to scrape.")
        
        # Scrape home
        wiki_data['Home'] = page.evaluate("document.body.innerText")
        
        count = 0
        for href, text in unique_links.items():
            if count >= 15: # Limit to 15 core pages so it doesn't run forever
                break
            if href == "https://wiki.pokealliance.com/":
                continue
                
            print(f"Scraping: {text} ({href})")
            page.goto(href, wait_until="networkidle")
            time.sleep(1)
            content = page.evaluate("document.body.innerText")
            wiki_data[text] = content
            count += 1
            
        browser.close()
        
    with open('dashboard/data/raw_jsons/wiki_raw_data.json', 'w', encoding='utf-8') as f:
        json.dump(wiki_data, f, ensure_ascii=False, indent=2)
        
    print("Extraction complete. Data saved to wiki_raw_data.json")

if __name__ == "__main__":
    scrape_wiki()

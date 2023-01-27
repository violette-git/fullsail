import requests
from bs4 import BeautifulSoup
import json

data = {}
keys = ["dt", "city", "state", "country", "shape", "duration", "summary", "posted", "pics"]
# pics = []
res = requests.get("https://nuforc.org/webreports/ndxevent.html")
soup = BeautifulSoup(res.content, 'html.parser')
links = soup.find_all('a')

for i, link in enumerate(links):
    if i == 0:  # Skip the first link
        continue
    url = f'https://nuforc.org/webreports/{link["href"]}'
    print(url)
    res = requests.get(url)
    table = BeautifulSoup(res.content, 'html.parser')
    links_2 = table.find_all('a')
    for x in links_2:
        pass
    table_data = table.find_all('td')
    # data[i] = {}
    data[f'https://nuforc.org/webreports/{x["href"]}'] = {}
    for j, td in enumerate(table_data):
        key = keys[j % len(keys)]
        
        # data[i][key] = td.text
            # data[f'https://nuforc.org/webreports/{x["href"]}']['pics'] = (p for p in pics if pics > 0)

        data[f'https://nuforc.org/webreports/{x["href"]}'][key] = td.text

    if i % 3 == 0:
        with open("file_name.json", "w") as f:
            json.dump(data, f)

# save remaining data
# with open("file_name.json", "w") as f:
#     json.dump(data, f)

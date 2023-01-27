import requests
from bs4 import BeautifulSoup
import json

data = {}
keys = ["dt", "city", "state", "country", "shape", "duration", "summary", "posted", "pics", "link"]
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
    temp_data = {}
    for j, td in enumerate(table_data):
        key = keys[j % len(keys)]
        if key == 'link':
            temp_data[key] = f'https://nuforc.org/webreports/{x["href"]}'
        else:
            temp_data[key] = td.text

    if temp_data["pics"] == 'yes':
        data[i] = temp_data
        # save data every 10 links
        if i % 5 == 0:
            with open("file_name.json", "w") as f:
                json.dump(data, f)

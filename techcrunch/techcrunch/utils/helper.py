import json


def get_raw_data(path):
    data = []
    with open(path, "r", encoding='utf-8') as json_file:
        data = json.load(json_file)
    return data


def save_data_to_json(data, path):
    with open(path, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)


def get_all_link_techcrunch():
    results_link = []
    for index in range(500):
        url_link = f'https://techcrunch.com/wp-json/tc/v1/magazine?page={index+1}&_embed=true&es=true&cachePrevention=0'
        results_link.append(url_link)
    return results_link
    
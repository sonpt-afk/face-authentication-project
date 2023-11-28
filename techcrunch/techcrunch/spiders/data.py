import json
import scrapy
from tqdm import tqdm
from techcrunch.items import TechcrunchItem
from techcrunch.utils import helper
from googletrans import Translator
ALL_LINK_TECHCRUNCH = helper.get_all_link_techcrunch()


class DataSpider(scrapy.Spider):
    name = "techcrunch"
    allowed_domains = ["https://techcrunch.com/"]

    start_urls = [ALL_LINK_TECHCRUNCH[0]]

    def start_requests(self):
        for url in tqdm(self.start_urls, desc="Processing URLs"):
            yield scrapy.Request(url, callback=self.parse)

    def parse(self, response):
        items = TechcrunchItem()
        data = json.loads(response.text)
        for tmp in data:
            items["title"] = tmp["title"]["rendered"]
            items["slug"] = tmp["slug"]
            items["link"] = tmp["link"]
            yield items
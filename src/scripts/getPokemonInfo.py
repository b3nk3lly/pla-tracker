from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import json

from getGenderDifferences import getGenderDifferences
from getPokemonForms import getPokemonForms
from getPokemonEncounters import getPokemonEncounters


def get_driver():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    return webdriver.Chrome(service=Service(
        ChromeDriverManager().install()), options=options)


# initialize drivers
pokedex_driver = get_driver()  # this one stays on the Pokedex page
info_driver = get_driver()  # this one navigates to other pages to grab more info

# navigate to list of Pokemon in PLA
POKEDEX_URL = "https://www.serebii.net/legendsarceus/hisuipokedex.shtml"
pokedex_driver.get(POKEDEX_URL)

pokemon = []

# get all Pokemon
rows = pokedex_driver.find_elements(
    By.CSS_SELECTOR, "#content > main > table:nth-child(5) > tbody tr:not(:first-child)")

for row in rows:
    cells = row.find_elements(By.TAG_NAME, "td")
    number = int(cells[0].text.replace("#", "").strip().lstrip("0"))
    name = cells[3].find_element(
        By.CSS_SELECTOR, ":first-child").get_attribute("innerHTML").split("<br>")[0]
    genders = getGenderDifferences(info_driver, name)
    forms = getPokemonForms(info_driver, name)
    encounters = getPokemonEncounters(info_driver, name)

    for gender in genders:
        for form in forms:
            pokemon.append({'id': len(pokemon), 'number': number, 'name': name,
                           'gender': gender, 'form': form, 'encounters': encounters})

with open('pokemon.json', 'w') as file:
    file.write(json.dumps(pokemon))

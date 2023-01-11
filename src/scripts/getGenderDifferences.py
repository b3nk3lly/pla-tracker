from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException


def getGenderDifferences(driver, name: str):
    POKEMON_INFO_URL = "https://www.serebii.net/pokedex-swsh/" + name.lower() + "/"
    driver.get(POKEMON_INFO_URL)

    try:
        genders = driver.find_element(
            By.XPATH, "//td[text()='Gender Differences']")
        return ['Male', 'Female'] if genders else ['']
    except NoSuchElementException:
        return ['']

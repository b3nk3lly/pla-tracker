from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException


def getPokemonForms(driver, name: str):
    # handle exceptions
    if name.lower() in ['pikachu', 'cherrim', 'arceus']:
        return ['']
    elif name.lower() == 'unown':
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '?']
    elif name.lower() == 'basculin':
        return ['White-Striped']
    elif name.lower() in ['growlithe', 'arcanine', 'voltorb', 'electrode', 'typhlosion', 'qwilfish', 'samurott', 'lilligant', 'zorua', 'zoroark', 'braviary', 'sliggoo', 'goodra', 'avalugg', 'decidueye']:
        return ['Hisuian']

    POKEMON_INFO_URL = 'https://www.serebii.net/pokedex-swsh/' + name.lower() + '/'
    driver.get(POKEMON_INFO_URL)

    try:
        forms = driver.find_elements(
            By.XPATH, "//td[text()='Alternate Forms']/../..//b")
        return list(map(lambda form: str(form.text).replace("Forme", "").replace("Form", "").replace("Rotom", "")
                        .strip(), forms)) if forms else ['']
    except NoSuchElementException:
        return ['']

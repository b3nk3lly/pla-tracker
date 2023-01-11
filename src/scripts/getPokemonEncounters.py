from selenium.webdriver.common.by import By
from getMassOutbreakInfo import getMassOutbreakInfo


def getPokemonEncounters(driver, name: str):
    POKEMON_INFO_URL = 'https://www.serebii.net/pokedex-swsh/' + name.lower() + '/'
    driver.get(POKEMON_INFO_URL)

    encounters = []

    areas = ['Obsidian Fieldlands', 'Crimson Mirelands',
             'Cobalt Coastlands', 'Coronet Highlands', 'Alabaster Icelands']

    # get encounter locations
    locations = driver.find_elements(
        By.XPATH, "//td[text()='Legends: Arceus']/../td[2]//a")

    for location in locations:
        # this is an exception on Unown's page
        if location.text == 'Everywhere':
            continue

        if any(location.text.startswith(a) for a in areas):
            location_name = location.text.replace(':', '')

            if 'Massive Mass Outbreak' not in location_name:
                continue

            # location name may include "Massive Mass Outbreak",
            # in which case we want to add a new encounter to our list.
            encounter_type = "Massive Mass Outbreak"
            location_name = location_name.replace(
                "Massive Mass Outbreak", "").strip()

        elif 'Space-time Distortion in' in location.text:
            location_name = location.text.replace(
                'Space-time Distortion in', '').strip()
            encounter_type = 'Spacetime Distortion'
        else:
            encounter_type = 'Overworld'

        # add the encounter if it's new
        if (not encounters) or (encounters[-1]['location'] != location_name) or (encounters[-1]['encounterType'] != encounter_type):
            encounters.append(
                {'location': location_name, 'type': encounter_type})

    encounters.extend(getMassOutbreakInfo(driver, name))
    return encounters

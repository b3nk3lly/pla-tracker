from selenium.webdriver.common.by import By


def getMassOutbreakInfo(driver, name: str):
    MASS_OUTBREAK_URL = 'https://www.serebii.net/legendsarceus/massoutbreaks.shtml'
    driver.get(MASS_OUTBREAK_URL)

    # get mass outbreak locations
    locations = driver.find_elements(
        By.XPATH, "//a[text()='" + name + "']/../../../../../../..//h3")

    return [{'location': location.text,
             'type': 'Mass Outbreak'} for location in locations]

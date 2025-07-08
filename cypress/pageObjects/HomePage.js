class HomePage {

  static elementsMenuSelector = 'body>div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) h531'; // Selector for the Elements menu

  // Method to get the Elements menu selector
  elementsMenuSelector() {
    return HomePage.elementsMenuSelector;
  }

  // Method to click on the Elements menu
  elementsMenuClick() {
    cy.get(HomePage.elementsMenuSelector).click(); // Click on the Elements menu
  }
}
export default HomePage;
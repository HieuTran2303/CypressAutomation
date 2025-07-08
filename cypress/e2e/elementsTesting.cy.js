import HomePage from "../pageObjects/homePage";

describe('Elements Testing', () => {
  it('should be clickable elements menu', () => {
    cy.visit('https://demoqa.com/');  // URL test
    const homePage = new HomePage();
    cy.get(homePage.elementsMenuSelector()).click(); // Click on the Elements menu
    cy.log('Elements menu clicked successfully'); // Log message to console
  });
});

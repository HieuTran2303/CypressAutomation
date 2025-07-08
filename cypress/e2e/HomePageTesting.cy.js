import HomePage from "../pageObjects/homePage";

describe('Elements Testing', () => {
  it('should be clickable elements menu', () => {
    cy.visit('https://demoqa.com/');  // URL test
    const homePage = new HomePage();
    homePage.elementsMenuClick();
    cy.log('Elements menu clicked successfully'); // Log message to console
  });
});

describe('Forms Testing', () => {
  it('should be clickable forms menu', () => {
    cy.visit('https://demoqa.com/');  // URL test
    const homePage = new HomePage();
    homePage.formsMenuClick();
    cy.log('Forms menu clicked successfully'); // Log message to console
  });
});

describe('Alerts, Frame & Windows Testing', () => {
  it('should be clickable alerts, frame & windows menu', () => {
    cy.visit('https://demoqa.com/');  // URL test
    const homePage = new HomePage();
    homePage.alertsFrameWindowsMenuClick();
    cy.log('Alerts, Frame & Windows menu clicked successfully'); // Log message to console
  });
});

describe('Widgets Testing', () => {
  it('should be clickable widgets menu', () => {
    cy.visit('https://demoqa.com/');  // URL test
    const homePage = new HomePage();
    homePage.widgetsMenuClick();
    cy.log('Widgets menu clicked successfully'); // Log message to console
  });
});

describe('Interactions Testing', () => {
  it('should be clickable interactions menu', () => {
    cy.visit('https://demoqa.com/');  // URL test
    const homePage = new HomePage();
    homePage.interactionsMenuClick();
    cy.log('Interactions menu clicked successfully'); // Log message to console
  });
});

describe('Book Store Application Testing', () => {
  it('should be clickable book store application menu', () => {
    cy.visit('https://demoqa.com/');  // URL test
    const homePage = new HomePage();
    homePage.bookStoreApplicationMenuClick();
    cy.log('Book Store Application menu clicked successfully'); // Log message to console
  });
});
// End of file: cypress/e2e/HomePageTesting.cy.js
// This file contains tests for various menu items on the home page of the demo website.  
// Each test case visits the demo website and clicks on a specific menu item, logging a success message to the console.
// The tests cover the Elements, Forms, Alerts, Frame & Windows, Widgets, Interactions, and Book Store Application menus.
// The HomePage class is used to encapsulate the selectors for each menu item, making the tests more maintainable and readable.
// The tests are structured using Cypress's `describe` and `it` functions, allowing for clear organization and reporting of test results.
// The `cy.visit` command is used to navigate to the demo website before each test, ensuring a consistent starting point. 

class HomePage {

  // Selectors for various menu items on the home page
  elementsMenuSelector = 'body>div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) h5'; // Selector for the Elements menu
  formsMenuSelector = 'body>div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2) h5'; // Selector for the Forms menu
  alertsFrameWindowsMenuSelector = 'body>div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(3) h5'; // Selector for the Alerts, Frame & Windows menu
  widgetsMenuSelector = 'body>div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(4) h5'; // Selector for the Widgets menu
  interactionsMenuSelector = 'body>div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(5) h5'; // Selector for the Interactions menu
  bookStoreApplicationMenuSelector = 'body>div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(6) h5'; // Selector for the Book Store Application menu

  // Method to click on the Elements menu
  elementsMenuClick() {
    cy.get(this.elementsMenuSelector).should('be.visible').click(); // Click on the Elements menu
  }
  // Method to click on the Forms menu
  formsMenuClick() {
    cy.get(this.formsMenuSelector).should('be.visible').click(); // Click on the Forms menu
  }
  // Method to click on the Alerts, Frame & Windows menu
  alertsFrameWindowsMenuClick() {
    cy.get(this.alertsFrameWindowsMenuSelector).should('be.visible').click(); // Click on the Alerts, Frame & Windows menu
  }
  // Method to click on the Widgets menu
  widgetsMenuClick() {
    cy.get(this.widgetsMenuSelector).should('be.visible').click(); // Click on the Widgets menu
  }
  // Method to click on the Interactions menu
  interactionsMenuClick() {
    cy.get(this.interactionsMenuSelector).should('be.visible').click(); // Click on the Interactions menu
  }
  // Method to click on the Book Store Application menu
  bookStoreApplicationMenuClick() {
    cy.get(this.bookStoreApplicationMenuSelector).should('be.visible').click(); // Click on the Book Store Application menu
  }
}
export default HomePage;
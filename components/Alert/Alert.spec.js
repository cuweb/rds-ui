describe('Alert', () => {
  const alert = {
    default: `.c-alert`,
  };

  it(`Should render the default alert`, () => {
    cy.clearCookies();
    cy.visit(
      `${Cypress.env('baseUrl')}/iframe.html?id=components-alert--error`
    );
    cy.get(alert.default).should('exist');
  });
});

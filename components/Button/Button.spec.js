describe('Button', () => {
  const button = {
    default: `.c-buttoncta`,
    ghost: `.c-buttoncta--ghost`,
    full: `.c-buttoncta--full`,
  };

  it(`Should render the default button`, () => {
    cy.clearCookies();
    cy.visit(
      `${Cypress.env('baseUrl')}/iframe.html?id=components-button--default`
    );
    cy.get(button.default).should('exist');
  });

  it(`Should render the ghost button`, () => {
    cy.clearCookies();
    cy.visit(
      `${Cypress.env('baseUrl')}/iframe.html?id=components-button--ghost`
    );
    cy.get(button.ghost).should('exist');
  });

  it(`Should render the full width button`, () => {
    cy.clearCookies();
    cy.visit(
      `${Cypress.env('baseUrl')}/iframe.html?id=components-button--full-width`
    );
    cy.get(button.full).should('exist');
  });
});

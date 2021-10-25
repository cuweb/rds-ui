describe('Button', () => {
  const button = {
    default: `.c-buttoncta`,
    ghost: `.c-buttoncta--ghost`,
    full: `.c-buttoncta--full`,
  };
  before(() => {
    cy.clearCookies();
    cy.visit(`${Cypress.env('baseUrl')}/`);
  });

  it(`Should render the default button`, () => {
    cy.get(button.default).should('exist');
  });

  it(`Should render the ghost button`, () => {
    cy.get(button.ghost).should('exist');
  });

  it(`Should render the full width button`, () => {
    cy.get(button.full).should('exist');
  });
});

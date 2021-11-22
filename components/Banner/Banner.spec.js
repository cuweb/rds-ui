describe('Banner', () => {
  const types = ['base'];
  const title = 'h1';

  types.map((type) => {
    it(`Should render the ${type} Banner`, () => {
      cy.visit(
        `${Cypress.env('baseUrl')}/iframe.html?id=components-banner--${type}`
      );
      cy.get(`.b-banner`).should('exist');
      cy.get(`.b-banner ${title}`).should('exist');
    });
  });
});

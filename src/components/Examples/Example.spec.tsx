describe('Example', () => {
    it(`Should render an Example with passing custom className`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=components-example`)
        cy.get(`.u-h-fix`).should('exist')
        cy.get(`.u-o-sroll`).should('exist')
        cy.get(`.u-margin-auto`).should('exist')
    })
})

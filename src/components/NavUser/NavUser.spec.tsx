describe('NavUser - Base', () => {
    it(`Should render c-navuser`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=components-navuser--base`
        )
        cy.get(`.c-navuser`).should('exist')
    })

    it(`Should render the image`, () => {
        cy.get(`.c-navuser__image`).should('exist')
        cy.get(`.c-navuser__image--avatar`).should('exist')
    })
    it(`Should render user info`, () => {
        cy.get(`.c-navuser__info`).should('exist')
    })
})

describe('Video', () => {
    it(`Base Video: Should render c-video`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-video--base-video`
        )
        cy.get(`.c-video`).should('exist')
    })

    it(`Base Video: Should render iframe`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-video--base-video`
        )
        cy.get(`iframe`).should('exist')
    })
})

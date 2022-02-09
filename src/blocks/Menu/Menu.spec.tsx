describe('Sidebar Menu', () => {
    beforeEach(() => {
        cy.global()
    })

    it(`Should render container`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=${block.url}`)
    })
})

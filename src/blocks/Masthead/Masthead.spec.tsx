describe('Masthead', () => {
    beforeEach(() => {
        cy.global()
    })

    it(`Should render U-Block`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-masthead--base`
        )
        cy.get(`.u-block`).should('exist')
    })

    it(`Should render Container`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-masthead--base`
        )
        cy.get(`#id-masthead`).should('exist')
    })

    it(`Should render content`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-masthead--base`
        )
        cy.get(`.b-masthead`).should('exist')
    })

    it(`Should render header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-masthead--base`
        )
        cy.get(`.b-masthead h1`).should('exist')
        cy.get(`.b-masthead h1`).should('not.be.empty')
        cy.get(`.b-masthead svg`).should('exist')
    })
})

describe('Avatar', () => {
    it(`Should render b-avatar`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-avatar--base`)
        cy.get(`.b-avatar`).should('exist')
    })

    it(`Should render details__aside`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-avatar--base`)
        cy.get(`.details__aside`).should('exist')
    })

    it(`Should render the image`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-avatar--base`)
        cy.get(`img`).should('exist')
    })

    it(`Should render the onClick`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-avatar--base-with-click`
        )
        cy.get(`.button__image`).click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('photo')
        })
    })

    it(`Should render the caption`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-avatar--with-caption`
        )
        cy.get(`figcaption`).should('exist').should('not.be.empty')
    })

    it(`Should render initials`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-avatar--with-initials`
        )
        cy.get(`p`).should('exist').should('not.be.empty')
    })

    it(`Should render details`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-avatar--with-details`
        )
        cy.get(`dl.u-link`).should('exist').should('not.be.empty')
    })

    it(`Should render details on left side`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-avatar--with-details-left`
        )
        cy.get(`.details__leftside`).should('exist')
    })
})

describe('SearchForm', () => {

    it(`Search Form: Should render form`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`form`).should('exist')
    })

    it(`Search Form: Should render c-searchform`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`.c-searchform`).should('exist')
    })

    it(`Search Form: Should render label`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`label`).should('exist')
    })

    it(`Search Form: Should render input`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`input`).should('exist')
    })

    it(`Search Form: Should render button`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`button`).should('exist')
    })

    it(`Search Form: Should render svg`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`svg`).should('exist')
    })

    it(`Search Form: Should render span`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`span`).should('exist')
    })

    it(`Search Form: Should render u-visually-hidden`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-searchform--base-search-form`
        )
        cy.get(`.u-visually-hidden`).should('exist')
    })

    

})
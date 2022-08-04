describe('Details - Base', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-details--base`
        )
        cy.get(`.b-details`).should('exist')
    })

    it(`Should render title`, () => {
        cy.get(`h2`).should('exist').and('not.be.empty')
    })

    it(`Should render meta`, () => {
        cy.get(`.details__meta`).should('exist')
        cy.get(`dl.u-link`).should('exist')
        cy.get(`dt`).should('exist').and('not.be.empty')
        cy.get(`dd`).should('exist').and('not.be.empty')
    })
})

describe('Details - Figure Variant', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-details--figure-variant`
        )
        cy.get(`.b-details--figure`).should('exist')
    })

    it(`Should render meta`, () => {
        cy.get(`.details__meta`).should('exist')
    })
    it(`Should render aside`, () => {
        cy.get(`.details__aside`).should('exist').and('not.be.empty')
        cy.get(`.details__aside figure`).should('exist')
        cy.get(`.details__aside img`).should('exist')
    })
})

describe('Details - Events Variant', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-details--events-variant`
        )
        cy.get(`.b-details--event`).should('exist')
    })

    it(`Should render meta`, () => {
        cy.get(`.details__meta`).should('exist')
    })
    it(`Should render aside`, () => {
        cy.get(`.details__aside`).should('exist').and('not.be.empty')
    })
})

describe('Details - PAst Events Variant', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-details--events-past-variant`
        )
        cy.get(`.b-details--eventpast`).should('exist')
    })

    it(`Should render meta`, () => {
        cy.get(`.details__meta`).should('exist')
    })
    it(`Should render aside`, () => {
        cy.get(`.details__aside`).should('exist').and('not.be.empty')
    })
})
export {}

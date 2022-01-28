import { first } from 'cypress/types/lodash'

describe('Accordion', () => {
    const types = ['base', 'single']

    types.map((type) => {
        it(`${type}: Should render the accordion`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get(`.c-accordion`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the input`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get(`input`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the accordion input`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get(`.accordion__input`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the label`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get(`label`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the accordion content`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get(`.accordion__content`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the accordion spacing`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get(`.accordion__spacing`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the paragraph`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get(`p`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the check`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--base`
            )
            cy.clearCookies()
            cy.get('[type="checkbox"]')
                .click({ multiple: true, force: true })
                .check()
            cy.get(`input`).should('have.attr', 'aria-expanded', 'true')
            cy.get(`label`).should('have.attr', 'aria-hidden', 'false')
            cy.get(`.accordion__content`).should(
                'have.attr',
                'aria-hidden',
                'false'
            )
        })
    })

    types.map((type) => {
        it(`${type}: Should render the uncheck`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--base`
            )
            cy.get('[type="checkbox"]').uncheck()
            cy.get(`input`).should('have.attr', 'aria-expanded', 'false')
            cy.get(`label`).should('have.attr', 'aria-hidden', 'true')
            cy.get(`.accordion__content`).should(
                'have.attr',
                'aria-hidden',
                'true'
            )
        })
    })

    //Single variant accordion
    it(`single variant accordion: Should render accordion input single`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-accordion--single`
        )
        cy.get(`.accordion__input--single`).should('exist')
    })
})

describe('Accordion', () => {
    const types = [
        'base',
        'single',
    ]

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
        it(`${type}: Should render the paragraph`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-accordion--${type}`
            )
            cy.get('[type="checkbox"]').check().should('exist')
        })
    })

    //Single variant accordion
    it(`Single variant accordion: Should render accordion input single`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-accordion--single`
        )
        cy.get(`.accordion__input--single`).should('exist')
    })
})

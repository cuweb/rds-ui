import data from './UblockData.json'
const { title, variations } = data

describe(title, () => {
    variations.map((variation) => {
        it(`Should render the ${variation.type} U-Block`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=components-u-block--${
                    variation.type
                }`
            )
            cy.get(`.u-block`).should('exist')
            cy.get(`.u-block--${variation.color}`).should('exist')
        })
    })

    it(`Should not render the U-Block heading`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-u-block--no-heading`
        )
        cy.get(`.u-block`).should('exist')
        cy.get(`.c-heading`).should('not.exist')
    })
})

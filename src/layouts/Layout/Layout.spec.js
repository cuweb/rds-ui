import data from './LayoutData.json'
const { title, variations } = data

describe(title, () => {
    variations.map((variation) => {
        it(`Should render the ${variation.type} layout`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=main-concepts-layouts--multicol-${
                    variation.type
                }`
            )
            cy.get(data.classname).should('exist')
            cy.get(`.l-multicol--${variation.type}`).should('exist')
        })
    })
})

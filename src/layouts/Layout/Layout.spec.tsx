import data from './LayoutData.json'
const { title, variations } = data

describe(title, () => {
    variations.map((variation) => {
        it(`${variation.type.toUpperCase()}: Should render the ${variation.type} layout`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=main-concepts-layouts--multicol-${
                    variation.type
                }`
            )
            cy.get(data.classname).should('exist')
            cy.get(`.l-multicol--${variation.type}`).should('exist')
        })
        it(`${variation.type.toUpperCase()}: Should render the main tag`, () => {
            cy.get(`.l-multicol--${variation.type} main`).should('exist')
        })
        it(`${variation.type.toUpperCase()}: Should accept main content`, () => {
            cy.get(`.l-multicol--${variation.type} main`).should('not.be.empty')
        })
    })

    it(`AM: Should render aside tag`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=main-concepts-layouts--multicol-am`)
        cy.get(`.l-multicol--am aside.multicol__nav`).should('exist')
        cy.get(`.l-multicol--am aside.multicol__nav`).should('not.be.empty')
    })

    it(`MA: Should render aside tag`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=main-concepts-layouts--multicol-ma`)
        cy.get(`.l-multicol--ma aside.multicol__nav`).should('exist')
        cy.get(`.l-multicol--ma aside.multicol__nav`).should('not.be.empty')
    })

    it(`AMA: Should render aside and sidebar tags`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=main-concepts-layouts--multicol-ama`)
        cy.get(`.l-multicol--ama aside.multicol__nav`).should('exist')
        cy.get(`.l-multicol--ama aside.multicol__nav`).should('not.be.empty')
        cy.get(`.l-multicol--ama aside.multicol__sidebar`).should('exist')
        cy.get(`.l-multicol--ama aside.multicol__nav`).should('not.be.empty')
    })
})

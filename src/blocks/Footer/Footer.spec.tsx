import data from './FooterData.json'
const { title, variations } = data

describe('Footer', () => {
    beforeEach(() => {
        cy.global()
    })

    variations.map((variation) => {
        it(`${variation.type.toUpperCase()}: Should render U-Block`, () => {
            cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-footer--${variation.type}`)
            cy.get(`.u-block`).should('exist')
        })
    })

    variations.map((variation) => {
        it(`${variation.type.toUpperCase()}: Should render ${
            variation.classname
        } classname`, () => {
            cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-footer--${variation.type}`)
            cy.get(variation.classname).should('exist')
        })
    })
})

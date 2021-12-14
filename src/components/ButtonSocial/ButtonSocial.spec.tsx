import data from './ButtonSocialData.json'

describe('Button Social', () => {
    beforeEach(() => {
        cy.global() // running the global state test commands before each test
    })

    data.variations.map((variation) => {
        const { type, url, text } = variation
        it(`${type.toUpperCase()}: Should render the container`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-button-social--${type}`
            )
            cy.get(`a.c-buttonsocial`).should('exist')
        })

        it(`${type.toUpperCase()}: Should render the right type`, () => {
            cy.get(`.c-buttonsocial--${type}`).should('exist')
        })

        it(`${type.toUpperCase()}: Should render the icon`, () => {
            cy.get(`.u-icon`).should('exist')
            cy.get(`.c-icon`).should('exist')
            cy.get(`.u-icon--circle`).should('exist')
        })

        it(`${type.toUpperCase()}: Should render the right url`, () => {
            cy.get('a').should('have.attr', 'href', url)
        })

        it(`${type.toUpperCase()}: Should render the hidden text`, () => {
            cy.get(`span.u-visually-hidden`)
                .should('exist')
                .should('not.be.empty')
                .should('contain.text', text)
        })
    })
})

import data from './HeadingData.json'

describe('Heading', () => {
    beforeEach(() => {
        cy.global()
    })

    data.variations.map((variation) => {
        const header = 'h2'
        const subheader = 'h3'
        const className = '.c-heading'

        // Base Heading
        it(`Should render the header`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-heading--base-heading`
            )
            cy.get(`${header}`).should('exist')
            cy.get(`${className}`).should('not.be.empty')
        })

        // Centered Heading
        it(`Should render the centered header`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-heading--centered-heading`
            )
            cy.get(`${className}`).should('exist')
            cy.get(`.c-heading--center`).should('exist')
        })

        // Heading with Paragraph
        it(`Should render the paragraph`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-heading--heading-with-paragraph`
            )
            cy.get(`p`).should('exist')
        })

        // Centered Heading with Paragraph
        it(`Should render the centered heading and paragraph`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-heading--centered-heading-with-paragraph`
            )
            cy.get(`${header}`).should('exist')
            cy.get(`p`).should('exist')
            cy.get(`${className}`).should('exist')
            cy.get(`.c-heading--center`).should('exist')
        })

        // Heading with Paragraph and Subhead
        it(`Should render the subheader`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-heading--heading-with-paragraph-and-subhead`
            )
            cy.get(subheader).should('exist')
        })
    })
})

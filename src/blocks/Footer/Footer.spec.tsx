import data from './FooterData.json'
const { variations } = data

describe('Footer', () => {
    beforeEach(() => {
        cy.global()
    })

    variations.map((variation) => {
        it(`${variation.type.toUpperCase()}: Should render U-Block`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-footer--${
                    variation.type
                }`
            )
            cy.get(`.u-block`).should('exist')
        })
    })

    variations.map((variation) => {
        it(`${variation.type.toUpperCase()}: Should render ${
            variation.classname
        } classname`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-footer--${
                    variation.type
                }`
            )
            cy.get(variation.classname).should('exist')
        })
    })

    it(`SIMPLE: Should render Name`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-footer--simple`
        )
        cy.get(`.p-name`).should('exist')
    })

    it(`SIMPLE: Should render Name`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-footer--simple`
        )
        cy.get(`.p-name`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Address`, () => {
        cy.get(`.p-extended-address`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Steeet`, () => {
        cy.get(`.p-street-address`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render city`, () => {
        cy.get(`.p-locality`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Province`, () => {
        cy.get(`.p-region`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Postal Code`, () => {
        cy.get(`.p-postal-code`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Country`, () => {
        cy.get(`.p-country-name`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Map link`, () => {
        cy.get(`.u-map`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render E-mail link`, () => {
        cy.get(`.u-email`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Tel link`, () => {
        cy.get(`.p-tel`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Fax link`, () => {
        cy.get(`.p-tel-fax`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Contact page link`, () => {
        cy.get(`.p-contact`).should('exist').should('not.be.empty')
    })

    it(`SIMPLE: Should render Hours and Days`, () => {
        cy.get(`.p-hours`).should('exist').should('not.be.empty')
        cy.get(`.p-hours span`).should('exist').should('not.be.empty')
        cy.get(`.p-hours time`).should('exist').should('not.be.empty')
    })
})

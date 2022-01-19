describe('Image Tiles', () => {

    it(`Image Tiles: Should render u-block`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`.u-block`).should('exist')
    })

    it(`Image Tiles: Should render u-block--full`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`.u-block--full`).should('exist')
    })

    it(`Image Tiles: Should render b-imagetile`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`.b-imagetile`).should('exist')
    })

    it(`Image Tiles: Should render imagetile__container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`.imagetile__container`).should('exist')
    })

    it(`Image Tiles: Should render anchor`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`a`).should('exist')
    })

    it(`Image Tiles: Should render imagetile__item`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`.imagetile__item`).should('exist')
    })

    it(`Image Tiles: Should render image`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`img`).should('exist')
    })

    it(`Image Tiles: Should render imagetile__content`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`.imagetile__content`).should('exist')
    })

    it(`Image Tiles: Should render header`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`h3`).should('exist')
    })

    it(`Image Tiles: Should render paragraph`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-image-tiles--base-image-tiles`
        )
        cy.get(`p`).should('exist')
    })

})
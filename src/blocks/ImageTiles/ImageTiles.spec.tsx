describe('ImageTiles', () => {

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

})
describe('TextImage', () => {
    const types = [
        'image-to-the-right',
        'image-to-the-left',
        'grey-background',
        'default-headings',
        'centered-headings',
        'large-width-blocks',
    ]

    types.map((type) => {
        it(`${type}: Should render the class`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=blocks-textimage--${type}`
            )
            cy.get(`.b-textimg`).should('exist')
        })

        it(`${type}: Should render the wrapper`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=blocks-textimage--${type}`
            )
            cy.get(`.textimg__wrapper`).should('exist')
        })

        it(`${type}: Should render the image`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=blocks-textimage--${type}`
            )
            cy.get(`.textimg__text`).should('exist')
        })
    })

    // Image to the Left

    it(`Image to the Left: Should render have b-textimg--imgtext className`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-textimage--image-to-the-left`
        )
        cy.get(`.b-textimg--imgtext`).should('exist')
    })

    // Grey Background

    it(`Grey Background: Should render the grey background`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-textimage--grey-background`
        )
        cy.get(`.u-block--grey`).should('exist')
    })
})

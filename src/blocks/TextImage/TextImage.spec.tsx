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
        it(`${type}: Should render the text image`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=blocks-textimage--${type}`
            )
            cy.get(`.b-textimg`).should('exist')
        })

        it(`${type}: Should render the text image wrapper`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=blocks-textimage--${type}`
            )
            cy.get(`.textimg__wrapper`).should('exist')
        })

        it(`${type}: Should render the text image text`, () => {
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

    // Default Headings

    it(`Default Headings: Should render the default headings`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-textimage--default-headings`
        )
        cy.get(`.c-heading-`).should('exist')
    })

    // Centered Headings

    it(`Centered Headings: Should render the centered headings`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-textimage--centered-headings`
        )
        cy.get(`.c-heading-`).should('exist')
        cy.get(`.c-heading--center`).should('exist')
    })

    // Large Width Blocks

    it(`Large Width Blocks: Should render the large width blocks`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-textimage--large-width-blocks`
        )
        cy.get(`.u-block--white`).should('exist')
    })
})

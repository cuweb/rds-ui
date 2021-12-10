describe('TextImage', () => {
    const types = ['image-to-the-right', 'image-to-the-left', 'grey-background', 'default-headings', 'centered-headings', 'large-width-blocks']

    types.map((type) => {
        it(`Should render the ${type} TextImage`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=blocks-textimage--${type}`
            )
            cy.get(`.b-textimg`).should('exist')
            cy.get(`.textimg__text`).should('exist')
        })
    })
})
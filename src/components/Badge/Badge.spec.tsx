describe('Badge', () => {
    const types = [
        'number-badge',
        'label-badge',
        'not-cool-badge',
        'cool-badge',
    ]

    types.map((type) => {
        it(`${type}: Should render the span`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-badge--${type}`
            )
            cy.get(`span`).should('exist')
        })
    })
})

describe('Alert', () => {
    beforeEach(() => {
        cy.global() // running the global state test commands before each test
    })

    const types = ['error', 'info', 'success', 'warning']
    const title = 'h2'
    const icon = '.c-alert__icon'
    const button = '.c-alert__button'

    types.map((type) => {
        it(`Should render the ${type} alert`, () => {
            cy.clearCookies()
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-alert--${type}`
            )
            cy.get(`.c-alert--${type}`).should('exist')
            cy.get(`.c-alert--${type} ${title}`).should('exist')
            cy.get(`.c-alert--${type} ${icon}`).should('exist')

            type === 'error'
                ? cy.get(button).should('exist')
                : cy.get(button).should('not.exist')
        })
    })
})

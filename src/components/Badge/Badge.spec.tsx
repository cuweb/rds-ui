describe('Badge', () => {

    const types = [
        'number-badge',
        'label-badge',
        'not-cool-badge',
        'cool-badge'
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

    //not cool badge
    it(`Not cool Badge: Should render strong`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-badge--not-cool-badge`
        )
        cy.get(`strong`).should('exist')
    })

    //cool badge
    it(`Cool Badge: Should render strong`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-badge--cool-badge`
        )
        cy.get(`strong`).should('exist')
    })





})

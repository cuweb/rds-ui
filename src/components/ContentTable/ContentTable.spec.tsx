describe('ContentTable', () => {
    const types = [
        'table-component',
    ]

    types.map((type) => {
        it(`${type}: Should render the table`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-card--${type}`
            )
            cy.get(`table`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the thead`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-contenttable--${type}`
            )
            cy.get(`thead`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the table row`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-contenttable--${type}`
            )
            cy.get(`tr`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the table header`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-contenttable--${type}`
            )
            cy.get(`th`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the table body`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-contenttable--${type}`
            )
            cy.get(`tbody`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the table data`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-contenttable--${type}`
            )
            cy.get(`td`).should('exist')
        })
    })

})

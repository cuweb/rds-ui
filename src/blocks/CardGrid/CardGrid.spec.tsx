describe('Card Grid', () => {
    beforeEach(() => {
        cy.global()
    })

    const variations = [
        { type: 'one', columns: '1' },
        { type: 'two', columns: '2' },
        { type: 'three', columns: '3' },
        { type: 'four', columns: '4' },
    ]
    const title = 'h2'
    const container = '.b-cardgrid.u-grid'

    variations.map((variation) => {
        const variationTitle = variation.type.toUpperCase()
        it(`${variationTitle}: Should render container`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-card-grid--${
                    variation.type
                }-column`
            )
            cy.get(`${container}`).should('exist')
        })

        it(`${variationTitle}: Should render ${variation.columns} column(s)`, () => {
            cy.get(`.u-grid--${variation.columns}`).should('exist')
        })

        it(`${variationTitle}: Should render title`, () => {
            cy.get(title).should('exist')
        })
    })
})

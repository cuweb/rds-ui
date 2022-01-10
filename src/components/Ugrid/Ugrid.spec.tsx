describe('U-Grid', () => {
    beforeEach(() => {
        cy.global()
    })

    const variations = [
        { type: 'one', columns: '1' },
        { type: 'two', columns: '2' },
        { type: 'three', columns: '3' },
        { type: 'four', columns: '4', className: '.b-custom' },
    ]
    const container = '.u-grid'

    variations.map((variation) => {
        const variationTitle = variation.type.toUpperCase()
        it(`${variationTitle}: Should render container`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=components-u-grid--${
                    variation.type
                }-column`
            )
            cy.get(`${container}`).should('exist')
        })

        it(`${variationTitle}: Should render ${variation.columns} column(s)`, () => {
            cy.get(`.u-grid--${variation.columns}`).should('exist')
        })

        if (variation.className) {
            it(`${variationTitle}: Should render ${variation.columns} column(s)`, () => {
                cy.get(variation.className).should('exist')
            })
        }
    })
})

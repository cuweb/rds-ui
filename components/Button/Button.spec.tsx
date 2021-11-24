describe('Button', () => {
    const button = {
        default: `.c-buttoncta`,
        ghost: `.c-buttoncta--ghost`,
        full: `.c-buttoncta--full`,
    }

    const types = [
        {
            nane: 'Default',
            tag: '',
        },
        {
            nane: 'Ghost',
            tag: '--ghost',
        },
        {
            nane: 'Full Width',
            tag: '--full',
        },
    ]

    types.map((type) => {
        it(`Should render the ${type.nane} button`, () => {
            cy.clearCookies()
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=components-button${
                    type.tag
                }`
            )
            cy.get(`.c-buttoncta${type.tag}`).should('exist')
        })
    })
})

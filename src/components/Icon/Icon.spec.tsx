import icons from '../../lib/icons'

describe('Icon', () => {
    beforeEach(() => {
        cy.global()
    })

    icons.map((variation) => {
        const { title, type, path } = variation
        it(`${title}: Should render the icon`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-icon--${type.toLocaleLowerCase()}`
            )
            cy.get('.c-icon').should('exist').and('not.be.empty')
            cy.get('.c-icon g').should('exist').and('not.be.empty')
            cy.get('.c-icon path').should('exist')
            cy.get('.c-icon g').should('contain.html', path)
        })
    })
})

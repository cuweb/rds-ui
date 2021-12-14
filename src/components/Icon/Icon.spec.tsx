import data from './IconData.json'

describe('Icon', () => {
    beforeEach(() => {
        cy.global() // running the global state test commands before each test
    })

    const { classname, variations } = data

    variations.map((variation) => {
        const { title, type, icon } = variation
        it(`${title}: Should render the icon`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-icon--${type}`
            )
            cy.get(classname).should('exist')
        })
    })
})

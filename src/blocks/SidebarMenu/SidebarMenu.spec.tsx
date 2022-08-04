describe('Sidebar Menu', () => {
    const container = '.b-menu'
    const nav = '.c-nav'
    const navVariant = '.c-nav--sidenav'
    const navMenu = '.nav__menu'
    const presentation = '[role="presentation"]'
    const ariaLabel = '[aria-label="Main Navigation"]'
    const subMenu = '.has-submenu'
    const subMenuList = '.is-submenu'
    const menuButton = '.has-submenu > button'

    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-sidebar-menu--side-menu`
        )
        cy.get(container).should('exist')
    })

    it(`Should render nav`, () => {
        cy.get(nav).should('exist')
        cy.get(navVariant).should('exist')
    })

    it(`Should render nav menu`, () => {
        cy.get(navMenu).should('exist')
    })

    it(`Should render nav role presentation`, () => {
        cy.get(presentation).should('exist')
    })

    it(`Should render nav aria label`, () => {
        cy.get(ariaLabel).should('exist')
    })

    it(`Should render sub menu`, () => {
        cy.get(subMenu).should('exist')
        cy.get(`${subMenu} .is-submenu`).should('exist')
    })

    it(`Should render sub sub menu`, () => {
        cy.get(`${subMenu} ${subMenu}`).should('exist')
    })

    it(`Should render sub menu button`, () => {
        cy.get(menuButton).should('exist')
    })

    it(`Should render menu item link`, () => {
        cy.get('li a').should('exist')
    })

    it(`Should toggle submenu when the button is clicked`, () => {
        // Open
        cy.get(menuButton)
            .first()
            .click({ multiple: true, force: true })
            .should('have.attr', 'aria-expanded', 'true')
        cy.get(subMenu).first().should('not.have.class', '.open')
        cy.get(subMenuList).first().should('not.have.class', '.open')

        // False
        cy.get(menuButton)
            .first()
            .click({ multiple: true, force: true })
            .should('have.attr', 'aria-expanded', 'false')
        cy.get(subMenu).first().should('not.have.class', '.open')
        cy.get(subMenuList).first().should('not.have.class', '.open')
    })

    it(`Should be sticky`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-sidebar-menu--sticky`
        )
        cy.get('.u-sticky').should('exist')
    })
})
export {}

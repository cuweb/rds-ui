describe('Masthead', () => {
    beforeEach(() => {
        cy.global()
    })

    it(`Should render U-Block`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-masthead--base`
        )
        cy.get(`.u-block`).should('exist')
    })

    it(`Should render Container`, () => {
        cy.get(`#id-masthead`).should('exist')
    })

    it(`Should render content`, () => {
        cy.get(`.b-masthead`).should('exist')
    })

    it(`Should render header`, () => {
        cy.get(`.b-masthead h1`).should('exist').should('not.be.empty')
        cy.get(`.b-masthead svg`).should('exist')
    })

    it(`Should render have link`, () => {
        cy.get(`.b-masthead h1 a`).should('exist').should('not.be.empty')
    })
})

describe('Masthead - Brand Logo', () => {
    beforeEach(() => {
        cy.global()
    })

    it(`Should render Image`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-masthead--brand-logo`
        )
        cy.get(`.masthead__brand`).should('exist')
    })
})

describe('Masthead - With Menu', () => {
    beforeEach(() => {
        cy.global()
    })

    it(`Should render menu container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-masthead--with-menu`
        )
        cy.get(`.c-nav.c-nav--topnav`).should('exist')
        cy.get(`.nav__menu.nav__menu--top`).should('exist')
    })

    it(`Should render menu items`, () => {
        cy.get(`.c-nav.c-nav--topnav`).should('exist')
        cy.get(`.nav__menu.nav__menu--top`).should('exist')
    })

    it(`Should render submenu items`, () => {
        cy.get(`.has-submenu.c-menupopup.c-menupopup--left`).should('exist')
        cy.get(`.is-submenu`).should('exist')
        cy.get(`.is-submenu li a`)
            .should('exist')
            .should('have.attr', 'href')
            .should('not.be.empty')
    })

    it(`Should render submenu buttom`, () => {
        cy.get(`.nav--menubar__button`).should('exist').should('not.be.empty')
        cy.get(`.nav--menubar__button span`)
            .should('exist')
            .should('not.be.empty')
    })

    it(`Should toggle menu when click`, () => {
        // Open
        cy.get(`.has-submenu.open`).should('not.exist')
        cy.get(`.nav--menubar__button`)
            .first()
            .click({ multiple: true, force: true })
            .should('have.attr', 'aria-expanded', 'true')
        cy.get(`.has-submenu.open`).should('exist')

        // Open
        cy.get(`.has-submenu.open`).should('exist')
        cy.get(`.nav--menubar__button`)
            .first()
            .click({ multiple: true, force: true })
            .should('have.attr', 'aria-expanded', 'false')
        cy.get(`.has-submenu.open`).should('not.exist')
    })
})

describe('Masthead - With Actions', () => {
    beforeEach(() => {
        cy.global()
    })

    it(`Should render actions container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-masthead--with-actions`
        )
        cy.get(`.masthead__actions`).should('exist')
    })

    it(`Should render actions buttons`, () => {
        cy.get(`.masthead__cta`).should('exist').should('not.be.empty')
        cy.get(`.masthead__cta--white`).should('exist')
        cy.get(`.masthead__cta--red`).should('exist')
        cy.get(`.c-menupopup--right`).should('exist')
    })

    it(`Should render actions buttons submenu`, () => {
        cy.get(`.c-menupopup--right`).should('exist')
    })
})

describe('Masthead - Base', () => {
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

describe('Masthead - Menu', () => {
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

        // Close
        cy.get(`.nav--menubar__button`)
            .first()
            .click({ multiple: true, force: true })
            .should('have.attr', 'aria-expanded', 'false')
        cy.get(`.has-submenu.open`).should('not.exist')
    })
})

describe('Masthead - Actions Container', () => {
    it(`Should render actions container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-masthead--with-actions`
        )
        cy.get(`.masthead__actions`).should('exist')
    })
})

describe('Masthead - Actions Menu', () => {
    it(`Should render actions buttons`, () => {
        cy.get(`.masthead__cta`).should('exist').should('not.be.empty')
        cy.get(`.masthead__cta--white`).should('exist')
    })

    it(`Should render actions red button`, () => {
        cy.get(`.masthead__cta--red`).should('exist')
    })

    it(`Should render actions buttons submenu`, () => {
        cy.get(`.c-menupopup--right`).should('exist')
        cy.get(`.c-menupopup--right`).should('exist')
    })

    it(`Should toggle menu when click`, () => {
        // Open
        cy.get(`.c-menupopup--right.open`).should('not.exist')
        cy.get(`.nav--menubar__button`)
            .first()
            .click({ multiple: true, force: true })
            .should('have.attr', 'aria-expanded', 'true')
        cy.get(`.c-menupopup--right.open`).should('exist')

        // Close
        cy.get(`.nav--menubar__button`)
            .first()
            .click({ multiple: true, force: true })
            .should('have.attr', 'aria-expanded', 'false')
        cy.get(`.c-menupopup--right.open`).should('not.exist')
    })
})

describe('Masthead - Login', () => {
    it(`Should render container`, () => {
        cy.get(`.masthead__login`).should('exist').should('not.be.empty')
    })

    it(`Should render icon`, () => {
        cy.get(`.masthead__login svg`).should('exist')
    })

    it(`Should render button text`, () => {
        cy.get(`.masthead__login button span`)
            .should('exist')
            .should('not.be.empty')
    })

    it(`Should toggle dialog on click`, () => {
        // Open
        cy.get(`.modal__login`).should('not.exist')
        cy.get(`.masthead__login button`).click()
        cy.get(`.modal__login`).should('exist')

        // Close
        cy.get(`.masthead__closebtn`).click()
        cy.get(`.modal__login`).should('not.exist')
    })
})

describe('Masthead - Search', () => {
    it(`Should render container`, () => {
        cy.get(`.masthead__search`).should('exist').should('not.be.empty')
    })

    it(`Should render icon`, () => {
        cy.get(`.masthead__search svg`).should('exist')
    })

    it(`Should render button text`, () => {
        cy.get(`.masthead__search button span`)
            .should('exist')
            .should('not.be.empty')
    })

    it(`Should toggle dialog on click`, () => {
        // Open
        cy.get(`.modal__search`).should('not.exist')
        cy.get(`.masthead__search button`).click()
        cy.get(`.modal__search`).should('exist')

        // Close
        cy.get(`.masthead__closebtn`).click()
        cy.get(`.modal__search`).should('not.exist')
    })
})

describe('Masthead - Mobile', () => {
    const viewport = 'iphone-7'
    it(`should render mobile button`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-masthead--kitchen-sink`
        )
        cy.viewport(viewport)
        cy.get(`.masthead__navicon`).should('exist')
        cy.get(`.c-navicon`).should('exist')
    })

    it(`Should not render menu`, () => {
        cy.viewport(viewport)
        cy.get(`.nav__menu.nav__menu--top`).should('not.exist')
    })

    it(`Should not render actions buttons`, () => {
        cy.viewport(viewport)
        cy.get(`.masthead__cta`).should('not.exist')
    })

    it(`Should not render login`, () => {
        cy.viewport(viewport)
        cy.get(`.masthead__login`).should('not.exist')
    })

    it(`Should not render search`, () => {
        cy.viewport(viewport)
        cy.get(`.masthead__search`).should('not.exist')
    })

    it(`Should not render search`, () => {
        cy.viewport(viewport)
        cy.get(`.masthead__search`).should('not.exist')
    })

    it(`Should togle menu`, () => {
        cy.viewport(viewport)
        // Open
        cy.get(`.modal__menu`).should('not.exist')
        cy.get(`.c-navicon`).click()
        cy.get(`.modal__menu`).should('exist')
        cy.get(`.nav__menu.nav__menu--top`).should('exist')

        // Close
        cy.get(`.masthead__closebtn`).click()
        cy.get(`.modal__menu`).should('not.exist')
    })
})

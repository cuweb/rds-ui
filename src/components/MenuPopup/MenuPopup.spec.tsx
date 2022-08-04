describe('Menu Popup  - Base', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-menu-popup--base`
        )
        cy.get(`.c-menupopup`).should('exist')
    })

    it(`Should accept custom className`, () => {
        cy.get(`.custom-classname`).should('exist')
    })

    it(`Should render buttom`, () => {
        cy.get(`.c-menupopup button`).should('exist')
    })

    it(`Should render buttom custom classname`, () => {
        cy.get(`button.button-classname`).should('exist')
    })

    it(`Should toggle menu on buttom click`, () => {
        cy.get(`.menupopup__menu`).should('not.exist')
        cy.get(`.c-menupopup button`).click()
        cy.get(`.menupopup__menu`).should('exist')
    })
})

describe('Menu Popup  - Base with Action', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-menu-popup--base-with-action`
        )
        cy.get(`.c-menupopup`).should('exist')
    })

    it(`Should accept custom className`, () => {
        cy.get(`.custom-classname`).should('exist')
    })

    it(`Should render buttom`, () => {
        cy.get(`.c-menupopup button`).should('exist')
    })

    it(`Should render buttom custom classname`, () => {
        cy.get(`button.button-classname`).should('exist')
    })

    it(`Should toggle menu on buttom click`, () => {
        cy.get(`.menupopup__menu`).should('not.exist')
        cy.get(`.c-menupopup button`).click()
        cy.get(`.menupopup__menu`).should('exist')
    })
})

describe('Menu Popup  - Menu', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-menu-popup--base`
        )
        cy.get(`.c-menupopup button`).click()
        cy.get(`.menupopup__menu`).should('exist')
    })

    it(`Should render items`, () => {
        cy.get(`.menupopup__menu li`).should('exist')
    })

    it(`Should render items custom classname`, () => {
        cy.get(`li a.item-classname`).should('exist')
    })

    it(`Should render links`, () => {
        cy.get(`.menupopup__menu li a`).should('exist')
    })

    it(`Should render separator`, () => {
        cy.get(`.popup__sep`).should('exist')
    })
})

describe('Menu Popup  - Right Side', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-menu-popup--right-side-menu`
        )
        cy.get(`.c-menupopup--right`).should('exist')
    })
})

describe('Menu Popup  - With Icons', () => {
    it(`Should render icons`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-menu-popup--with-icons`
        )
        cy.get(`.c-menupopup button`).click()
        cy.get(`.c-icon`).should('exist')
        cy.get(`.c-menupopup button`).click()
    })
})

describe('Menu Popup  - Without Title', () => {
    it(`Should render container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-menu-popup--without-title`
        )
        cy.get(`.c-menupopup`).should('exist')
    })

    it(`Should accept custom className`, () => {
        cy.get(`.custom-classname`).should('exist')
    })

    it(`Should render buttom`, () => {
        cy.get(`.c-menupopup button`).should('exist')
    })

    it(`Should render b-sidebar__actions`, () => {
        cy.get(`.b-sidebar__actions`).should('exist')
    })

    it(`Should render buttom custom classname`, () => {
        cy.get(`button.button-classname`).should('exist')
    })

    it(`Should toggle menu on buttom click`, () => {
        cy.get(`.menupopup__menu`).should('not.exist')
        cy.get(`.c-menupopup button`).click()
        cy.get(`.menupopup__menu`).should('exist')
    })
})
export {}

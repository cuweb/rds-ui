describe('Panel', () => {
    const types = [
        'base',
        'white-heading-color',
        'with-link',
        'with-heading-and-button',
        'with-image',
        'with-cta-button',
        'with-icons',
    ]

    types.map((type) => {
        it(`${type}: Should render the u-block`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--${type}`
            )
            cy.get(`.u-block`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the container`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--${type}`
            )
            cy.get(`.b-sidebar`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the title`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--${type}`
            )
            cy.get(`h2`).should('exist')
        })
    })

    it(`BasePanelWithLink: Should render the link`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--with-link`
        )
        cy.get(`a`).should('exist')
    })

    it(`PanelWithHeadingAndButton:Should render the heading and CTA button`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-panel--with-heading-and-button`
        )
        cy.get(`.sidebar__heading`).should('exist')
        cy.get(`.c-buttoncta`).should('exist')
    })

    it(`PanelWithImage: Should render the image`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--with-image`
        )
        cy.get(`img`).should('exist')
        cy.get(`a`).should('exist')
    })

    it(`PanelWithCTAButton: Should render the image and CTA button`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-panel--with-cta-button`
        )
        cy.get(`img`).should('exist')
        cy.get(`a`).should('exist')
        cy.get(`.c-buttoncta`).should('exist')
    })

    it(`PanelWithIcons: Should render the icons`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--with-icons`
        )
        cy.get(`.b-sidebar svg`).should('exist')
    })

    it(`with-actions: Should render the u-block`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-panel--with-actions`
        )
        cy.get(`.u-block`).should('exist')
    })

    it(`with-actions: Should render the container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-panel--with-actions`
        )
        cy.get(`.b-sidebar`).should('exist')
    })

    it(`with-actions: Should render the container`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-panel--with-actions`
        )
        cy.get(`.b-sidebar`).should('exist')
    })

    it(`with-actions: Should render the title`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-panel--with-actions`
        )
        cy.get(`.b-sidebar__actions`).should('exist')
    })

    it(`with-actions: Should render the title`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-panel--with-actions`
        )
        cy.get(`.c-menupopup`).should('exist')
    })
})

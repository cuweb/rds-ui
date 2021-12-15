import data from './BannerData.json'

describe('Banner', () => {
    const blockClassName = '.b-banner'

    data.variations.map((variation) => {
        const { type, title, url } = variation

        it(`${title}: Should render u-block`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-banner--${
                    url || type
                }`
            )
            cy.get(`.u-block`).should('exist')
        })

        it(`${title}: Should render container`, () => {
            cy.get(`${blockClassName}`).should('exist')
        })

        it(`${title}: Should render section`, () => {
            cy.get(`${blockClassName} section`).should('exist')
        })

        it(`${title}: Should render title`, () => {
            cy.get(`${blockClassName} h1`).should('exist').and('not.be.empty')
        })

        if (type === 'breadcrumbs') {
            it(`${title}: Should render breadcrumbs`, () => {
                cy.get(`${blockClassName} nav`).should('exist')
                cy.get(`${blockClassName} ol`).should('exist')
                cy.get(`${blockClassName} li`)
                    .should('exist')
                    .and('not.be.empty')
                cy.get(`${blockClassName} .u-visually-hidden`).should('exist')
                cy.get(`${blockClassName} li a`).should('exist')
            })
        }
        if (type === 'heroimage') {
            it(`${title}: Should render image`, () => {
                cy.get(`.b-banner--img`).should('exist')
            })
        }

        if (type === 'heroimageTop') {
            it(`${title}: Should render image aligned to the top`, () => {
                cy.get(`.b-banner--img-top`).should('exist')
            })
        }

        if (type === 'heroimageBottom') {
            it(`${title}: Should render image aligned to the bottom`, () => {
                cy.get(`.b-banner--img-bottom`).should('exist')
            })
        }

        if (type === 'heroimageLight') {
            it(`${title}: Should render image lightened`, () => {
                cy.get(`.b-banner--img-light`).should('exist')
            })
        }

        if (type === 'heroimageDark') {
            it(`${title}: Should render image darkened`, () => {
                cy.get(`.b-banner--img-dark`).should('exist')
            })
        }
    })

    it(`With CTA Button: Should render button`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-banner--with-cta-button`
        )
        cy.get(`.c-buttoncta`).should('exist')
    })

    it(`With Multiple Buttons: Should render buttons`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-banner--with-multiple-buttons`
        )
        cy.get(`p`).should('exist')
        cy.get(`p .c-buttoncta`).should('exist')
    })
})

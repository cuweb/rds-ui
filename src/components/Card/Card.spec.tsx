describe('Card', () => {
    const types = [
        'base-card',
        'card-with-title-and-description',
        'news-variant-with-date',
        'news-variant-with-date-and-description',
        'video-variant',
        'figure-variant',
        'figure-variant-without-link',
        'max-width-variant',
    ]

    types.map((type) => {
        it(`${type}: Should render the card`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-card--${type}`
            )
            cy.get(`.c-card`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the figure`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-card--${type}`
            )
            cy.get(`figure`).should('exist')
        })
    })

    // Base card

    it(`Base card: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--base-card`
        )
        cy.get(`a`).should('exist')
    })

    it(`Base card: Should render image element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--base-card`
        )
        cy.get(`img`).should('exist')
    })

    it(`Base card: Should render header element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--base-card`
        )
        cy.get(`header`).should('exist')
    })

    it(`Base card: Should render section heading element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--base-card`
        )
        cy.get(`h3`).should('exist')
    })

    // Card with title and description

    it(`Card with title and description: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--card-with-title-and-description`
        )
        cy.get(`a`).should('exist')
    })

    it(`Card with title and description: Should render image element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--card-with-title-and-description`
        )
        cy.get(`img`).should('exist')
    })

    it(`Card with title and description: Should render header element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--card-with-title-and-description`
        )
        cy.get(`header`).should('exist')
    })

    it(`Card with title and description: Should render section heading element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--card-with-title-and-description`
        )
        cy.get(`h3`).should('exist')
    })

    it(`Card with title and description: Should render paragraph element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--card-with-title-and-description`
        )
        cy.get(`p`).should('exist')
    })

    // News variant with date

    it(`News variant with date: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date`
        )
        cy.get(`a`).should('exist')
    })

    it(`News variant with date: Should render image element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date`
        )
        cy.get(`img`).should('exist')
    })

    it(`News variant with date: Should render header element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date`
        )
        cy.get(`header`).should('exist')
    })

    it(`News variant with date: Should render section heading element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date`
        )
        cy.get(`h3`).should('exist')
    })

    it(`News variant with date: Should render time element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date`
        )
        cy.get(`time`).should('exist')
    })

    // News variant with date and description

    it(`News variant with date and description: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date-and-description`
        )
        cy.get(`a`).should('exist')
    })

    it(`News variant with date and description: Should render image element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date-and-description`
        )
        cy.get(`img`).should('exist')
    })

    it(`News variant with date and description: Should render header element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date-and-description`
        )
        cy.get(`header`).should('exist')
    })

    it(`News variant with date and description: Should render section heading element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date-and-description`
        )
        cy.get(`h3`).should('exist')
    })

    it(`News variant with date and description: Should render paragraph element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date-and-description`
        )
        cy.get(`p`).should('exist')
    })

    it(`News variant with date and description: Should render time element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--news-variant-with-date-and-description`
        )
        cy.get(`time`).should('exist')
    })

    // Video Variant

    it(`Video Variant: Should render the c-card--video`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`.c-card--video`).should('exist')
    })

    it(`Video Variant: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`a`).should('exist')
    })

    it(`Video Variant: Should render image element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`img`).should('exist')
    })

    it(`Video Variant: Should render header element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`header`).should('exist')
    })

    it(`Video Variant: Should render section heading element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`h3`).should('exist')
    })

    it(`Video Variant: Should render icon`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`.u-icon`).should('exist')
    })

    it(`Video Variant: Should render icon circle`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`.u-icon--circle`).should('exist')
    })

    it(`Video Variant: Should render svg element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--video-variant`
        )
        cy.get(`svg`).should('exist')
    })

    // Figure variant

    it(`Figure variant: Should render the c-card--figure`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--figure-variant`
        )
        cy.get(`.c-card--figure`).should('exist')
    })

    it(`Figure variant: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--figure-variant`
        )
        cy.get(`a`).should('exist')
    })

    it(`Figure variant: Should render figure caption element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--figure-variant`
        )
        cy.get(`figcaption`).should('exist')
    })

    it(`Figure variant: Should render paragraph element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--figure-variant`
        )
        cy.get(`p`).should('exist')
    })

    // Figure variant without link

    it(`Figure variant without link: Should render the c-card--figure`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--figure-variant-without-link`
        )
        cy.get(`.c-card--figure`).should('exist')
    })

    it(`Figure variant without link: Should render figure caption element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--figure-variant-without-link`
        )
        cy.get(`figcaption`).should('exist')
    })

    it(`Figure variant without link: Should render paragraph element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--figure-variant-without-link`
        )
        cy.get(`p`).should('exist')
    })

    // Max-width variant

    it(`Max-width variant: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--max-width-variant`
        )
        cy.get(`a`).should('exist')
    })

    it(`Max-width variant: Should render image element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--max-width-variant`
        )
        cy.get(`img`).should('exist')
    })

    it(`Max-width variant: Should render header element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--max-width-variant`
        )
        cy.get(`header`).should('exist')
    })

    it(`Max-width variant: Should render section heading element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--max-width-variant`
        )
        cy.get(`h3`).should('exist')
    })

    it(`Max-width variant: Should render paragraph element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card--max-width-variant`
        )
        cy.get(`p`).should('exist')
    })
})
export {}

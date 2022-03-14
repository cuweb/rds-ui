describe('Panel', () => {
    const types = [
        'base-listing',
        'with-subtitles',
        'with-image',
        'with-badge',
        'with-icon',
        'icon-and-subtitle',
        'event-variant',
        'news-variant',
        'news-image-variant',
        'people-variant',
        'video-variant',
        'two-colum'
    ]

    types.map((type) => {
        it(`${type}: Should render the u-block`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
            )
            cy.get(`.u-block`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the u-block--white`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
            )
            cy.get(`.u-block--white`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the b-listing`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
            )
            cy.get(`.b-listing`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the subheader`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
            )
            cy.get(`h3`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the list`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
            )
            cy.get(`ul`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the list element`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
            )
            cy.get(`li`).should('exist')
        })
    })

    types.map((type) => {
        it(`${type}: Should render the anchor`, () => {
            cy.visit(
                `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
            )
            cy.get(`a`).should('exist')
        })
    })

    it(`base-listing: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--base-listing`
        )
        cy.get(`header`).should('exist')
    })

    it(`base-listing: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--base-listing`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`base-listing: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--base-listing`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`with-subtitles: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-subtitles`
        )
        cy.get(`header`).should('exist')
    })

    it(`with-subtitles: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-subtitles`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`with-subtitles: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-subtitles`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`with-subtitles: Should render the subtitles`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-subtitles`
        )
        cy.get(`p`).should('exist')
    })

    it(`with-image: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-image`
        )
        cy.get(`header`).should('exist')
    })

    it(`with-image: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-image`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`with-image: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-image`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`with-image: Should render the subtitles`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-image`
        )
        cy.get(`p`).should('exist')
    })

    it(`with-image: Should render the figure`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-image`
        )
        cy.get(`figure`).should('exist')
    })

    it(`with-image: Should render the image`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-image`
        )
        cy.get(`img`).should('exist')
    })

    it(`with-badge: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-badge`
        )
        cy.get(`header`).should('exist')
    })

    it(`with-badge: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-badge`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`with-badge: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-badge`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`with-badge: Should render the badge`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-badge`
        )
        cy.get(`.c-badge`).should('exist')
    })

    it(`with-icon: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-icon`
        )
        cy.get(`header`).should('exist')
    })

    it(`with-icon: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-icon`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`with-icon: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-icon`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`with-icon: Should render the figure`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-icon`
        )
        cy.get(`figure`).should('exist')
    })

    it(`with-icon: Should render the svg`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--with-icon`
        )
        cy.get(`svg`).should('exist')
    })

    it(`icon-and-subtitle: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--icon-and-subtitle`
        )
        cy.get(`header`).should('exist')
    })

    it(`icon-and-subtitle: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--icon-and-subtitle`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`icon-and-subtitle: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--icon-and-subtitle`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`icon-and-subtitle: Should render the figure`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--icon-and-subtitle`
        )
        cy.get(`figure`).should('exist')
    })

    it(`icon-and-subtitle: Should render the svg`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--icon-and-subtitle`
        )
        cy.get(`svg`).should('exist')
    })

    it(`icon-and-subtitle: Should render the subtitle`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--icon-and-subtitle`
        )
        cy.get(`p`).should('exist')
    })

    it(`event-variant: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--event-variant`
        )
        cy.get(`header`).should('exist')
    })

    it(`event-variant: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--event-variant`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`event-variant: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--event-variant`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`event-variant: Should render the time`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--event-variant`
        )
        cy.get(`time`).should('exist')
    })

    it(`event-variant: Should render the subtitle`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--event-variant`
        )
        cy.get(`p`).should('exist')
    })

    it(`news-variant: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-variant`
        )
        cy.get(`header`).should('exist')
    })

    it(`news-variant: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-variant`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`news-variant: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-variant`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`news-variant: Should render the time`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-variant`
        )
        cy.get(`time`).should('exist')
    })

    it(`news-variant: Should render the subtitle`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-variant`
        )
        cy.get(`p`).should('exist')
    })

    it(`news-image-variant: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-image-variant`
        )
        cy.get(`header`).should('exist')
    })

    it(`news-image-variant: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-image-variant`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`news-image-variant: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-image-variant`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`news-image-variant: Should render the time`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-image-variant`
        )
        cy.get(`time`).should('exist')
    })

    it(`news-image-variant: Should render the subtitle`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-image-variant`
        )
        cy.get(`p`).should('exist')
    })

    it(`news-image-variant: Should render the figure`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-image-variant`
        )
        cy.get(`figure`).should('exist')
    })

    it(`news-image-variant: Should render the image`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--news-image-variant`
        )
        cy.get(`img`).should('exist')
    })

    it(`people-variant: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--people-variant`
        )
        cy.get(`header`).should('exist')
    })

    it(`people-variant: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--people-variant`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`people-variant: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--people-variant`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`people-variant: Should render the subtitle`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--people-variant`
        )
        cy.get(`p`).should('exist')
    })

    it(`people-variant: Should render the figure`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--people-variant`
        )
        cy.get(`figure`).should('exist')
    })

    it(`people-variant: Should render the image`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--people-variant`
        )
        cy.get(`img`).should('exist')
    })

    it(`video-variant: Should render the header`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--video-variant`
        )
        cy.get(`header`).should('exist')
    })

    it(`video-variant: Should render the c-heading`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--video-variant`
        )
        cy.get(`.c-heading`).should('exist')
    })

    it(`video-variant: Should render the u-no-border`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--video-variant`
        )
        cy.get(`.u-no-border`).should('exist')
    })

    it(`video-variant: Should render the figure`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--video-variant`
        )
        cy.get(`figure`).should('exist')
    })

    it(`video-variant: Should render the image`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--video-variant`
        )
        cy.get(`img`).should('exist')
    })

    it(`video-variant: Should render the image`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--video-variant`
        )
        cy.get(`svg`).should('exist')
    })

    it(`two-column: Should render the ugrid`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--two-column`
        )
        cy.get(`.u-grid`).should('exist')
    })

    it(`two-column: Should render the ugrid--s1`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--two-column`
        )
        cy.get(`.u-grid--s1`).should('exist')
    })

    it(`two-column: Should render the ugrid--2`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--two-column`
        )
        cy.get(`.u-grid--2`).should('exist')
    })

    it(`two-column: Should render the listing__body`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--two-column`
        )
        cy.get(`.listing__body`).should('exist')
    })

    it(`two-column: Should render the listing__title`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--two-column`
        )
        cy.get(`.listing__title`).should('exist')
    })
})

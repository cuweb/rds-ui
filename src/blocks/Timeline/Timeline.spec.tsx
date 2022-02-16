describe('Timeline', () => {
    it(`Should render u-block`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-timeline--base`
        )
        cy.get(`.u-block`).should('exist')
    })

    it(`Should render b-timeline`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-timeline--base`
        )
        cy.get(`.b-timeline`).should('exist')
    })

    it(`Should render the timeline__container`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-timeline--base`
        )
        cy.get(`.timeline__container`).should('exist')
    })

    it(`Should render the timeline__bookend`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-timeline--base`
        )
        cy.get(`.timeline__bookend`).should('exist')
    })

    it(`Should render the timeline__list`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-timeline--base`
        )
        cy.get(`.timeline__list`).should('exist')
    })

    it(`Should render title`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-timeline--with-title`
        )
        cy.get(`.c-heading--center`).should('exist')
    })

    it(`Should render title text`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-timeline--with-title`
        )
        cy.get(`.c-heading--center`).should(
            'have.text',
            'This is Timeline block Title'
        )
    })

    it(`Should render description text`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-timeline--with-title-and-description`
        )
        cy.get(`#timeline_description`).should(
            'have.text',
            'This is Timeline block description'
        )
    })
})

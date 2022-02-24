describe('Filter', () => {
    it(`Should render content-filter`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`.content-filter`).should('exist')
    })

    it(`Should render content-filter__dialog`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`.content-filter__dialog`).should('exist')
    })

    it(`Should render the form`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`form`).should('exist')
    })

    it(`Should render form__field--checkbox`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`.form__field--checkbox`).should('exist')
    })

    it(`Should select filter dropdown`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`.form__group--dropdown-button`).click({ multiple: true })
        cy.get(`.form__group--dropdown-content`).should('exist')
        cy.get(`.content-filter__button--apply`).should('exist')
    })

    it(`Should select item`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`.form__group--dropdown-button`).click({ multiple: true })
        cy.get(`.form__group--dropdown-content`).should('exist')
        cy.get(`.form__input--checkbox`).click({ multiple: true, force: true })
    })

    it(`Should apply filter and close dropdown`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`.form__group--dropdown-button`).click({ multiple: true })
        cy.get(`.form__group--dropdown-content`).should('exist')
        cy.get(`.form__input--checkbox`).click({ multiple: true, force: true })
        cy.get(`.content-filter__button--apply`).click()
        cy.get(`.form__group--dropdown-content`).should('not.exist')
    })

    it(`Should apply reset filter`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-filter--base`)
        cy.get(`.form__group--dropdown-button`).click({ multiple: true })
        cy.get(`.form__group--dropdown-content`).should('exist')
        cy.get(`.form__input--checkbox`).click({ multiple: true, force: true })
        cy.get(`.form__group--reset`).should('exist')
        cy.get(`.form__button--reset`).should('exist')
        cy.get(`.form__button--reset`).click()
        cy.get(`.form__group--dropdown-button`).click({ multiple: true })
        cy.get('.form__input--checkbox').should('not.be.checked')
    })
})

describe('Login', () => {
    it(`Should render b-login`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--base`)
        cy.get(`.b-login`).should('exist')
    })

    it(`Should render u-block`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--base`)
        cy.get(`.u-block`).should('exist')
    })

    it(`Should render the form`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--base`)
        cy.get(`form`).should('exist')
    })

    it(`Should render title`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--with-title`
        )
        cy.get(`#login_title`).should('exist')
    })

    it(`Should render username field`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--base`)
        cy.get(`#user_login`).should('exist')
    })

    it(`Should render password field`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--base`)
        cy.get(`#user_pass`).should('exist')
    })

    it(`Should render forget password link`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-login--with-forget-link`
        )
        cy.get(`.login__link`).should('exist')
    })

    it(`Should have submit`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--base`)
        cy.get('form').submit().should('exist')
    })

    it(`Submit Form: Should test form submition`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-login--base`)
        cy.get('#login_submit').click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Login')
        })
    })
})
export {}

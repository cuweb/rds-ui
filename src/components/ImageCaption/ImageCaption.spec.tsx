describe('Image Caption', () => {

    it(`Base Image Caption: Should render figure`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-imagecaption--base-image-caption`
        )
        cy.get(`figure`).should('exist')
    })

    it(`Base Image Caption: Should render c-imgcaption`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-imagecaption--base-image-caption`
        )
        cy.get(`.c-imgcaption`).should('exist')
    })

    it(`Base Image Caption: Should render img`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-imagecaption--base-image-caption`
        )
        cy.get(`img`).should('exist')
    })

    it(`Base Image Caption: Should render figcaption`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-imagecaption--base-image-caption`
        )
        cy.get(`figcaption`).should('exist')
    })

})

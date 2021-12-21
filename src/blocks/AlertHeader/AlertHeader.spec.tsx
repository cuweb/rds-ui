describe('Alert Header', () => {
    beforeEach(() => {
        cy.global()
    })
    const block = {
        url: 'blocks-alert-header--base',
        className: '.b-alertheader',
        title: 'h2',
        content: 'p',
        icon: '.c-icon',
        closeButton: '.u-block > button',
    }

    it(`Should render container`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=${block.url}`)
        cy.clearCookies()
        cy.get(block.className).should('exist')
        cy.get(`${block.className} .c-alert.c-alert--error`).should('exist')
    })

    it(`Should render alert icon`, () => {
        cy.get(
            `${block.className} .c-alert.c-alert--error > ${block.icon}`
        ).should('exist')
    })

    it(`Should render title`, () => {
        cy.get(`${block.className} ${block.title}`).should('exist')
    })

    it(`Should render content`, () => {
        cy.get(`${block.className} ${block.content}`).should('exist')
    })

    it(`Should render close button`, () => {
        cy.get(block.closeButton).should('exist')
        cy.get(`${block.closeButton} > ${block.icon}`).should('exist')
    })

    it(`Should render close alert on click`, () => {
        cy.get(block.closeButton).click()
        cy.get(block.className).should('not.exist')
    })
})

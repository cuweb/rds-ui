describe('Avatar - Base', () => {
    it(`Should render b-avatar`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=components-avatar--base`
        )
        cy.get(`.c-avatar`).should('exist')
    })

    it(`Should render the image`, () => {
        cy.get(`.c-avatar__figure`).should('exist')
        cy.get(`.c-avatar__image`).should('exist')
    })
})

describe('Avatar - With Captions', () => {
    it(`Should render captions`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-avatar--with-caption`
        )
        cy.get(`.c-avatar__caption`).should('exist').and('not.be.empty')
    })
})

describe('Avatar - No Border', () => {
    it(`Should render no border`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-avatar--no-border`
        )
        cy.get(`.c-avatar--no-border`).should('exist')
    })
})

describe('Avatar - Rounded', () => {
    it(`Should render rounded image`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-avatar--rounded`
        )
        cy.get(`.c-avatar--rounded`).should('exist')
    })
})

describe('Avatar - Rounded with caption', () => {
    it(`Should render rounded image wih caption`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-avatar--rounded-with-caption`
        )
        cy.get(`.c-avatar--rounded`).should('exist')
        cy.get(`.c-avatar__caption`).should('exist').and('not.be.empty')
    })
})

describe('Avatar - Sizes', () => {
    it(`Should render all the sizes`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=components-avatar--sizes`
        )
        cy.get(`.c-avatar--xs`).should('exist')
        cy.get(`.c-avatar--sm`).should('exist')
        cy.get(`.c-avatar--md`).should('exist')
        cy.get(`.c-avatar--lg`).should('exist')
        cy.get(`.c-avatar--xl`).should('exist')
        cy.get(`.c-avatar--2xl`).should('exist')
        cy.get(`.c-avatar--4xl`).should('exist')
    })
})

describe('Avatar - No Image', () => {
    it(`Should render rounded image`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-avatar--no-image`
        )
        cy.get(`.c-avatar__info`).should('exist').and('not.be.empty')
    })
})

describe('Avatar - Handle on Click ', () => {
    it(`Should render rounded image`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-avatar--handle-click`
        )
        cy.get(`.c-avatar--rounded`).should('exist')
    })
    it(`Should render on button click`, () => {
        cy.get('[alt="Avatar of Danny Brown"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`I'm an alert`)
        })
    })
})
export {}

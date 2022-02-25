describe('CardPeople', () => {

 
    // People variant people Card 

    it(`People variant: Should render the c-card--people`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card-people--people-card`
        )
        cy.get(`.c-card--people`).should('exist')
    })

    it(`People variant: Should render anchor element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card-people--people-card`
        )
        cy.get(`a`).should('exist')
    })

    it(`People variant: Should render image element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card-people--people-card`
        )
        cy.get(`img`).should('exist')
    })

    it(`People variant: Should render header element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card-people--people-card`
        )
        cy.get(`header`).should('exist')
    })

    it(`People variant: Should render section heading element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card-people--people-card`
        )
        cy.get(`h3`).should('exist')
    })

    it(`People variant: Should render paragraph element`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-card-people--people-card`
        )
        cy.get(`p`).should('exist')
    })

  // People variant people Card without Image

  it(`People variant without image: Should render the c-card--people`, () => {
    cy.visit(
        `${Cypress.env(
            'baseUrl'
        )}/iframe.html?id=components-card-people--people-card-with-no-image`
    )
    cy.get(`.c-card--people`).should('exist')
})

it(`People variant without image: Should render anchor element`, () => {
    cy.visit(
        `${Cypress.env(
            'baseUrl'
        )}/iframe.html?id=components-card-people--people-card-with-no-image`
    )
    cy.get(`a`).should('exist')
})

it(`People variant without image: Should render Initials ELement`, () => {
    cy.visit(
        `${Cypress.env(
            'baseUrl'
        )}/iframe.html?id=components-card-people--people-card-with-no-image`
    )
    cy.get(`.card-initials`).should('exist')
})

it(`People variant without image: Should render header element`, () => {
    cy.visit(
        `${Cypress.env(
            'baseUrl'
        )}/iframe.html?id=components-card-people--people-card-with-no-image`
    )
    cy.get(`header`).should('exist')
})

it(`People variant without image: Should render section heading element`, () => {
    cy.visit(
        `${Cypress.env(
            'baseUrl'
        )}/iframe.html?id=components-card-people--people-card-with-no-image`
    )
    cy.get(`h3`).should('exist')
})

it(`People variant without image: Should render paragraph element`, () => {
    cy.visit(
        `${Cypress.env(
            'baseUrl'
        )}/iframe.html?id=components-card-people--people-card-with-no-image`
    )
    cy.get(`p`).should('exist')
})

    
})

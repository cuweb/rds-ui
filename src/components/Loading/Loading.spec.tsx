const loadingTestBaseUrl = (type: string) => {
    it(`Visit base url`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-loading--${type}`
        )
    })
}

const loadingTestContainer = () => {
    it(`Should render container`, () => {
        cy.get('.c-loading-container').should('exist').should('not.be.empty')
    })

    it(`Should render container position center`, () => {
        cy.get(`.c-loading-container`).should('exist')
    })
}

const loadingTestTitle = () => {
    it(`Should render title`, () => {
        cy.get('.c-loading-title').should('exist')
    })
    it(`Should render 100% height`, () => {
        cy.get('.h-100').should('exist')
    })
    it(`Should render 70% width`, () => {
        cy.get('.h-70').should('exist')
    })
    it(`Should render 100% width`, () => {
        cy.get('.w-100').should('exist')
    })
    it(`Should render 90% width`, () => {
        cy.get('.w-90').should('exist')
    })
    it(`Should render 80% width`, () => {
        cy.get('.w-80').should('exist')
    })
}

const loadingTestText = () => {
    it(`Should render text`, () => {
        cy.get('.c-loading-text').should('exist')
    })
    it(`Should render 100% width`, () => {
        cy.get('.w-100').should('exist')
    })
    it(`Should render 90% width`, () => {
        cy.get('.w-90').should('exist')
    })
    it(`Should render 80% width`, () => {
        cy.get('.w-80').should('exist')
    })
}

const loadingTestImage = () => {
    it(`Should render image`, () => {
        cy.get('.c-loading-image').should('exist')
    })
}

const loadingTestSpinners = () => {
    it(`Should render spinners`, () => {
        cy.get('.c-loading-spinners').should('exist')
    })
}

const loadingTestPage = () => {
    it(`Should render page`, () => {
        cy.get('.c-loading-page').should('exist')
    })
}

//  Tests
// ================================================
describe('Loading - Listing', () => {
    loadingTestBaseUrl('listing')
    loadingTestContainer()
    loadingTestTitle()
    loadingTestText()
})

describe('Loading - Card', () => {
    loadingTestBaseUrl('card')
    loadingTestContainer()
    loadingTestImage()
    loadingTestText()
})

describe('Loading - Spinners', () => {
    loadingTestBaseUrl('spinners')
    loadingTestSpinners()
})

describe('Loading - Page', () => {
    loadingTestBaseUrl('page')
    loadingTestPage()
})
export {}

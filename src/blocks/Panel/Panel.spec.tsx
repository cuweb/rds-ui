const panelTestBaseUrl = (type: string) => {
    it(`Visit base url`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--${type}`
        )
    })
}

const panelTestContainer = () => {
    it(`Should render container`, () => {
        cy.get('.b-sidebar').should('exist').should('not.be.empty')
        cy.get('.u-block').should('exist').should('not.be.empty')
    })
}

const panelTestShadow = () => {
    it(`Should render shadow`, () => {
        cy.get('.b-sidebar--shadow').should('exist')
    })
}

const panelTestActions = () => {
    it(`Should render Actions`, () => {
        cy.get('.b-sidebar__actions').should('exist')
    })
}

const panelTestBody = (color?: string) => {
    it(`Should render Body`, () => {
        cy.get('.b-sidebar__body').should('exist')
    })

    it(`Should render Body color`, () => {
        cy.get(`.b-sidebar__body--${color || 'white'}`).should('exist')
    })
}

const panelTestHeader = (color?: string) => {
    it(`Should render Header`, () => {
        cy.get('.b-sidebar__header').should('exist')
    })

    it(`Should render Header color`, () => {
        cy.get(`.b-sidebar__header--${color || 'grey'}`).should('exist')
    })
}

const panelTestFooter = (color?: string) => {
    it(`Should render Footer`, () => {
        cy.get('.b-sidebar__footer').should('exist')
    })

    it(`Should render Footer color`, () => {
        cy.get(`.b-sidebar__footer--${color || 'white'}`).should('exist')
    })
}

const panelTestPanelModal = () => {
    it(`Should render Panel with custom class`, () => {
        cy.get(`.u-h-fix`).should('exist')
        cy.get(`.u-o-sroll`).should('exist')
        cy.get(`.u-margin-auto`).should('exist')
    })
}

//  Tests
// ================================================
describe('Panel - Base', () => {
    panelTestBaseUrl('base')
    panelTestContainer()
    panelTestBody()
})

describe('Panel - Wih Shadow', () => {
    panelTestBaseUrl('with-shadow')
    panelTestContainer()
    panelTestShadow()
    panelTestBody()
})

describe('Panel - Wih Actions', () => {
    panelTestBaseUrl('with-actions')
    panelTestContainer()
    panelTestActions()
    panelTestBody()
})

describe('Panel - Wih Icon', () => {
    panelTestBaseUrl('with-icon')
    panelTestContainer()
    panelTestBody()
})

describe('Panel - Wih Content', () => {
    panelTestBaseUrl('with-content')
    panelTestContainer()
    panelTestBody()
})

describe('Panel - Wih Footer', () => {
    panelTestBaseUrl('with-footer')
    panelTestContainer()
    panelTestBody()
    panelTestFooter()
})

describe('Panel - White Header', () => {
    panelTestBaseUrl('white-header')
    panelTestContainer()
    panelTestBody()
    panelTestHeader('white')
})

describe('Panel - Grey Footer', () => {
    panelTestBaseUrl('grey-footer')
    panelTestContainer()
    panelTestBody()
    panelTestFooter('grey')
})

describe('Panel - Grey Body', () => {
    panelTestBaseUrl('grey-body')
    panelTestBody('grey')
    panelTestContainer()
})

describe('Panel - Inranet Example', () => {
    panelTestBaseUrl('intranet-example')
    panelTestContainer()
    panelTestShadow()
    panelTestActions()
    panelTestBody()
    panelTestHeader('white')
    panelTestFooter()
})

describe('Panel - Modal Example with custom className', () => {
    panelTestBaseUrl('panel-modal')
    panelTestPanelModal()
})
export {}

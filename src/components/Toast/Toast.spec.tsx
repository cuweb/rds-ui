describe('Toast', () => {
    const toastTypes = [
        'information-toast-default',
        'information-toast-top-right',
        'information-toast-top-left',
        'information-toast-bottom-right',
        'information-toast-bottom-left',
        'success-toast-default',
        'success-toast-top-right',
        'success-toast-top-left',
        'success-toast-bottom-right',
        'success-toast-bottom-left',
        'warning-toast-default',
        'warning-toast-top-right',
        'warning-toast-top-left',
        'warning-toast-bottom-right',
        'warning-toast-bottom-left',
        'error-toast-default',
        'error-toast-top-right',
        'error-toast-top-left',
        'error-toast-bottom-right',
        'error-toast-bottom-left',
    ]

    toastTypes.map((type) => {
        if (
            type === 'information-toast-default' ||
            type === 'success-toast-default' ||
            type === 'warning-toast-default' ||
            type === 'error-toast-default'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.default`).should('exist')
            })
        }

        if (
            type === 'information-toast-top-right' ||
            type === 'success-toast-top-right' ||
            type === 'warning-toast-top-right' ||
            type === 'error-toast-top-right'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.top-right`).should('exist')
            })
        }

        if (
            type === 'information-toast-top-left' ||
            type === 'success-toast-top-left' ||
            type === 'warning-toast-top-left' ||
            type === 'error-toast-top-left'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.top-left`).should('exist')
            })
        }

        if (
            type === 'information-toast-bottom-right' ||
            type === 'success-toast-bottom-right' ||
            type === 'warning-toast-bottom-right' ||
            type === 'error-toast-bottom-right'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.bottom-right`).should('exist')
            })
        }

        if (
            type === 'information-toast-bottom-left' ||
            type === 'success-toast-bottom-left' ||
            type === 'warning-toast-bottom-left' ||
            type === 'error-toast-bottom-left'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.bottom-left`).should('exist')
            })
        }
    })

    const toastTypesWithAutoClose = [
        'information-toast-default-auto-close',
        'information-toast-top-right-auto-close',
        'information-toast-top-left-auto-close',
        'information-toast-bottom-right-auto-close',
        'information-toast-bottom-left-auto-close',
        'success-toast-default-auto-close',
        'success-toast-top-right-auto-close',
        'success-toast-top-left-auto-close',
        'success-toast-bottom-right-auto-close',
        'success-toast-bottom-left-auto-close',
        'warning-toast-default-auto-close',
        'warning-toast-top-right-auto-close',
        'warning-toast-top-left-auto-close',
        'warning-toast-bottom-right-auto-close',
        'warning-toast-bottom-left-auto-close',
        'error-toast-default-auto-close',
        'error-toast-top-right-auto-close',
        'error-toast-top-left-auto-close',
        'error-toast-bottom-right-auto-close',
        'error-toast-bottom-left-auto-close',
    ]

    toastTypesWithAutoClose.map((type) => {
        if (
            type === 'information-toast-default-auto-close' ||
            type === 'success-toast-default-auto-close' ||
            type === 'warning-toast-default-auto-close' ||
            type === 'error-toast-default-auto-close'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.default`).should('exist')
                cy.wait(6000)
                cy.get(`.fade-out`).should('exist')
                cy.wait(2000)
                cy.get(`.close`).should('exist')
            })
        }

        if (
            type === 'information-toast-top-right-auto-close' ||
            type === 'success-toast-top-right-auto-close' ||
            type === 'warning-toast-top-right-auto-close' ||
            type === 'error-toast-top-right-auto-close'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.top-right`).should('exist')
                cy.wait(6000)
                cy.get(`.fade-out`).should('exist')
                cy.wait(2000)
                cy.get(`.close`).should('exist')
            })
        }

        if (
            type === 'information-toast-top-left-auto-close' ||
            type === 'success-toast-top-left-auto-close' ||
            type === 'warning-toast-top-left-auto-close' ||
            type === 'error-toast-top-left-auto-close'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.top-left`).should('exist')
                cy.wait(6000)
                cy.get(`.fade-out`).should('exist')
                cy.wait(2000)
                cy.get(`.close`).should('exist')
            })
        }

        if (
            type === 'information-toast-bottom-right-auto-close' ||
            type === 'success-toast-bottom-right-auto-close' ||
            type === 'warning-toast-bottom-right-auto-close' ||
            type === 'error-toast-bottom-right-auto-close'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.bottom-right`).should('exist')
                cy.wait(6000)
                cy.get(`.fade-out`).should('exist')
                cy.wait(2000)
                cy.get(`.close`).should('exist')
            })
        }

        if (
            type === 'information-toast-bottom-left-auto-close' ||
            type === 'success-toast-bottom-left-auto-close' ||
            type === 'warning-toast-bottom-left-auto-close' ||
            type === 'error-toast-bottom-left-auto-close'
        ) {
            it(`${type.toUpperCase()}: Should render containert`, () => {
                cy.visit(
                    `${Cypress.env(
                        'baseUrl'
                    )}/iframe.html?id=components-toast--${type}`
                )
                cy.clearCookies()
                cy.get(`.notification-container.bottom-left`).should('exist')
                cy.wait(6000)
                cy.get(`.fade-out`).should('exist')
                cy.wait(2000)
                cy.get(`.close`).should('exist')
            })
        }
    })
})
export {}

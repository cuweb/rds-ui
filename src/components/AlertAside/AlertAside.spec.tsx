describe('AlertAside', () => {
    // beforeEach(() => {
    //     cy.global()
    // })

    const types = ['error', 'info', 'success', 'warning']
    const title = 'h2'
    const content = 'p'
    const icon = '.c-alert__icon'
    const button = '.c-alert__button'
    const asideSidebar ='.b-alertaside'


    types.map((type) => {
        it(`${type.toUpperCase()}: Should render container`, () => {
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-alertaside--${type}`
            )
            cy.clearCookies()
            cy.get(`.c-alert--${type}`).should('exist')
        })
        
        it(`${type.toUpperCase()}: Should render sidebar`, () => {
            cy.get(`${asideSidebar}`).should('exist')
              
        })

        it(`${type.toUpperCase()}: Should render title`, () => {
            cy.get(`.c-alert--${type} ${title}`)
                .should('exist')
                .should('not.be.empty')
        })
       

        it(`${type.toUpperCase()}: Should render content`, () => {
            cy.get(`.c-alert--${type} ${content}`)
                .should('exist')
                .should('not.be.empty')
        })

        it(`${type.toUpperCase()}: Should render icon`, () => {
            cy.get(`.c-alert--${type} ${icon}`).should('exist')
        })

        if (type === 'error') {
            it(`${type.toUpperCase()}: Should render close button`, () => {
                cy.get(button).should('exist')
                cy.get(`${button} .u-icon`).should('exist')
                cy.get(`${button} .c-icon`).should('exist')
            })
        }
        if (type === 'error') {
            it(`${type.toUpperCase()}: Should trigger an alert on Click on close button`, () => {
                cy.get(`${button} .c-icon`).click()
                cy.on('window:alert', (text) => {
                    expect(text).to.contains('test');
                  });

                
            })
        }

    })
})

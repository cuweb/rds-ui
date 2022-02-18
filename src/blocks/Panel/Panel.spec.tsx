// Took from alert
// describe('', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

describe('Panel', () => {
    beforeEach(() => {
        cy.global()
    })
    const block = {
        url: 'blocks-panel--base',
        className: '.b-sidebar',
        title: 'h2',
        titleWithHeading: 'h2',
        heading: 'h3',
        content: 'p',
        icon: '.c-icon',
        image: 'img',
        button: '.c-buttoncta',
        // url: 'blocks-alert-header--base',
        // className: '.b-alertheader',
        // title: 'h2',
        // content: 'p',
        // icon: '.c-icon',
        // closeButton: '.u-block > button',
    }

    it(`Should render u-block`, () => {
        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=${block.url}`)
        cy.get(block.className).should('exist')
    })

    it(`Should render light bulb icon`, () => {
        cy.get(
            `${block.className} > ${block.icon}  ${block.title}`
        ).should('exist')
    })

    it(`Should render title`, () => {
        cy.get(`${block.className} ${block.title}`).should('exist')
    })

    it(`Should render with heading`, () => {
        // cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=${block.url}`)
        // cy.get(`${block.className} ${block.titleWithHeading}`).should('exist')
        // cy.get(`${block.className} ${block.heading}`).should('exist')
        // cy.get(`${block.ClassName} h3`).should('exist')
    })

    it(`Should render the paragraph`, () => {
        cy.get(`${block.className} ${block.content}`).should('exist')
    })

    // it(`Should render the image`, () => {
    //     cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=${block.url}`)
    //     // cy.get(`img`).should('exist')
    //     // cy.get('div[class=".b-sidebar"]').find("img").should('exist');
    //     // cy.get(`${block.className} ${block.image}`).should('exist')
    //     // cy.get(block.className).find(block.image).should('exist')
    //     cy.get(`img`).should('exist')
    // })
    it(`Base Image Caption: Should render img`, () => {

        cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=blocks-panel--panel-with-image`)
        
        cy.get(`img`).should('exist')
        
        })
    

    it(`Should render the button`, () => {
        // cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=${block.url}`)
        // cy.get(block.button).should('exist')
        // cy.get(`${block.closeButton} > ${block.icon}`).should('exist')
    })

})


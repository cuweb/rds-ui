// import data from './HeadingData.json'

// describe('Heading', () => {
//     beforeEach(() => {
//         cy.global()
//     })

//     data.variations.map((variation) => {
//         const { type, headingType, header, description, subheader } = variation

//         it(`Should render the header`, () => {
//             cy.visit(
//                 `${Cypress.env(
//                     'baseUrl'
//                 )}/iframe.html?id=components-heading--${type}`
//             )
//             cy.get(`h2`).should('exist')
//         })

//     })
// })

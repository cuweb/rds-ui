const testBaseUrl = (type: string) => {
    it(`Should visit the page`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-listing--${type}`
        )
    })
}

const testUblock = () => {
    it(`Should render uBlock`, () => {
        cy.get(`.u-block`).should('exist')
    })
}

const testHeading = (type: string) => {
    if (type !== 'two-colum') {
        it(`Should render heading`, () => {
            cy.get(`header`).should('exist')
            cy.get(`.c-heading`).should('exist').should('not.be.empty')
        })
    }
}
const testContainer = () => {
    it(`Should render container`, () => {
        cy.get(`.b-listing`).should('exist')
    })
}

const testList = () => {
    it(`Should render the list`, () => {
        cy.get(`ul`).should('exist')
        cy.get(`li`).should('exist')
    })
}

const testLink = () => {
    it(`Should render link`, () => {
        cy.get(`a`).should('exist')
    })
}

const testTitle = () => {
    it(`Should render title`, () => {
        cy.get(`h3`).should('exist').should('not.be.empty')
    })
}

const testSubtitle = (type: string) => {
    const noSubtitle = [
        'base-listing',
        'with-icon',
        'video-variant',
        'two-colum',
    ].includes(type)
    if (noSubtitle) return false
    it(`Should render subtitle`, () => {
        cy.get(`h3`).should('exist').should('not.be.empty')
    })
}

const testImage = (type: string) => {
    const withImage = [
        'with-image',
        'news-image-variant',
        'people-variant',
    ].includes(type)

    if (!withImage) return false
    it(`Should render image`, () => {
        cy.get(`figure`).should('exist')
        cy.get(`img`).should('exist')
    })
}

const testItemType = (type: string) => {
    type itemsType = { [index: string]: string }
    const itemTypes: itemsType = {
        default: 'ItemList',
        people: 'Person',
        event: 'Event',
    }
    it(`Should render the right itemType`, () => {
        cy.get(
            `ul[itemtype='http://schema.org/${
                itemTypes[type.split('-')[0]] || itemTypes.default
            }']`
        ).should('exist')
    })
}

const types = [
    'base-listing',
    'with-subtitles',
    'with-image',
    'with-badge',
    'with-icon',
    'icon-and-subtitle',
    'event-variant',
    'news-variant',
    'news-image-variant',
    'people-variant',
    'video-variant',
    'two-colum',
]
types.map((type) => {
    describe(`Listings ${type.split('-').join(' ')}`, () => {
        testBaseUrl(type)
        testUblock()
        testHeading(type)
        testContainer()
        testList()
        testLink()
        testTitle()
        testSubtitle(type)
        testImage(type)
        testItemType(type)
    })
})

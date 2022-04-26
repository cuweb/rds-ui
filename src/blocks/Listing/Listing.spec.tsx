const testUrl = (type: string) => {
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
    if (type !== 'two-column') {
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
        'without-arrow',
        'with-icon',
        'video-variant',
        'two-column',
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
        events: 'Event',
    }
    it(`Should render the right itemType`, () => {
        cy.get(
            `ul[itemtype='http://schema.org/${
                itemTypes[type.split('-')[0]] || itemTypes.default
            }']`
        ).should('exist')
    })
}

const testListItemProp = () => {
    it(`Should render the right itemProp`, () => {
        cy.get(`li[itemprop='item']`).should('exist')
    })
}

const testDivItemProp = (type: string) => {
    const withDivItemProp = [
        'base-listing',
        'without-arrow',
        'with-badge',
        'with-icon',
        'video-variant',
    ].includes(type)
    if (!withDivItemProp) return false
    it(`Should render div itemProp`, () => {
        cy.get(`div[itemprop='name']`).should('exist')
    })
}

const testHeadingItemProp = (type: string) => {
    const HeadingItemProp = [
        'with-subtitles',
        'without-arrow',
        'with-image',
        'icon-and-subtitle',
        'event-variant',
        'news-variant',
        'news-image-variant',
        'people-variant',
    ].includes(type)
    if (!HeadingItemProp) return false
    it(`Should render h3 itemProp`, () => {
        cy.get(`h3[itemprop='name']`).should('exist')
    })
}

const testParagraphItemProp = (type: string) => {
    const ParagraphItemProp = [
        'with-subtitles',
        'with-image',
        'icon-and-subtitle',
        'people-variant',
        'event-variant',
    ].includes(type)
    if (!ParagraphItemProp) return false
    if (type === 'event-variant') {
        it(`Should render p itemProp`, () => {
            cy.get(`p[itemprop='location']`).should('exist')
        })
    } else {
        it(`Should render p itemProp`, () => {
            cy.get(`p[itemprop='description']`).should('exist')
        })
    }
}

const testTime = (type: string) => {
    const Time = [
        'event-variant',

        'news-variant',
        'news-image-variant',
    ].includes(type)
    if (!Time) return false
    it(`Should render time`, () => {
        cy.get(`time`).should('exist')
    })
    if (type === 'event-variant') {
        it(`Should render time itemProp`, () => {
            cy.get(`time[itemprop='startDate']`).should('exist')
        })
    }
}

const testNoArrow = () => {
    it(`has the b-listing--no-arrow class`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=blocks-listing--without-arrow`
        )
        cy.get(`.b-listing--no-arrow`).should('exist')
    })
}

const types = [
    'base-listing',
    'without-arrow',
    'with-subtitles',
    'with-image',
    'with-badge',
    'with-icon',
    'files-listing',
    'events-variant',

    'news-variant',
    'news-variant-with-image',
    'people-variant',
    'video-variant',
    'two-column',
]
types.map((type) => {
    describe(`Listings ${type.split('-').join(' ')}`, () => {
        testUrl(type)
        testUblock()
        testHeading(type)
        testContainer()
        testList()
        testLink()
        testTitle()
        testSubtitle(type)
        testImage(type)
        testItemType(type)
        testListItemProp()
        testDivItemProp(type)
        testHeadingItemProp(type)
        testParagraphItemProp(type)
        testTime(type)
        testNoArrow()
    })
})

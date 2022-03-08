const testContent = (type: string) => {
    const fieldName = `.form__field--${type}`
    it(`Should render Label`, () => {
        cy.get(`${fieldName} label`).should('exist').should('not.be.empty')
    })
    it(`Should render description`, () => {
        cy.get(`${fieldName} .form__description`)
            .should('exist')
            .should('not.be.empty')
    })
}

const testInput = (type: string) => {
    const fieldName = `.form__field--${type}`
    it(`Should render field and type`, () => {
        cy.get(`${fieldName} input`)
            .should('exist')
            .should('have.attr', 'type', type)
    })
}

const testPlaceholder = (type: string) => {
    const fieldName = `.form__field--${type}`
    it(`Should render placeholder`, () => {
        cy.get(`${fieldName} [name="${type}"]`)
            .should('exist')
            .should('have.attr', 'placeholder')
            .should('not.be.empty')
    })
}

const testTyping = (type: string, text?: string) => {
    it(`Should accept type`, () => {
        cy.get(`[name="${type}"]`).type(text || type)
    })
}

const testRange = (name: string, range?: number) => {
    it(`Should accept range`, () => {
        cy.get(`[name="${name}"]`)
            .invoke('val', range || 1200)
            .trigger('change')
    })
}

const testSelect = (name: string, option: string | string[]) => {
    it(`Should accept range`, () => {
        cy.get(`[name="${name}"]`).select(option)
    })
}

describe('Form - Kitchen Sink', () => {
    beforeEach(() => {
        cy.global()
    })

    it(`Should render U-Block`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-form--kitchen-sink`
        )
        cy.get(`.u-block`).should('exist')
    })

    it(`Should render Form container`, () => {
        cy.get(`form.b-form`).should('exist')
    })

    it(`Should render Form Fields`, () => {
        cy.get(`.form__field`).should('exist')
    })
})

describe('Form - Text Field', () => {
    const fieldType = 'text'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Password Field', () => {
    const fieldType = 'password'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Number Field', () => {
    const fieldType = 'number'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType, '1234567890')
})

describe('Form - Email Field', () => {
    const fieldType = 'email'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType, 'email@email.com')
})

describe('Form - Url Field', () => {
    const fieldType = 'url'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType, 'https://carleton.ca')
})

describe('Form - Search Field', () => {
    const fieldType = 'search'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Phone Field', () => {
    const fieldType = 'tel'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType, '+9(999) 999-9999')
})

describe('Form - File Field', () => {
    testContent('file')
    // TODO: https://stackoverflow.com/questions/47074225/how-to-test-file-inputs-with-cypress
    // it(`Should accept type`, () => {
    //     cy.get(`input[name="tel"]`).type('+9(999) 999-9999')
    // })
})

describe('Form - Textarea Field', () => {
    const fieldType = 'textarea'
    testContent(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Slider Field', () => {
    const fieldType = 'range'
    testContent(fieldType)
    testRange(fieldType, 1200)
})

describe('Form - Date/Time Field', () => {
    const fieldType = 'datetime-local'
    testContent(fieldType)
    testTyping(fieldType, '2017-06-01T08:30')
})

describe('Form - Date Field', () => {
    const fieldType = 'date'
    testContent(fieldType)
    testTyping(fieldType, '2017-06-01')
})

describe('Form - Time Field', () => {
    const fieldType = 'time'
    testContent(fieldType)
    testTyping(fieldType, '08:30')
})

describe('Form - Select Field', () => {
    const fieldType = 'select'
    testContent(fieldType)
    testSelect(fieldType, 'red')
    testSelect(fieldType, 'blue')
})

describe('Form - Multi Select Field', () => {
    const fieldName = 'select-multiple'
    testSelect(fieldName, 'Red')
    testSelect(fieldName, 'Blue')
    testSelect(fieldName, ['Red', 'Blue', 'Yellow'])
})

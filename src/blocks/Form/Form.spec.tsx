const testBaseUrl = () => {
    it(`Visit base url`, () => {
        cy.visit(
            `${Cypress.env('baseUrl')}/iframe.html?id=blocks-form--kitchen-sink`
        )
    })
}
const testFormContainers = () => {
    it(`Should render U-Block`, () => {
        cy.get(`.u-block`).should('exist')
    })
    it(`Should render Form container`, () => {
        cy.get(`form.b-form`).should('exist')
    })
    it(`Should render Form Fields`, () => {
        cy.get(`.form__field`).should('exist')
    })
}
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

const testErrorMessage = (name: string, error: string) => {
    it(`Should render error when type a invalid ${name}`, () => {
        cy.get('.form__message.form__warning').should('not.exist')
        cy.get(`[name="${name}"]`).type('!@_.../osososo')
        cy.get('body').click()
        cy.get('.form__message.form__warning').should('exist').contains(error)
        cy.get(`[name="${name}"]`).clear()
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
    it(`Should select option`, () => {
        cy.get(`[name="${name}"]`).select(option)
    })
}

const testCheck = (name: string, option: string | string[]) => {
    it(`Should choose option`, () => {
        cy.get(`[name="${name}"]`).check(option)
    })
}
const testAttribute = (name: string, attribute: string) => {
    it(`Should have the ${attribute} attribute`, () => {
        cy.get(`[name="${name}"]`).should('have.attr', attribute)
    })
}

const testFile = () => {
    it(`Should accept files`, () => {
        cy.get('input[type=file]').selectFile('cypress/fixtures/raven.jpeg')
    })
}

describe('Form - Kitchen Sink', () => {
    beforeEach(() => {
        cy.global()
    })
    testBaseUrl()
    testFormContainers()
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
    testErrorMessage(fieldType, 'Invalid email address')
    testTyping(fieldType, 'email@email.com')
})

describe('Form - Url Field', () => {
    const fieldType = 'url'
    testContent(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testErrorMessage(fieldType, 'Invalid url address')
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
    testErrorMessage(fieldType, 'Invalid phone number')
    testTyping(fieldType, '+9(999) 999-9999')
})

describe('Form - File Field', () => {
    testContent('file')
    testFile()
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

describe('Form - Radio Field', () => {
    const fieldName = 'radio'
    testContent(fieldName)
    testCheck(fieldName, 'red')
    testCheck(fieldName, 'blue')
})

describe('Form - Checkbox Field', () => {
    const fieldName = 'checkbox'
    testContent(fieldName)
    testCheck(fieldName, 'red')
    testCheck(fieldName, 'blue')
})

describe('Form - Required Field', () => {
    const fieldName = 'required-field'
    testAttribute(fieldName, 'required')
    testTyping(fieldName, 'required')
})

describe('Form - Read Only Field', () => {
    const fieldName = 'read-only-field'
    testAttribute(fieldName, 'readonly')
})

describe('Form - Disabled Field', () => {
    const fieldName = 'disabled-field'
    testAttribute(fieldName, 'disabled')
})

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
const testHeaderInfo = (type: string) => {
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

const testSubmit = () => {
    it(`Should submit the right values`, () => {
        cy.get('[name="submit"]').click()
        // TODO: Get the real values from the form
        const formValues = `{"text":"text","password":"password","number":1234567890,"email":"email@email.com","url":"https://carleton.ca","search":"search","tel":"+9(999) 999-9999","file":"C:\\\\fakepath\\\\raven.jpeg","textarea":"textarea","range":"","datetime-local":"2017-06-01T08:30","date":"2017-06-01","time":"08:30","radio":"blue","checkbox":["red","blue"],"required-field":"required","read-only-field":"This field is read only","disabled-field":"This field is disabled","submit":"Submit form","select":"blue","select-multiple":["red","blue","yellow"]}`
        cy.on('window:alert', (txt) => {
            expect(txt.toString().trim()).to.contain(
                formValues.toString().trim()
            )
        })
    })
}

// Tests
// =========================================

describe('Form - Kitchen Sink', () => {
    testBaseUrl()
    testFormContainers()
})

describe('Form - Text Field', () => {
    const fieldType = 'text'
    testHeaderInfo(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Password Field', () => {
    const fieldType = 'password'
    testHeaderInfo(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Number Field', () => {
    const fieldType = 'number'
    testHeaderInfo(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType, '1234567890')
})

describe('Form - Email Field', () => {
    const fieldType = 'email'
    testHeaderInfo(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testErrorMessage(fieldType, 'Invalid email address')
    testTyping(fieldType, 'email@email.com')
})

describe('Form - Url Field', () => {
    const fieldType = 'url'
    testHeaderInfo(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testErrorMessage(fieldType, 'Invalid url address')
    testTyping(fieldType, 'https://carleton.ca')
})

describe('Form - Search Field', () => {
    const fieldType = 'search'
    testHeaderInfo(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Phone Field', () => {
    const fieldType = 'tel'
    testHeaderInfo(fieldType)
    testInput(fieldType)
    testPlaceholder(fieldType)
    testErrorMessage(fieldType, 'Invalid phone number')
    testTyping(fieldType, '+9(999) 999-9999')
})

describe('Form - File Field', () => {
    testHeaderInfo('file')
    testFile()
})

describe('Form - Textarea Field', () => {
    const fieldType = 'textarea'
    testHeaderInfo(fieldType)
    testPlaceholder(fieldType)
    testTyping(fieldType)
})

describe('Form - Slider Field', () => {
    const fieldType = 'range'
    testHeaderInfo(fieldType)
    testRange(fieldType, 1200)
})

describe('Form - Date/Time Field', () => {
    const fieldType = 'datetime-local'
    testHeaderInfo(fieldType)
    testTyping(fieldType, '2017-06-01T08:30')
})

describe('Form - Date Field', () => {
    const fieldType = 'date'
    testHeaderInfo(fieldType)
    testTyping(fieldType, '2017-06-01')
})

describe('Form - Time Field', () => {
    const fieldType = 'time'
    testHeaderInfo(fieldType)
    testTyping(fieldType, '08:30')
})

describe('Form - Select Field', () => {
    const fieldType = 'select'
    testHeaderInfo(fieldType)
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
    testHeaderInfo(fieldName)
    testCheck(fieldName, 'red')
    testCheck(fieldName, 'blue')
})

describe('Form - Checkbox Field', () => {
    const fieldName = 'checkbox'
    testHeaderInfo(fieldName)
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

describe('Form - Submit', () => {
    testSubmit()
})
export {}

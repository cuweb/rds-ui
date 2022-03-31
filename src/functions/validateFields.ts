export interface fieldProps {
    [field: string]: {
        expresssion: RegExp
        message: string
    }
}

const fieldTypes: fieldProps = {
    email: {
        expresssion: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: `Invalid email address`,
    },
    url: {
        expresssion:
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\\+\\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\\+\\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\w-_]*)?\??(?:[-\\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
        message: `Invalid url address`,
    },
    tel: {
        expresssion:
            /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/,
        message: `Invalid phone number`,
    },
}

const validateField = (type: string, value: string) => {
    if (!value.length) return null
    if (fieldTypes[type].expresssion.test(value)) {
        return null
    }
    return fieldTypes[type].message
}

const validateEmail = (value: string) => {
    return validateField('email', value)
}
const validateUrl = (value: string) => {
    return validateField('url', value)
}
const validateTel = (value: string) => {
    return validateField('tel', value)
}

export { validateEmail, validateUrl, validateTel }
export default validateField

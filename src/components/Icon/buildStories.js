/* eslint-disable no-console */
// https://eslint.org/docs/rules/no-console
// "If you are developing for Node.js then you most likely do not want this rule enabled."

import fs from 'fs'
import icons from '../../lib/icons.js'

const sortArray = (arr) =>
    arr.sort((a, b) => {
        const fa = a.title.toLowerCase()
        const fb = b.title.toLowerCase()

        if (fa < fb) {
            return -1
        }
        if (fa > fb) {
            return 1
        }
        return 0
    })

const camel = (str) => {
    return ` ${str}`
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
}

const stories = sortArray(icons)
    .map((item) => {
        return `
export const ${camel(item.title)} = Template.bind({})
${camel(item.title)}.args = { icon: '${item.type}' }
`
    })
    .join(' ')

fs.writeFile(
    `Icon.stories.tsx`,
    `import Icon from './Icon'

export default {
    component: Icon,
    title: 'Components/Icon',
}
    
const Template = (args) => <Icon {...args} size={42} />
${stories.toString()}

    `,
    (err) => {
        if (err) {
            console.error('Error')
        }
    }
)

/* eslint-disable no-console */
// https://eslint.org/docs/rules/no-console
// "If you are developing for Node.js then you most likely do not want this rule enabled."

import fs from 'fs'
import getCamelCase from '../../functions/getCamelCase.js'
import sortArray from '../../functions/sortArray.js'
import icons from '../../lib/icons.js'

const stories = sortArray(icons, 'title')
    .map((item) => {
        return `
export const ${getCamelCase(item.title)} = Template.bind({})
${getCamelCase(item.title)}.args = { icon: '${item.type}' }
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

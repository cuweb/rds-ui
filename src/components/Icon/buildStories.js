const icons = require('../../lib/icons.js')

const camel = (str) => {
    return (' ' + str)
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
            return chr.toUpperCase()
        })
}

const stories = icons
    .map((item) => {
        return `
export const ${camel(item.title)} = Template.bind({})
${camel(item.title)}.args = { icon: '${item.type}' }
`
    })
    .join(' ')

require('fs').writeFile(
    `Icon.stories.tsx`,
    `import Icon from './Icon'

export default {
    component: Icon,
    title: 'Components/Icon',
}
    
const Template = (args) => <Icon {...args} size={42} />
${stories.toString()}

    `,

    function (err) {
        if (err) {
            console.error('Crap happens')
        }
    }
)

import UiButton from './UiButton'

export default {
    title: 'UI/Button',
    component: UiButton,
    argTypes: {
        type: {
            name: 'Button Type',
            description: 'The visual type of the button',
            type: { name: 'string', required: true },
            control: { type: 'select', },
            options: ['primary', 'secondary'],
            defaultValue: 'primary'
        },
        round: { control: 'boolean' },
        label: {
            control: 'text',
            defaultValue: 'What a Button'
        }
    }
}

const Story = (args, { argTypes }) => ({
    components: { UiButton },
    props: Object.keys(argTypes),
    template: '<UiButton v-bind="$props"  />',
})

export const Primary = Story.bind({})
Primary.args = {
    type: 'primary',
}

export const Secondary = Story.bind({})
Secondary.args = {
    type: 'secondary',
}


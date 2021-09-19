import UiList from './UiList'

export default {
    title: 'UI/List',
    component: UiList,
    argTypes: {
        
    }
}

export const Empty = (args, { argTypes }) => ({
    components: { UiList },
    props: Object.keys(argTypes),
    template: '<UiList v-bind="$props" />',
})

export const OneItem = (args, { argTypes }) => ({
    components: { UiList },
    props: Object.keys(argTypes),
    template: '<UiList v-bind="$props"><UiListItem /></UiList>',
})

export const ManyItems = (args, { argTypes }) => ({
    components: { UiList },
    props: Object.keys(argTypes),
    template: `
        <UiList v-bind="$props">
            <UiListItem />
            <UiListItem />
            <UiListItem />
        </UiList>
    `,
})

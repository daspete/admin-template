<template>
    <button 
        class="font-bold px-4 py-2 text-white"
        :class="ComponentClasses"
    >
        <slot>
            <span v-html="label"></span>
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        round: { type: Boolean, default: false },
        type: { type: String, default: 'primary' },
        label: { type: String, default: 'I am a button' },
    },
    computed: {
        ComponentClasses(){
            const classes = []
            
            if(this.round) classes.push('rounded-full')

            if(this.type == 'primary') classes.push('bg-blue-500 hover:bg-blue-700')
            else if(this.type == 'secondary') classes.push('bg-green-500 hover:bg-green-700')

            return classes.join(' ')
        }
    }
}
</script>

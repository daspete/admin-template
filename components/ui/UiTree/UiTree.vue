<template>
    <div :class="TreeClasses">
        <div class="flex flex-nowrap hover:bg-blue-50">
            <div :class="TreeToggleClasses" @click="ToggleTree">
                <template v-if="items.length">
                    <font-awesome-icon v-if="isOpen" :icon="['far', 'minus-square']"  />
                    <font-awesome-icon v-if="!isOpen" :icon="['far', 'plus-square']"  />
                </template>
            </div>
            
            <nuxt-link to="/cms/edit/dfgjfdhgjfhd" class="tree__icon">
                <font-awesome-icon :icon="['fas', Icon]"  />
            </nuxt-link>
            
            <nuxt-link to="/cms/edit/dfgjfdhgjfhd" class="tree__label" v-html="title" :title="title"></nuxt-link>
            <div class="tree__actions">
                <button class="text-green-400"><font-awesome-icon size="xs" :icon="['fas', `check-circle`]"  /></button>
                <button @click="ToggleVisibility"><font-awesome-icon size="sm" :icon="['fas', `eye${ !isVisible ? '-slash' : '' }`]"  /></button>
                <button @click="ToggleMenu"><font-awesome-icon size="sm" :icon="['fas', 'ellipsis-v']"  /></button>
            </div>
        </div>
        
        <template v-if="isOpen">
            <UiTree
                ref="uitree"
                v-for="(item, itemIndex) in items"
                :key="`tree-item-${ itemIndex }`"
                :title="item.title"
                :icon="item.icon"
                :items="item.items"
                :level="level + 1"
            />
        </template>

        <portal to="sidebar" v-if="menuOpen">
            <div>
                <div class="flex justify-between mb-4 sticky top-0 bg-white px-2">
                    <div class="truncate">{{ title }}</div>
                    <button @click="ToggleMenu">
                        <font-awesome-icon :icon="['fas', `times`]"  />
                    </button>
                </div>
                
                <div class="px-2 py-1">
                    <div>edit page</div>
                    <div>delete page</div>
                    <div>duplicate page</div>
                    <div>set visible in menu</div>
                    <div>add new page</div>
                    <div>add new article</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                    <div>...</div>
                </div>
            </div>
            
        </portal>
    </div>
</template>

<script>
export default {
    props: {
        icon: { type: String, default: 'folder' },
        title: { type: String, default: 'Item' },
        items: { type: Array, default: () => [] },
        level: { type: Number, default: 0 },
    },

    data(){
        return {
            isOpen: false,
            menuOpen: false,
            isVisible: true,
        }
    },

    computed: {
        Icon(){
            let icons = {
                folder: 'folder',
                domain: 'globe',
                page: 'file',
                menu: 'bars'
            }

            return icons[this.icon]
        },

        TreeClasses(){
            return {
                'tree': true,
                'tree--open': this.isOpen,
            }   
        },

        TreeToggleClasses(){
            let classes = []
            classes.push('tree__toggle')
            classes.push(`ml-${ this.level * 2 }`)

            return classes.join(' ')
        },
    },

    

    methods: {
        ToggleTree(){
            this.isOpen = !this.isOpen
        },
        ToggleMenu($event){
            this.menuOpen = !this.menuOpen
        },
        ToggleVisibility(){
            this.isVisible = !this.isVisible
        }
    }
}
</script>

<style lang="scss">
.tree {
    @apply bg-white;
    @apply border-t-2;
    @apply border-gray-100;
    
    &:first-child {
        @apply border-t-0;
    }

    width: 300px;
    
    &__toggle {
        @apply w-6;
        @apply h-6;
        @apply text-center;
        @apply cursor-pointer;
        @apply text-gray-600;
        @apply flex-shrink-0;
    }

    &__icon {
        @apply w-6;
        @apply text-gray-400;
        @apply flex-shrink-0;
    }

    &__label {
        @apply truncate;
        @apply text-sm;
        @apply py-0.5;
        @apply text-gray-700;
        @apply flex-grow;
    }

    &__actions {
        @apply flex-grow;
        @apply px-2;
        @apply text-right;
        @apply text-gray-400;
        @apply flex-shrink-0;
    }
}
</style>
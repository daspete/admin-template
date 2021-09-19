<template>
    <div class="page">
        <div class="bg-white shadow-lg relative z-20 flex items-center gap-4 px-2" style="height: 3rem">
            <div class="font-bold">Admin Prototype</div>
            <button @click="ToggleTree" class="text-blue-500">
                <font-awesome-icon size="lg" :icon="['fas', `sitemap`]"  />
            </button>
        </div>
        <div class="flex w-full">
            <div class="w-11 bg-blue-900 text-indigo-100 overflow-y-auto px-2 py-4 flex flex-col gap-4 shadow-lg" style="height: calc(100vh - 3rem)">
                <font-awesome-icon size="lg" :icon="['fas', `newspaper`]"  />
                <font-awesome-icon size="lg" :icon="['fas', `newspaper`]"  />
                <font-awesome-icon size="lg" :icon="['fas', `newspaper`]"  />
                <font-awesome-icon size="lg" :icon="['fas', `newspaper`]"  />
                <font-awesome-icon size="lg" :icon="['fas', `newspaper`]"  />
            </div>
            <div ref="treeview" class="treeview w-auto bg-white overflow-y-auto" style="height: calc(100vh - 3rem)" v-if="treeOpen">
                <div class="sticky top-0 px-2 py-1 bg-blue-500 text-white text-right">
                    <font-awesome-icon size="sm" :icon="['fas', `sync`]"  />
                </div>
                <UiTree
                    ref="uitree"
                    v-for="(item, itemIndex) in items"
                    :key="`tree-item-${ itemIndex }`"
                    :title="item.title"
                    :icon="item.icon"
                    :items="item.items"
                />
            </div>
            <portal-target name="sidebar" class="w-auto bg-white overflow-y-auto" style="max-width: 300px; height: calc(100vh - 3rem)"></portal-target>
            
            <div class="flex-grow bg-gray-50 overflow-y-auto" style="height: calc(100vh - 3rem)">
                <nuxt-child />
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            treeOpen: false,
            items: [
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test1',
                    icon: 'domain',
                    items: [
                        { title: 'te hgfsdkjg hdsfjkg hfdskjg hfdkhf dfdsfds gfdsg dsfg st1', icon: 'menu' },
                        { title: 't fdgfdsg fsdg fds gsdf gsdf gsfdg sg dsfg fdsg sfgf sest2', icon: 'menu' },
                        { title: 't sfdgfdsg fsdg sdfg sdfg sdgsdf gsdfg sdg sfd est3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                        { 
                                                            title: 'test5', 
                                                            icon: 'menu',
                                                            items: [
                                                                { title: 'test1', icon: 'menu' },
                                                                { title: 'test2', icon: 'menu' },
                                                                { title: 'test3', icon: 'menu' },
                                                                { title: 'test4', icon: 'menu' },
                                                                { 
                                                                    title: 'test5', 
                                                                    icon: 'menu',
                                                                    items: [
                                                                        { title: 'test1', icon: 'menu' },
                                                                        { title: 'test2', icon: 'menu' },
                                                                        { title: 'test3', icon: 'menu' },
                                                                        { title: 'test4', icon: 'menu' },
                                                                        { title: 'test5', icon: 'menu' },
                                                                        { 
                                                                            title: 'test5', 
                                                                            icon: 'menu',
                                                                            items: [
                                                                                { title: 'test1', icon: 'menu' },
                                                                                { title: 'test2', icon: 'menu' },
                                                                                { title: 'test3', icon: 'menu' },
                                                                                { title: 'test4', icon: 'menu' },
                                                                                { 
                                                                                    title: 'test5', 
                                                                                    icon: 'menu',
                                                                                    items: [
                                                                                        { title: 'test1', icon: 'menu' },
                                                                                        { title: 'test2', icon: 'menu' },
                                                                                        { title: 'test3', icon: 'menu' },
                                                                                        { title: 'test4', icon: 'menu' },
                                                                                        { title: 'test5', icon: 'menu' },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test',
                    icon: 'domain',
                    items: [
                        { title: 'test1', icon: 'menu' },
                        { title: 'test2', icon: 'menu' },
                        { title: 'test3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test',
                    icon: 'domain',
                    items: [
                        { title: 'test1', icon: 'menu' },
                        { title: 'test2', icon: 'menu' },
                        { title: 'test3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test',
                    icon: 'domain',
                    items: [
                        { title: 'test1', icon: 'menu' },
                        { title: 'test2', icon: 'menu' },
                        { title: 'test3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test',
                    icon: 'domain',
                    items: [
                        { title: 'test1', icon: 'menu' },
                        { title: 'test2', icon: 'menu' },
                        { title: 'test3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test',
                    icon: 'domain',
                    items: [
                        { title: 'test1', icon: 'menu' },
                        { title: 'test2', icon: 'menu' },
                        { title: 'test3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test',
                    icon: 'domain',
                    items: [
                        { title: 'test1', icon: 'menu' },
                        { title: 'test2', icon: 'menu' },
                        { title: 'test3', icon: 'menu' },
                        { 
                            title: 'test4', 
                            icon: 'menu',
                            items: [
                                { title: 'test1', icon: 'menu' },
                                { title: 'test2', icon: 'menu' },
                                { title: 'test3', icon: 'menu' },
                                { title: 'test4', icon: 'menu' },
                                { 
                                    title: 'test5', 
                                    icon: 'menu',
                                    items: [
                                        { title: 'test1', icon: 'menu' },
                                        { title: 'test2', icon: 'menu' },
                                        { title: 'test3', icon: 'menu' },
                                        { title: 'test4', icon: 'menu' },
                                        { 
                                            title: 'test5', 
                                            icon: 'menu',
                                            items: [
                                                { title: 'test1', icon: 'menu' },
                                                { title: 'test2', icon: 'menu' },
                                                { title: 'test3', icon: 'menu' },
                                                { title: 'test4', icon: 'menu' },
                                                { 
                                                    title: 'test5', 
                                                    icon: 'menu',
                                                    items: [
                                                        { title: 'test1', icon: 'menu' },
                                                        { title: 'test2', icon: 'menu' },
                                                        { title: 'test3', icon: 'menu' },
                                                        { title: 'test4', icon: 'menu' },
                                                        { title: 'test5', icon: 'menu' },
                                                    ]
                                                },
                                            ]
                                        },
                                        
                                    ]
                                },
                            ]
                        },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
                { 
                    title: 'test2',
                    icon: 'domain',
                    items: [
                        { title: 'test1', icon: 'menu' },
                        { title: 'test2', icon: 'menu' },
                        { title: 'test3', icon: 'menu' },
                        { title: 'test4', icon: 'menu' },
                        { title: 'test5', icon: 'menu' },
                    ]
                },
            ]
        }
    },

    mounted(){
        // this.$refs.treeview.addEventListener('scroll', () => {
        //     this.$refs.uitree.forEach((treeItem) => { treeItem.OnScroll() })
        // })
    },

    methods: {
        ToggleTree(){
            this.treeOpen = !this.treeOpen
        }
    }
}
</script>

<style lang="scss">
* {
    scrollbar-width: thin;
    scrollbar-color: theme('colors.blue.300') theme('colors.blue.100');
    
    &::-webkit-scrollbar {
        width: 4px;

        &-track {
            @apply bg-blue-100;
        }

        &-thumb {
            @apply bg-blue-300;
            @apply rounded-lg;
        }
    }
}
.treeview {
    @apply overscroll-x-none;
    
}
</style>
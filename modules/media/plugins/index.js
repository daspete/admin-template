import * as Store from '~/modules/media/store'

export default function({ store }){
    // register the store module
    store.registerModule('media', {
        namespaced: true,
        state: Store.state,
        mutations: Store.mutations,
        getters: Store.getters,
        actions: Store.actions
    })
    
    // add module to the admin main menu
    if(process.server){
        store.commit('mainmenu/AddItem', {
            id: 'media',
            name: 'media',
            path: '/media',
            icon: 'newspaper'
        })
    }
    
}
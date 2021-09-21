import * as Store from '~/modules/user/store'

export default function({ store }){
    // register the store module
    store.registerModule('user', {
        namespaced: true,
        state: Store.state,
        mutations: Store.mutations,
        getters: Store.getters,
        actions: Store.actions
    })
    
    // add module to the admin main menu
    if(process.server){
        store.commit('mainmenu/AddItem', {
            id: 'users',
            name: 'users',
            path: '/users',
            icon: 'newspaper'
        })
    }
    
}
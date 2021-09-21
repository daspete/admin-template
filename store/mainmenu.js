export const state = () => {
    return {
        items: []
    }
}

export const getters = {
    Items(state){
        return state.items
    }
}

export const mutations = {
    AddItem(state, item){
        state.items.push(item)
    }
}

export const actions = {
    // AddItem({ commit }, item){
    //     commit('AddItem', item)
    // }
}
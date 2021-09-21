export const state = () => {
    return {
        filters: []
    }
}

export const getters = {
    Filters(state){
        return state.filters
    }
}

export const mutations = {
    SetFilters(state, filters){
        state.filters = filters
    }
}

export const actions = {

}
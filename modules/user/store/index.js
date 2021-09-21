export const state = () => {
    return {
        userId: 'xxx',
        bla: 'yyy'
    }
}

export const getters = {
    UserId(state){
        return state.userId
    }
}

export const mutations = {
    SetUserId(state, userId){
        state.userId = userId
    }
}

export const actions = {

}
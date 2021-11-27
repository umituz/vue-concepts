import * as types from '@/store/mutation-types'

const state = {
    authUser: ''
}

const getters = {
    authUser: (state) => state.authUser
}

const actions = {
    setAuthUser({ commit }, payload) {
        window.sessionStorage.setItem('authUser', JSON.stringify(payload))
        commit(types.SET_USER, payload)
    }
}

const mutations = {
    [types.SET_USER](state, value) {
        state.authUser = value
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

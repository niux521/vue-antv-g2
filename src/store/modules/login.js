import * as types from '../mutation-types'

const state = {
    userInfo: {
        admin: {
            password: '123',
        },
    },
    loginInfo: {}
}

const getters = {
    userInfo: state => state.userInfo,
    loginInfo: state => state.loginInfo
}

const actions = {
    getLogin({ commit, state }, loginData) {
        commit(types.LOGIN_START, loginData)
    }
}

const mutations = {
    [types.LOGIN_START](state, res) {
        state.loginInfo = res;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
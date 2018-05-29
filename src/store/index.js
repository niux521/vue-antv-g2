import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login
    },
    // 严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
    // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。
    // 这能保证所有的状态变更都能被调试工具跟踪到
    strict: process.env.NODE_ENV !== 'production'
})
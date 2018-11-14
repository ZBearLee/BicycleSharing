/* import * as types from '../mutation-types'
const state = {
    serviceTypeList: [
        { id: 0, name: '车辆故障', isActive: true, linkTo: '/' },
        { id: 1, name: '举报违停', isActive: false, linkTo: '/' },
        { id: 2, name: '上报淤积', isActive: false, linkTo: '/' },
        { id: 3, name: '其他问题', isActive: false, linkTo: '/' },
    ]
}
const actions = {
    changeserviceTypeListActive({ commit }, id) {
        commit(types.CHANGE_SERVICES_TYPE, id)
    }
}
const getters = { serviceTypeList: state => state.serviceTypeList }
const mutations = {
    [types.CHANGE_SERVICES_TYPE](state, id) {
        state.serviceTypeList.forEach(list => {
            list.isActive = false
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions
} */
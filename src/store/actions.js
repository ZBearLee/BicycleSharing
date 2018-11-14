import api from '../store/modules/login'
import Vue from 'vue'
import router from '../router/index'
import * as types from './mutation-types'

export default {
	UserLogin({ commit }, data) {
		commit(types.LOGIN, data)
	},

	UserLogout({ commit }) {
		commit(types.LOGOUT)
	},

	UserName({ commit }, data) {
		commit(types.USERNAME, data)
	}
}

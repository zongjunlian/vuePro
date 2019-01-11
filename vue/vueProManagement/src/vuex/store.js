import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from "axios";
export default new Vuex.Store({
	state: {
		userList: []
	},
	mutations: {
		getUserList(state, data) {
			state.userList = data;
		}
	},
	actions: {
		getUserList({ commit }) {
			return new Promise((resolve, reject) => {
					axios.get('http://www.wwtliu.com/sxtstu/news/juhenews.php', {
							params: {
								type: "junshi",
								count: 10
							}
						})
						.then(function(response) {
							commit('getUserList', response.data.result.data)
							resolve()
						})
						.catch(function(error) {
							console.log(error);
						});
					
			})

		}
	}
})

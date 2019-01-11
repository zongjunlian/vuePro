import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

export default new VueX.Store({
	state:{
		order:{
			"count":1,
			"pro":1,
			"time":1
		},
		totalPrice:0
	},
	mutations:{
		updateOrder(state,data){//data=['count',2]
			state.order[data[0]]=data[1];
		},
		updatePrice(state,totalPrice){
			state.totalPrice=totalPrice;
		}
	},
	actions:{
		updateOrder(context,data){
			context.commit('updateOrder',data);
		},
		updatePrice(context,totalPrice){
			context.commit('updatePrice',totalPrice);
		}
	},
	getters:{
		getOrder(state){
			return state.order ? state.order : {}
		},
		getTotalPrice(state){
			return state.totalPrice>0 ? '$'+state.totalPrice :'$'+0
		}
	}
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import counterList from '@/pages/counterList'
import addList from '@/pages/addList'
import modifyList from '@/pages/modifyList'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [{
		path: '/',
		name: 'index',
		component: index,
		redirect:'counterList',
		children: [
			{
				path: 'counterList',
				name: 'counterList',
				component: counterList,
			},{
				path: 'addList',
				name: 'addList',
				component: addList,
			},{
				path: 'modifyList',
				name: 'modifyList',
				component: modifyList,
			}
		]
	}]
})

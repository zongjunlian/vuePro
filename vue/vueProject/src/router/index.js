import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout'
import details from '@/pages/details'

import horn from '@/pages/details/horn'
import car from '@/pages/details/car'
import earth from '@/pages/details/earth'
import mountain from '@/pages/details/mountain'

Vue.use(Router)

export default new Router({
	mode:'history',
	base: '/myproject/',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
		{
		  path: '/details',
		  name: 'details',
		  component: details,
			redirect:'/details/horn',
			children: [
        {
          name: 'horn',
          path: 'horn',
          component: horn
        },
        {
          name: 'car',
          path: 'car',
          component: car
        },
				{
				  name: 'earth',
				  path: 'earth',
				  component: earth
				},
				{
				  name: 'mountain',
				  path: 'mountain',
				  component: mountain
				}
      ]
		}
  ]
})

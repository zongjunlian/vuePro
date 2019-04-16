import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import course from '@/components/course'
import master from '@/components/master'
import java from '@/components/pages/java'
import web from '@/components/pages/web'
Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',//路由高亮
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/course',
      name: 'course',
      component: course,
      redirect:'/course/java',
      children:[
        {
          path: 'java',//这里只写文件名即可，会自动补全路径
          name: 'java',
          component: java,
        },
        {
          path: 'web',
          name: 'web',
          component: web,
        }
      ]
    },
    {
      path: '/master',
			 // path: '/master/:count/:type',
      name: 'master',
      component: master
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import classstyle from '../components/classstyle'
import electric from '../components/electric'
import food from '../components/food'
import product from '../components/product'
import list from '../components/list'
import detail from '../components/detail'
import cart from '../components/cart'
import my from '../components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/index',
        component: index,
    },
    {
    	  path: '/classstyle',
      	component: classstyle,
      	children:[
      		{
      			path:'electric',
      			component:electric
      		},
          {
            path:'/',
            redirect:'electric'
          }
      	]
    },
    {
    	   path:"/list",
    	   component:list
    },
    {
    	 path:'/detail',
    	 component:detail
    },
    {
        path:'/cart',
        component:cart
    },
    {
       path:'/my',
        component:my
    },
    {
        path:'*',
        redirect:'/index'
    }
  ]
})

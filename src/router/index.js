import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import classstyle from '../components/classstyle'
import electric from '../components/electric'
import food from '../components/food'
import product from '../components/product'
import list from '../components/list'
import detail from '../components/detail'

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
      			path:'food',
      			component:food
      		},
      		{
      			path:'product',
      			component:product
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
    }
  ]
})

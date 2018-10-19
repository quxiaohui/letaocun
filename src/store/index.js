import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		//分类页面类别
		dataList:[],
		//分类给给列表传的id
		goods_id:2,
		//分类给给列表传的name
		goods_name:'',
		goods_id:258,
		goods_name:'生活电器',


	},
	mutations:{
		tolists(store,data){
			store.goods_id=data[0]
			store.goods_name=data[1]
		}
	},
	actions:{
		tolist(state,info){
			console.log(info);
			state.commit('tolists',info)
		}
	}
})


export default store
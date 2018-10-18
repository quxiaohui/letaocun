import Vue from 'vue'
import Vuex from 'vuex'
import axiox from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		dataList:[],
		goods_id:258,
		goods_name:'生活电器'

	},
	mutations:{
		getinfo(state,payLoad){
			console.log(payLoad)
		},
		tolists(store,data){
			store.goods_id=data[0]
			store.goods_name=data[1]
		}
	},
	actions:{
		tostore(state,payLoad){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539738382581&act=mobile_cate&op=index',`gc_id=${payLoad}`).then(res=>{
			  // console.log(res.data)
			  // this.$emit('sontoparent',res.data.datas)
			  state.commit('getinfo',res.data.datas)

			})
		},
		tolist(state,info){
			console.log(info);
			state.commit('tolists',info)
		}
	}
})


export default store
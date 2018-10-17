<template>
	<div>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" v-for="data in szhpro.datas.img_list"><img :src="data.goods_image"/></div>
	    </div>
    	<div class="swiper-pagination"></div>
  	</div>
		<p>{{szhpro.datas.goods_info.goods_name}}</p>
		<p>{{szhpro.datas.goods_info.fare_title}}</p>
		<h2>￥{{szhpro.datas.goods_info.goods_price}}</h2>
		<p><img :src="szhdet.datas.storeInfo.store_logo" >店铺名：{{szhdet.datas.storeInfo.store_name}}</p>
	</div>
</template>
<script>
	import Swiper from "swiper"
    import "swiper/dist/css/swiper.min.css"
	 export default{
		data(){
			return{
				
			}
		},
		props:{
			szhpro:Object,
			szhdet:Object,
			szhrec:Object
		},
		mounted(){
			this.$nextTick(res=>{
				var swiper = new Swiper('.swiper-container', {
			      pagination: {
			        el: '.swiper-pagination',
			        dynamicBullets: true,
			      }
			    })
		    })
		}
	}
</script>
<style type="text/css" scoped lang="scss">
	div{
		background:#fff;
		img{width:100%}
		h2{color:red}
		p:nth-of-type(2){font-size:12px}
		p:nth-of-type(3){
			img{width:10%}
		}
	}
</style>
<template>
	<div v-if="szhpro&&szhdet">
	<div class="swiper-container" >
	    <div class="swiper-wrapper">
	      <div class="swiper-slide"  v-for="data in szhpro.datas.img_list" ><img :src="data.goods_image"/></div>
	    </div>
    	<div class="swiper-pagination"></div>
  	</div>
		<p>{{szhpro.datas.goods_info.goods_name}}</p>
		<h2>￥{{szhpro.datas.goods_info.goods_price}} <span>{{szhpro.datas.goods_info.goods_marketprice}}</span></h2>
		<p>运费：{{szhpro.datas.goods_info.fare_title}}</p>
		<p>请选择：<span v-for="data in szhpro.datas.goods_info.goods_spec">{{data}}</span></p>
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
		props:["szhpro","szhdet","szhrec"],
		updated(){
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
		background:#fff;padding:0 10px;font-size:14px;line-height:40px;
		img{width:100%}
		p:nth-of-type(1){line-height:20px;}
		h2{color:red;font-weight:100;
			span{text-decoration:line-through;color:#ccc;font-size:14px}
		}
		p:nth-of-type(2){color:#ccc;border-bottom:3px solid #ccc;}
		p:nth-of-type(3){width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid #ccc;}
		p:nth-of-type(4){
			img{width:20%;border:1px solid #ccc;vertical-align: center}
		}
	}
</style>
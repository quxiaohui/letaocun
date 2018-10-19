<template>
	<div id="szhpro" v-if="szhpro&&szhdet&&szhrec">
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
		<div id="dettitle">
			查看图文详情
		</div>
		<div id="szhouter" v-if="szhdet">
			<div v-html="szhdet.datas.goodsDetail.top_content">	
			</div>
			<div v-html="szhdet.datas.goodsDetail.goods_body" >	 
			</div>
		</div>

		<div id="szhrec">
			<h3 id="rectitle">为你推荐</h3>
			<ul>
				<li v-for="data in szhrec">
					<img :src="data.goods_image" style="width:100px" />
					<span>{{data.goods_name}}</span><br>
					<span>￥：{{data.goods_price}}</span>
				</li>
			</ul>
		</div>
		<div id="szhend">
			到底啦~~~
		</div>
	</div>
</template>
<script>
	import Swiper from "swiper"
    import "swiper/dist/css/swiper.min.css"
    import axios from "axios";
    // import det from "./det.vue";
    // import rec from "./rec.vue"
	 export default{
	 	name:"pro",
		data(){
			return{
				isloaddet:false,
				isloadrec:false,
				detdata:''
			}
		},
		methods:{
			loadMore(){
				this.isloaddet=true;
				this.isloadrec=true;
			}
		},
		mounted(){
			
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
<style type="text/css"  lang="scss">
	#szhpro{
		background:#fff;padding:0 10px;font-size:14px;line-height:40px;
		img{width:100%}
		p:nth-of-type(1){line-height:20px;}
		h2{color:red;font-weight:100;
			span{text-decoration:line-through;color:#ccc;font-size:14px}
		}
		p:nth-of-type(2){color:#ccc;border-bottom:3px solid #ccc;}
		p:nth-of-type(3){width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid #ccc;}
		p:nth-of-type(4){border-bottom:3px solid #ccc;
			img{width:20%;border:1px solid #ccc;vertical-align: center;}
		}
		#dettitle{color:#ccc;text-align:center;background:#eee;border-top:5px solid #fff;}
		#szhouter{
			img{width:100%;}
		}
		#szhrec{background:#fff;
			#rectitle{color:red;text-align:center;line-height:100px;}
			ul{overflow:hidden;margin-left:20px;line-height:20px;
				list-style:none;
				li{width:32%;float:left;
					height:200px;
				}
			}
			#szhend{
				height:100px;line-height:100px;text-align: center;
			}
		}
	}
</style>
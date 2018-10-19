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
		<img :src="szhdet.datas.storeInfo.store_logo" class="store_logo"><p>店铺名：{{szhdet.datas.storeInfo.store_name}}<br>所在地：{{szhdet.datas.storeInfo.area_info}}</p>
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
			<div id="szhend" >
				到底啦~~~
			</div>
		</div>
		
		<div id="returnTo" @click="toTop">
			返回<br>
			顶部
		</div>
	</div>
</template>
<script>
	import Swiper from "swiper"
    import "swiper/dist/css/swiper.min.css"
    import axios from "axios";
	 export default{
	 	name:"pro",
		data(){
			return{
				
			}
		},
		methods:{
			toTop(){
				// console.log('aaa')
				this.$nextTick(res=>{
		          let distanse=document.documentElement.scrollTop
		          let timeId=setInterval(function(){
		          	// console.log('222')
		          	window.scrollTo(distanse,distanse-=50);
		          	if(distanse<=0){clearInterval(timeId)};
		          },15)
		        }) 
			}
		},
		mounted(){
			this.$nextTick(res=>{
				window.onscroll=function(){
					let appear=document.documentElement.scrollTop
					// let appear1=document.querySelector('#dettitle').offsetTop+200
					// console.log(appear1)
	          		if(appear>=750){document.querySelector('#returnTo').style.display="block"}
	          		else{document.querySelector('#returnTo').style.display="none"}	
				}
			})	
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
		.store_logo{width:26%;border:1px solid #ccc;vertical-align: center;float:left;transform:translateY(5px);margin-right:10px;}
		p:nth-of-type(4){line-height:20px;float:left}
		#dettitle{color:#ccc;text-align:center;background:#eee;border-top:14px double #fff;clear:both}
		#szhouter{
			img{width:100%;}
		}
		#szhrec{background:#fff;
			#rectitle{color:red;text-align:center;line-height:80px;}
			ul{overflow:hidden;line-height:20px;
				list-style:none;
				li{width:30%;float:left;padding:6px 5px;
					height:200px;
					span:nth-of-type(1){display: block;height:40px;overflow:hidden;text-overflow:ellipsis;}
					span:nth-of-type(2){font-size:16px;font-weight:600}
				}
			}
			#szhend{
				height:100px;line-height:50px;text-align:center;color:#aaa;background:#eee;
			}	
		}
		#returnTo{
			position:fixed;bottom:100px;right:20px;z-index:5;border:1px solid #ccc;line-height:18px;
			background: linear-gradient(to bottom, red, pink);display:none;
		}
	}
</style>
	<template>
		<div class="swiper-container aaa1">
		    <div class="swiper-wrapper aaa2">
		      <div class="swiper-slide aaa3" v-for='data in container1List'>
		      <!-- 	<ul class="l swiper-wrapper" > -->
		      		<div class="swiper-q"  >
		      			<img :src="data.goods_image" alt="">
		      			<a href="" title="">{{data.goods_name}}</a>
		      			<span>￥{{data.goods_price}}</span>
		      		</div>
		      	<!-- </ul> -->
		      </div>
		    </div>
		  </div>
	</template>
		  <script>
		  import axios from 'axios';
		  import Swiper from "swiper"
		  import "swiper/dist/css/swiper.min.css"

		   export default{
		     data(){
		       return {
		         forList:[],
		         container1List:[],
		       }
		     },
		     mounted(){
		     	axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539764045449&act=index&op=index&key=','province_id=140&city_id=140100000000').then(res=>{
		     			console.log(res.data.datas.le6ji);
		     			this.container1List = res.data.datas.le6ji.recommend_goods
		     			this.$nextTick(res=>{
		     				 var swiper = new Swiper('.swiper-container', {
						      slidesPerView: 3,
						      spaceBetween: 30,
						      pagination: {
						        el: '.swiper-pagination',
						        clickable: true,
						      },
						    });
		     			})
		     			})
		     }
		 }
		    </script>

		    <style type="text/css"  scoped lang="scss">
		    .aaa1 .aaa2{
		    	overflow: hidden;	
		    	}
		    .aaa1 .aaa2 .aaa3{
		    	width:1400px;
		    }
		    	.aaa1 .aaa2 .aaa3 .swiper-q{
	    			float:left;
		    		width: 100px;
		    	}

		    	.aaa1 .aaa2 .aaa3 .swiper-q img{
		    		width:100%;
		    	}

		    </style>
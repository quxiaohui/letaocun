	<template>
			<div id="box">

				<div id="header" class="l">
				    <swiper class='swiper'></swiper>
					<i class="s iconfont icon-dibiao"></i><a href="" title="">太原市 ></a>
					<i class="v iconfont icon-fangdajing"></i>
					<input type="type" name="" value="搜索您需要的商品">

					<div id="nav">
						<ul class="nav l" >
							<li class="l" v-for="data in navList">
								<img :src="data.cate_image" alt="" >
								<a href="" title="">{{data.cate_name}}</a>
							</li>
						</ul>

					</div>

				</div>
				<div class="llj_title">	</div>
				<div class="tri_img"><img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/index/lct_wap_llj.jpg?date=20181017" alt=""></div>

					<div class="swiper-container1">
						<ul class="l swiper-wrapper" >
								<li class="l swiper-q" v-for='data in container1List'>
								<img :src="data.goods_image" alt="">
								<a href="" title="">{{data.goods_name}}</a>
								<span>￥{{data.goods_price}}</span>
								</li>
									
						</ul>
					</div>
				

				<div class="tsg_title"></div>

				<div class="tri_img "><img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/index/lct_wap_tsg.jpg?date=20181018" alt=""></div>

				<div class="swiper-container1">
				 <ul class="l swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);
					    transition-duration: 0ms;">
					 <li class="l swiper-q" v-for='data in container2List'>
						 <img :src="data.goods_image" alt="">
						 <a href="" title="">{{data.goods_name}}</a>
						 <span>￥{{data.goods_price}}</span>

					 </li>
				 </ul>
			 </div>

			 <div >
			 	
			 </div>
			</div>

</template>


		<script>
		import swiper from './swiper.vue'
		import axios from 'axios'
		export default {
			components:{
			  swiper,
			},
			data(){
				return{
					navList:[],
					container1List:[],
					container2List:[]

				}
			},
			mounted(){
				axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539776294727&act=index&op=index&key=','province_id=140&city_id=140100000000').then(res=>{
					console.log(res.data.datas.platform);
					this.navList = res.data.datas.platform.list
				})

				axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539764045449&act=index&op=index&key=','province_id=140&city_id=140100000000').then(res=>{
					console.log(res.data.datas.le6ji);
					this.container1List = res.data.datas.le6ji.recommend_goods
				})

				axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539823697395&act=index&op=index&key=','province_id=140&city_id=140100000000').then(res=>{
					console.log(res.data.datas.feature);
					this.container2List = res.data.datas.feature.recommend_goods
				})
			},
		}

		</script>
		<style scoped lang="scss">
			.swiper{
				z-index: 0;
				img{
					display:block;
				}
			}
			#header{
				.l{
					float: left;
				}
				.r{
					float:right;
				}
				a{
					text-decoration: none;
				}

				position:relative;

			}



			#header i.s{
				display: inline-block;
				padding:5px;
				font-size: 20px;
				color:white;
				position: absolute;
				top: 5px;
				left:5px;
			}

			#header i.v{
				display:inline-block;
				position:absolute;
				margin-left: 20px;
				top: 12px;
				left:97px;
				z-index: 1;
			}

			#header a{
				font-size: 16px;
				color: white;
				position: absolute;
				top: 10px;
				left:30px;

			}

			#header input{
				border-radius: 20px;
				border: none;
				margin-left:10px;
				height: 30px;
				position: relative;
				text-indent: 30px;
				width: 200px;
				position: absolute;
				top: 5px;
				right: 20px;
			}

			#header img{
				display:block;
			}

			#nav{
				height:90px;
				background: white;
				position:relative;
				top: -10px;
				overflow:hidden;
			}

			#nav ul{
				list-style: none;
				width: 385px;
				margin-left: 5px;
				margin-top: 10px;
			}

			#nav ul li img{
				width: 50px;
				height: 50px;
				line-height: 50px;
				text-align: center;
			}

			#nav ul li{
				height:80px;
				line-height: 90px;
				text-align: center;
				width: 50px;
				position:relative;
				margin-left: 12px;
			}

			#nav ul li a{
				color:black;
				width:80px;
				display:block;
				position:absolute;
				left:-15px;
				font-size: 14px;
				height:30px;
				top: 18px;

			}

			.llj_title {
			    background:url(https://m.lecuntao.com/resource/images/index/imgLe6Ji.png?lv=121fc80180) no-repeat;
			    width: 150px;
			    height: 20px;
			    background-size: contain;
			    margin: 0 auto;
			    display: block;
			    margin-bottom: 5px;
			}

			.tri_img img{

			    width: 100%;
			    height:100px;
			    display: block;
			 }

			 	.swiper-container1{
			 		background: #f0f0f0;
			 		height:150px;
			 		overflow: hidden;
			 	}

			    .swiper-container1 ul{
			    	transform: translate3d(0px, 0px, 0px);
			    	transition-duration: 0ms;
			    	list-style: none;
			    	position: relative;
			    	display: flex;
			    	box-sizing: content-box;

			    }

			    .swiper-container1 ul li a{
			    	// white-space:nowrap;
			    	overflow: hidden;
			    	text-overflow:ellipsis;
			    	width:75px;
			    	height:31px;
			    	display:block;
			    	font-size: 12px;
			    	color:black;
			    	text-decoration: none;
			    }

			    .swiper-container1 ul li span{
			    	font-size: 14px;
			    	color:red;
			    }

			    .swiper-container1 ul li{
			    	width:88px;
			    	height:148px;
			    	margin-left:10px;
			    }

			    .swiper-container1 ul li img{
			    	width:85px;
			    	height:85px;
			    	
			    }

			    .tsg_title{
			    	background: url(https://m.lecuntao.com/resource/images/index/icon_teseguan.png?lv=46f429c64a) no-repeat;
			    	width: 150px;
			    	height: 30px;
			    	background-size: contain;
			    	margin: 0 auto;
			    	display: block;
			    	margin-top: 10px;
			    }

		</style>
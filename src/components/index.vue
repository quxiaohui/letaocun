	<template>
			<div id="box">

				<div id="header" class="l">
				    <swiper class='swiper'></swiper>
				    <div id="select">
						<i class="s iconfont icon-dibiao"></i><a href="" title="">太原市 ></a>
						<i class="v iconfont icon-fangdajing"></i>
						<input type="type" name="" value="搜索您需要的商品">
					</div>

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
			 <index2></index2>
			</div>

</template>


		<script>
		import swiper from './swiper.vue'
		import axios from 'axios'
		import index2 from './index2.vue'
		export default {
			components:{
			  swiper,
			  index2
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
				window.onscroll=function(){
					let top=document.documentElement.scrollTop
					if(top>0){
						document.querySelector('#select').style.background="red"
					}else{document.querySelector('#select').style.background="none"}
				}
			}
			
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
				#select{height:40px;width:100%;position:fixed;left:0;top:0;z-index: 10;
					i.s{
						// display: inline-block;
						padding:5px;
						font-size: 25px;
						color:white;
						position: absolute;
						top: 5px;
						// left:5px;
					}
					i.v{
						// display:inline-block;
						position:absolute;
						margin-left:40px;
						top: 12px;
						left:97px;
						z-index: 1;
					}
					a{
						font-size: 20px;
						color: white;
						// display:inline-block;
						position: absolute;
						top: 10px;
						left:30px;
						width:90px
					}
					input{
						border-radius: 20px;
						border: none;
						margin-left:130px;
						height: 30px;
						position: relative;
						text-indent: 30px;
						width: 250px;
						position: absolute;
						top: 5px;
						// right: -20px;
					}
				}
				position:relative;

			}

			#header input{
				border-radius: 20px;
				border: none;
				margin-left:130px;
				height: 30px;
				position: relative;
				text-indent: 30px;
				width: 250px;
				position: absolute;
				top: 5px;
				// right: -20px;
			}

			#header img{
				display:block;
			}

			#nav{
				height:90px;
				background: white;
				top: -20px;
				overflow:hidden;
				position: relative
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
				margin-left: 25px;
			}

			#nav ul li a{
				color:black;
				width:80px;
				display:block;
				position:absolute;
				left:-15px;
				font-size: 16px;
				height:30px;
				top: 18px;

			}

			.llj_title {
			    background:url(https://m.lecuntao.com/resource/images/index/imgLe6Ji.png?lv=121fc80180) no-repeat;
			    width: 150px;
			    height:15px;
			    background-size: contain;
			    margin: 0 auto;
			    display: block;
			    margin-bottom: 5px;
			    margin-top: -10px;
			}

			.tri_img img{

			    width: 100%;
			    height:100px;
			    display: block;
			 }

			 	.swiper-container1{
			 		background: #f0f0f0;
			 		height:180px;
			 		overflow: hidden;
			 		background:white;
			 	}

			    .swiper-container1 ul{
			    	transform: translate3d(0px, 0px, 0px);
			    	transition-duration: 0ms;
			    	list-style: none;
			    	position: relative;
			    	display: flex;
			    	box-sizing: content-box;
			    	margin-top: 10px;

			    }

			    .swiper-container1 ul li a{
			    	// white-space:nowrap;
			    	overflow: hidden;
			    	text-overflow:ellipsis;
			    	width:100px;
			    	height:40px;
			    	display:block;
			    	font-size: 15px;
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
			    	margin-left:20px;
			    }

			    .swiper-container1 ul li img{
			    	width:100px;
			    	height:100px;
			    	
			    }

			    .tsg_title{
			    	background: url(https://m.lecuntao.com/resource/images/index/icon_teseguan.png?lv=46f429c64a) no-repeat;
			    	width: 150px;
			    	height: 15px;
			    	background-size: contain;
			    	margin: 0 auto;
			    	display: block;
			    	margin-top: 10px;
			    	margin-bottom: 5px;
			    }

		</style>
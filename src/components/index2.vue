	<template>
		<div id="tho">
		<ul id="yinchang" class="libiao">
				<li v-for="data,index in liList" @click="scrollT(index)" class="fff"><span class="ff"></span>{{data.cate_info.cate_name}}</li>
		</ul>
			<ul class="libiao">
				<li v-for="data,index in liList" @click="scrollT(index)" class="fff"><span class="ff"></span>{{data.cate_info.cate_name}}</li>
			</ul>
			<ul v-for="data in liList" class="classdetail">
				<li class="cate_name"  style="background:#eee"><a href="" title="">{{data.cate_info.cate_name}}</a><span class='dian'></span></li>
				<li>
					<ul class="di">
						<li class="di2" v-for="litdata in data.goods_list" @click="tiaozhuan(litdata.gc_id,litdata.goods_commonid,litdata.goods_id)" style="border-bottom: 1px solid #ccc;border-right: 1px solid #ccc; width:49%;">
							<img :src="litdata.goods_image" alt="" style="width:100%;">
							<p style="height:40px;width:100%;overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;
-webkit-line-clamp:2; margin-left:10px;">{{litdata.goods_name}}</p>
							<p style="color:red; font-size: 17px;margin-left: 10px;margin-top:10px;">{{litdata.goods_price}}元<span style='margin-left: 40px;color:black;font-size: 14px;'>已售{{litdata.goods_salenum}}件</span></p>

						</li>
					</ul>
				</li>
			</ul>
		</div> 
	</template>

	<script>
         import axios from 'axios'
         export default{
         	data(){
         		return{
         			liList:[],
         			ffList:[],
         			who:0,
         			color:'red'
         			}
         		},
         		methods:{
         			tiaozhuan(a,b,c){
         				location.href=`/#/detail?${a}&${b}&${c}`;
         			},
         			scrollT(i){
         				console.log(this.ffList[i].cate_color)
         				
         				for(var j=0;j<5;j++){
         					document.querySelectorAll('.libiao li')[j].style.backgroundColor='#fff'
         					// document.querySelectorAll('.libiao li')[j].span.style.backgroundColor='#fff'
         				}

         				
         				document.querySelectorAll('.fff')[i].style.backgroundColor=`${this.ffList[i].cate_color}`;
         				document.querySelectorAll('.ff')[i].style.backgroundImage=`url(${this.ffList[i].cate_image})`;
         				document.querySelectorAll('.fff')[i].style.borderRadius=`20px`

         				let anchor = this.$el.querySelector('.cate_name');
         				this.$nextTick(res=>{
         					  document.documentElement.scrollTop=820+i*620;
         				 });
         				this.who=i;
         			}
         		},
         		mounted(){
         			axios.post('/lct?api_version=2.3.0&platType=2&cl ient=wap&isEncry=0&time=1539843143478&act=index&op=index&key=','province_id=140&city_id=140100000000').then(res=>{
         				console.log(res.data.datas.category_goods);
         				this.liList = res.data.datas.category_goods
         				this.ffList = res.data.datas.category
         			})
         			//window.onscroll=function(){
         				//let appear=document.querySelector('.libiao').offsetTop+40;
         				//console.log(appear);
         				//let appear1=document.documentElement.scrollTop;
         				//console.log(appear1)
         				//if(appear1>=appear){
         					//console.log('hhhh')
         					//document.querySelector('#yinchang').style.display="block";
         				//}//else{document.querySelector('#yinchang').style.display="none"}
         			//}
         		}
         	}
         	
	</script>
	<style type="text/css" scoped lang="scss">
		#tho{
			#yinchang{display:none;position:fixed;left:0;top:40px;z-index:100;
				overflow:hidden;height:40px;line-height:30px;
					position:relative;
					background: white;
					margin-top: 10px;
				li{float:left;width:20%;height:30px;line-height:30px;font-size:17px;transform:translateY(5px);position: relative;
					.ff{
						width:15px;
						height:15px;
						margin: 5px 5px 0 5px;
						display:inline-block;
					}
				}
			}
			.libiao{overflow:hidden;height:40px;line-height:30px;
					position:relative;
					background: white;
					margin-top: 10px;
				li{float:left;width:20%;height:30px;line-height:30px;font-size:17px;transform:translateY(5px);position: relative;
					.ff{
						width:15px;
						height:15px;
						margin: 5px 5px 0 5px;
						display:inline-block;
					}
				}
			} 
			.classdetail{
				overflow:hidden;background:#fff;
				li{
					ul{
						overflow:hidden;
						li{float:left;width:50%;height:300px;width:212px;
							img{width:200px;}
						}
					}
				}
			}
		}

		.cate_name a{
			font-size: 16px;
			// margin-bottom: 10px;
			height:40px;
			line-height: 40px;
			text-decoration: none;
			color:black;
			margin-left: 5px;
		}



		.cate_name .dian{
			width:5px;
			height:20px;
			// line-height: 20px;
			// margin-left: 5px;
			margin-top: 10px;
			background:red;
			display:block;
			float:left;
		}


	</style>
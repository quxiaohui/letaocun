	<template>
	<div>
	<header>
		<span @click="icon_ret()" class="icon-ret"></span>
		<h2 class="address-txt">{{$store.state.goods_name}}</h2>
	</header>
	<ul class="result_ct">
		<li class="click_style">全部</li> 
		<li>销量优先</li> 
		<li>
			<div>
			<span class="pr">价格</span>
 			<span class="price_icon">
 				<i class="icon_top"></i> 
 				<i class="icon_down"></i>
 			</span>
 			</div>
 		</li> 
 		<li>人气</li>
 	</ul>
 	<div id="scroller">
 	<ul class="cont_msg " v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
		<li v-for="data in list">
			<a>
				<img :src="data.goods_image" style="opacity: 1;"> 
				<span class="msg_des">{{data.goods_name}}</span>
			</a> 
			<a class="ct_price">
				<div class="msg_price">
					<i class="icon-price"></i>
				 	<span class="price_actual">{{data.goods_price}}</span>
				</div> 
				<div class="msg_amount">{{data.goods_salenum}}人付款</div>
			</a>
		</li>
	</ul>			
 	</div>
	</div>
	</template>

	<script>
	import axios from "axios";
	
	     export default{
	     	methods:{
	     		icon_ret(){
	     			console.log("a");
	     		},
	     		loadMore() {
	     		  this.loading = true;
	     		  this.current++;

				if(this.current>this.total){
					this.loading = true;//禁用
					return ;
				}
				axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539740877131&act=goods&op=goodsList',`provinc=140&city=140100000000&keyword=&page=${this.current}&sorted=4&sequence=0&gcId=${this.$store.state.goods_id}&workshop=`).then(res=>{
					
					this.list = [...this.list,...res.data.datas.list] 
	     		    this.loading = false;
	     		  }, 2500);
	     		}
	     	},
	     	data(){
	     			return{
	     				list:[],
	     				current:1,
	     				total:9
	     			}
	     		},
	     	mounted(){		
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539740877131&act=goods&op=goodsList',`provinc=140&city=140100000000&keyword=&page=${this.current}&sorted=4&sequence=0&gcId=258&workshop=`).then(res=>{
            
             
            this.list = res.data.datas.list;
           
          })

			}
	     }
	</script>

	<style scoped>
	*{
		box-sizing: border-box;
	}
	header {
		height:0.96rem;
		width: 100%;
		background-color: #fff;
		position: fixed;
		left:0;
		top:0;
		z-index: 2;
	}
	h2,ul{
		display: block;
	}
	.icon-ret{
		background: url(https://m.lecuntao.com/resource/images/btn_back.png?lv=09b14befba) no-repeat;
		width: 0.4rem;
		height: 0.4rem;
		background-size: 100%;
		float: left;
	    margin-top: 0.35rem;
	    margin-left: 0.2rem;
	}
	.pr{
    	float: left;
    	margin-left: 0.52rem;
	}
	.price_icon {
	    float: left;
	    margin-left: 0.1rem;
	    margin-top: 0.08rem;
	}
	.icon_top{
	    background: url(https://m.lecuntao.com/resource/images/icon_top_gray.png?lv=c5c0fa2948) no-repeat;
	    width: 0.16rem;
	    height: 0.1rem;
	    display: block;
	    background-size: 100%;
	    margin-top: 0.08rem;
	}
	.icon_down {
	    background: url(https://m.lecuntao.com/resource/images/icon_down_gray.png?lv=ff2bdd4222) no-repeat;
	    width: 0.16rem;
	    height: 0.1rem;
	    display: block;
	    background-size: 100%;
	    margin-top: 0.12rem;
	}
	.click_style {
    	color: #f81234;
	}
	.result_ct{
	    width: 100%;
	    position: fixed;
	    left: 0;
	    top: 0.96rem;
	    background: #fff;
	    z-index: 2;
	}
	.result_ct li {
	    width: 25%;
	    height: 0.6rem;
	    line-height: 0.6rem;
	    float: left;
	    font-size: 0.3rem;
	    text-align: center;
	}
	.address-txt {
	    font-size: 0.36rem;
	    line-height: 0.96rem;
	    text-align: center;
	}
	h1, h2, h3, h4, h5, em, i {
	    font-weight: normal;
	}
	em, i {
	    font-style: normal;
	}
	.cont_msg {
	    overflow: hidden;
	    width: 100%;
	    background: #f0f0f0;
	    margin-top: 1.07rem;
	}
	.cont_msg li img {
	    width: 100%;
	    background: url(https://m.lecuntao.com/resource/images/placeholde.png?lv=8182e8207a) no-repeat;
	    height: 3.2rem;
	    background-size: contain;
	    display: block;
	}
	img {
	    border: 0;
	    vertical-align: middle;
	}
	a {
	    text-decoration: none;
	    color: #252525;
	    outline: none;
	}
	#scroller {
		position: absolute;
		z-index: 1;
		width: 100%;
		padding-top: 0.5rem;
	}
	.msg_price{
	    padding-left: 0.14rem;
	    float: left; 
	    overflow: hidden;
	}

	.cont_msg li{
	    float: left;
	    width: 49.3%;
	    background: #fff;
	    margin-top: 0.08rem;
	    margin-left: 0.05rem;
	}
	.cont_msg li img{
	    width: 100%;
	    background: url(https://m.lecuntao.com/resource/images/placeholde.png?lv=8182e8207a) no-repeat;
	    height: 3.2rem;
	    background-size: contain;
	    display: block;
	}
	.msg_des {
	    color: #333;
	    font-size: 0.28rem;
	    width: 90%;
	    padding-left: 5%;
	    overflow: hidden;
	    display: block;
	    height: 0.72rem;
	    line-height: 0.36rem;
	    margin-top: 0.12rem;
	}
	.ct_price{
	    padding-bottom: 0.4rem;
	    overflow: hidden;
	    display: block;
	    padding-top: 0.06rem;
	}
	.icon-price{
	    background: url(https://m.lecuntao.com/resource/images/imoney.png?lv=63d050c8c2) no-repeat;
	    width: 0.3rem;
	    height: 0.3rem;
	    background-size: contain;
	    display: block;
	    float: left;
	    margin-top: 0.04rem;
	}
	.price_actual{
	    color: #f81234;
	    font-size: 0.3rem;
	    float: left;
	    margin-left: 0.08rem;
	}
	.msg_amount{
	    padding-right: 0.24rem;
	    font-size: 0.24rem;
	    color: #999;
	    float: right;
	    margin-top: 0.04rem;
	}

		
</style>




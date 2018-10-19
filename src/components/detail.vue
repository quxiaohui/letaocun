<template>
	<div>
		<nav>
			<ul>
				<li @click="changepro" :class="which=='0'?'active':''">商品</li>
				<li @click="changedet" :class="which=='1'?'active':''">详情</li>
				<li @click="changerec" :class="which=='2'?'active':''">推荐</li>
			</ul>
		</nav>
    <pro :szhpro="prodata" :szhdet="detdata" :szhrec="recdata"></pro>
	</div>
</template>
<script>
import axios from "axios";
import pro from "./pro.vue"
	export default{
    data(){
      return{
         which:"0",
         prodata:"",
         detdata:"",
         recdata:""
      }
    },
    components:{
      pro
    },
    methods:{
      changepro(){
        this.which='0'
        this.$nextTick(res=>{
          document.documentElement.scrollTop=0
        }) 
      },
      changedet(){
        this.which='1'
        this.$nextTick(res=>{
          document.documentElement.scrollTop=document.querySelector('#dettitle').offsetTop
        }) 
      },
      changerec(){
        this.which='2'
        this.$nextTick(res=>{
          document.documentElement.scrollTop=document.querySelector('#rectitle').offsetTop
        }) 
      },
    },
  mounted(){
          let index=window.location.href.indexOf('?')+1;
          let oldArr=window.location.href.slice(index).split('&');
          this.good_id=parseInt(oldArr[2])
          console.log(this.good_id)
          this.common_id=parseInt(oldArr[1])
          console.log(this.common_id)
          this.gc_id=parseInt(oldArr[0])
          console.log(this.gc_id)
          axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539769571143&act=mobile_goods_detail&op=getGoodsInfo',`common_id=${this.common_id}&goods_id=${this.good_id}&key=`).then(res=>{
            console.log(res.data);
            this.prodata=res.data
          })
          axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539769571143&act=mobile_goods_detail&op=getDetailData',`common_id=${this.common_id}&goods_id=${this.good_id}&key=`).then(res=>{
            console.log(res.data);
            this.detdata=res.data
          })
          axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539772093357&act=mobile_goods_detail&op=getRecommentDetail',`gc_id=${this.gc_id}&province_id=140&city_id=140100000000&key=`).then(res=>{
            console.log(res.data);
            this.recdata=(res.data.datas.recommendGoods).slice(0,6)
          })
        }
}
</script>
<style type="text/css" scoped lang="scss">
 nav{width:100%;
    font-size:15px;overflow:hidden;
     ul{position:fixed;width:100%;top:0;left:0;z-index:2;
      background:#fff;
      border-bottom:1px solid #ccc;
      display:flex;
      li{
        flex:1;
        text-align: center;
        height: 40px;
        line-height: 40px;
        padding-bottom:-2px
      }
    }
  }
	.active{border-bottom:2px solid #000;}
</style>
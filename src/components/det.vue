<template>
	<div id="szhouter">
		<div v-html="szhdet.datas.goodsDetail.top_content">	
		</div>
		<div v-html="szhdet.datas.goodsDetail.goods_body" >	 
		</div>
	</div>
</template>
<script>
	 export default{
	 	name:'rec',
		data(){
			return{
				
			}
		},
		props:{
			szhpro:Object,
			szhdet:Object,
			szhrec:Array
		},
		updated(){
			// document.getElementsByTagName("img").style.width="100%"
		}
	}
</script>
<style type="text/css"  lang="scss">
#szhouter{
	img{width:100%;}
}

</style>
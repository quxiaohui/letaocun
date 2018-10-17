<template>
	<div id="outer">
		<div v-html="szhdet.datas.goodsDetail.top_content">	
		</div>
		<div v-html="szhdet.datas.goodsDetail.goods_body" style="width:200px">	 
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
			szhrec:Object
		},
		mounted(){
		
		}
	}
</script>
<style type="text/css" scoped lang="scss">
	#outer{
		width:100%;
		div{
			img{width:100px}
		}
	}
</style>
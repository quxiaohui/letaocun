<template>
	<div>
		<ul>
			<li v-for="data in szhrec.datas.recommendGoods">
				<img :src="data.goods_image" style="width:100px" />
				<span>{{data.goods_name}}</span><br>
				<span>{{data.goods_price}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	 export default{
	 	name:'det',
		data(){
			return{
				a:'woshi content'
			}
		},
		props:{
			szhpro:Object,
			szhdet:Object,
			szhrec:Object
		},
	}
</script>
<style type="text/css" scoped lang="scss">
	div{
		ul{
			list-style:none;
			li{width:25%;float:left;
				height:200px;
				background:#fff;
			}
		}
	}
</style>
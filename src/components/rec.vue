<template>
	<div>
		<h3>为你推荐</h3>
		<ul>
			<li v-for="data in szhrec">
				<img :src="data.goods_image" style="width:100px" />
				<span>{{data.goods_name}}</span><br>
				<span>￥：{{data.goods_price}}</span>
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
			szhrec:Array
		},
	}
</script>
<style type="text/css" scoped lang="scss">
	div{background:#fff;
		h3{color:red;text-align:center}
		ul{overflow:hidden;margin-left:20px;
			list-style:none;
			li{width:32%;float:left;
				height:200px;

			}
		}
	}
</style>
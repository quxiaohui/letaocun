<template>
	<div>
		<nav>
			<ul>
				<li @click="which='0'" :class="which=='0'?'active':''">商品</li>
				<li @click="which='1'" :class="which=='1'?'active':''">详情</li>
				<li @click="which='2'" :class="which=='2'?'active':''">推荐</li>
			</ul>
		</nav>
	</div>
</template>
<script>
	export default{
		data(){
			which:"0",
		},
	}
</script>
<style type="text/css" scoped lang="scss">
 nav{width:100%;
    font-size:15px;overflow:hidden;
     ul{position:fixed;width:100%;top:0;left:0;
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
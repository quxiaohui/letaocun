<template>
  <div id="app">
  <!-- 首页 -->
    <router-view></router-view>
    <!-- 分类页 -->
    <footerbar></footerbar>
  </div>
</template>

<script>
import footerbar from './components/footerbar'
export default {
  components:{
    footerbar
  }
}
</script>
<style>
*{
  padding: 0;
  margin:0;
}
html,body{
  width:100%;
  height:100%;
  background-color: #ccc
}
ul{
  list-style: none;
  font-size:15px;
}
</style>

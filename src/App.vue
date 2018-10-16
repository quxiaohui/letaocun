<template>
  <div id="app">
  <!-- 首页 -->
    <index></index>
    <!-- 分类页 -->
    <classstyle></classstyle>
    <router-view/>
  </div>
</template>

<script>
import index from './components/index'
import classstyle from './components/classstyle'
export default {
  components:{
    index,
    classstyle
  }
}
</script>

<style>

</style>

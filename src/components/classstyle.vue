  <template>
    <div>
      <!-- 头部搜索框 -->
      <headerbar></headerbar>
      <!-- 侧边栏 -->
      <slidebar @sontoparent="getinfo"></slidebar>
      <!-- 具体分类 -->
      <electric :P2S="infoP2S"></electric>
    </div>
  </template>

  <script>
    import headerbar from './headerbar'
    import slidebar from './slidebar'
    import electric from './electric'
     export default {
      data(){
        return {
          infoP2S:[]
        }
      },
     	  components:{
          headerbar,
          slidebar,
          electric
        },
        methods:{
          getinfo(data){
            console.log('kkk',data);
            this.infoP2S = data
          }
        }
     }
  </script>
  <style scoped lang="scss">
    div{
      height:100%;
      // background-color: #FFF
    }
  </style>
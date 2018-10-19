  <template>
    <div>
      <ul>
        <router-link to="/index" tag="li" activeClass="active">首页</router-link>
        <router-link to="/classstyle" tag="li" activeClass="active">分类</router-link>
        <router-link to="/cart" tag="li" activeClass="active">购物车</router-link>
        <router-link to="/my" tag="li" activeClass="active">我的</router-link>
      </ul>
      
    </div>
  </template>

  <script>
     export default {
     	
     }
  </script>

  <style scoped lang = "scss">
    div{
      ul{
        width: 100%;
        height: 50px;
        background-color: #fff;
        position: fixed;
        z-index: 10;
        bottom: 0;
        left:0;
        li{
          width:25%;
          text-align: center;
          float: left;
          line-height: 48px;
          font-size: 18px;
        }
      }
    }
    .active{
      background-color: #f00;
      color:white;
    }
  </style>


  <template>
    <nav>
      <ul>
        <router-link to="/detail/pro" activeClass="active" tag="li">商品</router-link>
        <router-link to="/detail/det" activeClass="active" tag="li">详情</router-link>
        <router-link to="/detail/rec" activeClass="active" tag="li">推荐</router-link>
        <router-view></router-view>
      </ul>
    </nav>
  </template>
  <script>
   import axios from "axios";
     export default {
        data(){
          return{
            good_id:0,
            common_id:0,
            data:{}
          }
        },
        methods:{
          
        },
     	  mounted(){
          let index=window.location.href.indexOf('?')+1;
          let oldArr=window.location.href.slice(index).split('&');
          let newArr=[]
          for (var i in oldArr){
            newArr.push(oldArr[i].split('='))
          }
          newArr=[...newArr[0],...newArr[1]]
          this.good_id=parseInt(newArr[newArr.indexOf('good_id')+1])
          console.log(this.good_id)
          this.common_id=parseInt(newArr[newArr.indexOf('common_id')+1])
          console.log(this.common_id)
          axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539691049120&act=mobile_goods_detail&op=getDetailData',`common_id=${this.common_id}&goods_id=${this.good_id}&key=`).then(res=>{
            console.log(res.data);
            this.data=res.data
          })
        }
     }
  </script>
  <style type="text/css" scoped lang="scss">
  nav{
    ul{
      display:flex;
      li{
        flex:1;
        text-align: center;
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .active{border-bottom:2px solid #000}
</style>
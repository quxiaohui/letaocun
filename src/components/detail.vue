  <template>
    <nav>
      <ul>
        <li @click="who='pro'">商品</li>
        <li @click="who='det'">详情</li>
        <li @click="who='rec'">推荐</li>
      </ul>
      <keep-alive>
        <component :is='who' :szhpro="prodata" :szhdet="detdata" :szhrec="recdata"></component>
      </keep-alive>
    </nav>
  </template>
  <script>
   import axios from "axios";
   import pro from "./pro.vue";
   import det from "./det.vue";
   import rec from "./rec.vue";
     export default {
        data(){
          return{
            good_id:0,
            common_id:0,
            gc_id:0,
            prodata:{},
            who:'pro',
            detdata:{},
            recdata:{}
          }
        },
        methods:{
          
        },
        components:{
          pro,
          det,
          rec
        },
        mounted(){
          let index=window.location.href.indexOf('?')+1;
          let oldArr=window.location.href.slice(index).split('&');
          // let newArr=[]
          // for (var i in oldArr){
          //   newArr.push(oldArr[i].split('='))
          // }
          // newArr=[...newArr[0],...newArr[1]]
          this.good_id=parseInt(oldArr[2])
          console.log(this.good_id)
          this.common_id=parseInt(oldArr[1])
          console.log(this.common_id)
          this.gc_id=parseInt(oldArr[0])
          console.log(this.gc_id)
          axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539769571143&act=mobile_goods_detail&op=getGoodsInfo',`common_id=${this.common_id}&goods_id=${this.good_id}&key=`).then(res=>{
            console.log(res.data);
            this.prodata=res.data
          })
          axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539769571143&act=mobile_goods_detail&op=getDetailData',`common_id=${this.common_id}&goods_id=${this.good_id}&key=`).then(res=>{
            console.log(res.data);
            this.detdata=res.data
          })
          axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539772093357&act=mobile_goods_detail&op=getRecommentDetail',`gc_id=${this.gc_id}&province_id=140&city_id=140100000000&key=`).then(res=>{
            console.log(res.data);
            this.recdata=res.data
          })
        }
     }
  </script>
  <style type="text/css" scoped lang="scss">
  nav{
    font-size:15px;
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
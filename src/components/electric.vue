  <template>
    <div>
      <div>
        <ul>
          <li v-for="data in P2S" @click="handleClick(data.gc_id,data.gc_name)">
            <img :src="data.cate_img" alt="">
            <p>{{data.gc_name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
  import {mapState} from 'vuex'
     export default {
      data(){
        return {
         
        }
      },
      props:['P2S'],
     	mounted(){
       
      },
      computed:{
        ...mapState['dataList']
      },
      methods:{
        handleClick(gc_id,name){
          console.log(gc_id,name)
          let info = [gc_id,name]
          this.$store.dispatch('tolist',info)
          location.href="/#/list";
        }
      }
     }
  </script>
  <style scoped lang="scss">
    div{
      height:100%;
      width:100%;
      background-color: #FFF;
      position:absolute;
      top: 50px;
      left:0px;
      border:0;
      ul{
        width:70%;
        position:absolute;
        top: -50px;
        right:0;
        border:0;
        li{
          width:33%;
          background-color: #FFF;
          float:left;
          border:0;
          text-align: center;
          img{
            width:90px;
          }
          p{
            font-size: 12px;
          }

        }
      }
    }
  </style>
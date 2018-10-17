  <template>
    <div>
      <ul>
        <li v-for="data in infoList" @click="handleClick(data.gc_id)" :class="current === data.gc_id ? 'focus' : ''">{{ data.gc_name}}</li>
      </ul>
    </div>
  </template>

  <script>
     import axios from 'axios'
     export default {
        data(){
          return {
            infoList:{}, 
            myclass:'focus',
            current : 0
          }
        },
     	  mounted(){
          fetch('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539689239867&act=mobile_cate&op=index').then(res=>res.json()).then(res=>{
            console.log(res.datas)
            this.infoList = res.datas
          })
          if(this.$store.state.dataList.length===0){
            this.$store.dispatch('tostore')
          }
        },
        methods:{
          handleClick(id){
            axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539738382581&act=mobile_cate&op=index',`gc_id=${id}`).then(res=>{
              // console.log(res.data)
              this.$emit('sontoparent',res.data.datas)

            })
            
            
            this.current = id;
          }
        }
     }
  </script>
  <style scoped lang="scss">
     div{
      ul{
        position: fixed;
        z-index:10;
        width:30%;
        background-color: #f2f2f2;
        margin-top: 2px;
        border:0;
        li{
          height:44px;
          line-height: 44px;
          text-align: center;
          border:0;
          font-size: 16px;
        }
      }
     }
     .active{
      background-color: #FFF;
      color:red;
     }

     .focus{
       background-color: #FFF;
       color:red
     }
  </style>
  <template>
    <div>
      <div>
        <ul>
          <li>food</li>
        </ul>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
     export default {
      mounted(){
        
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
      ul{
        width:70%;
        background-color: #f60;
        position:absolute;
        top: -50px;
        right:0
      }
    }
  </style>
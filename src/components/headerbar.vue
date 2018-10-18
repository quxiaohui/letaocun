  <template>
    <div>
      <div class="box">
        <!-- <div>输入商品名称</div> --> 
        <input type="text" name="" value="请输入商品名称">
        <p>取消</p>
      </div>
      
    </div>
  </template>

  <script>
     export default {
     	
     }
  </script>

  <style scoped lang="scss">
    div{   
      width:100%;
      height:50px;    
      div.box{
        height:50px;
        background-color: #fff;
        display: flex;
        margin:auto;
        justify-content:space-around;
        align-items:stretch;
        border-bottom: 1px solid #ccc;
        position: fixed;
        z-index: 10;
        input{
          width:80%;
          border:0;
          height: 80%;
          background-color: #f2f2f2; 
          border-radius:10%;
          text-indent: 20px;
          line-height: 80%;
        }
        p{
          font-size: 16px;
        }
      }
    }
  </style>
  <template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper"  v-for="data in imgList"><img :src="data.adv_image" alt="" style="width:100%" ></div>
         <!-- <img :src="data.adv_url" alt="" style="width:100%" > -->
      </div>
     <div class="swiper-pagination"></div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    import Swiper from "swiper"
    import "swiper/dist/css/swiper.min.css"
        export default{
          data(){
            return {
              imgList:[]
            }
          },
         


          mounted(){
            axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1539760858681&act=index&op=index&key=','province_id=140&city_id=140100000000').then(res=>{
              console.log(res.data.datas.adv);
              this.imgList = res.data.datas.adv
              this.$nextTick(res=>{
               var swiper = new Swiper('.swiper-container', {
                  spaceBetween: 30,
                  centeredSlides: true,
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                });
              })
            })
          }
        }
      </script>

      <style scoped lang="scss">
        .swiper{
          img{
            width:100%;
            z-index:100;
          }
        }
        
      </style>
<template>
  <div class="home">
    <h1>

    </h1>
    <Swiper>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
    import Vue from 'vue'
    import VueAwesomeSwiper from 'vue-awesome-swiper'

    import 'swiper/swiper-bundle.css'
    Vue.use(VueAwesomeSwiper)
    import {Swiper,SwiperSlide,directive} from "vue-awesome-swiper"
    export default {
        name: "home",
        data(){
            return{
                banner:[],
                recommend:[]
            }
        },
        components:{
            Swiper,
            SwiperSlide
        },
        directives:{
            swiper:directive
        },
        // 初始化后和挂载前获取数据
        created () {
            let xml = new XMLHttpRequest();
            xml.open("get","http://192.168.3.149:3000/home/multidata")
            xml.send()
            xml.onreadystatechange = function () {
                if (xml.readyState == 4 && xml.status==200){
                    this.banner = JSON.parse(xml.response).data.banner.list
                    this.banner = JSON.parse(xml.response).data.recommend.list
                    // console.log(111);
                }
            }
        },
        mounted() {
            console.log(this.banner);
        }
    }
</script>

<style scoped>

</style>
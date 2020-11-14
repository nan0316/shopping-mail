<template>
    <div id="home">
      <HomeTopBar></HomeTopBar>
      <div class="wrapper" ref="wrapper" @scroll="bScroll">
        <div class="content">
          <Swiper>
            <SwiperItem v-for="item in banner">
              <img :src="item.image" alt="">
            </SwiperItem>
          </Swiper>
          <HomeRecommend :recommend="recommend"></HomeRecommend>
          <WeekPopular/>
          <TitleBar :titles="['流行','新款','精选']" @cli="itemCli"></TitleBar>
          <Goods :goods="goods[tit[cIndex]] "></Goods>
        </div>
      </div>
      <BackTop :isShow="homeIsShow" @bac= "bacTop"></BackTop>
    </div>
</template>

<script>
  // 导入公共组件
import {Swiper,SwiperItem} from "@/components/common/swiper/swiper"
// import {getHomeMultidata} from "../../network/home"
import {request} from "../../network/axios";
import TitleBar from "@/components/content/titleBar/TitleBar"
import Goods from "@/components/content/goods/Goods"
import BetterScroll from "better-scroll"
import BackTop from "@/components/content/bacTop/BacTop"

// 导入私有组价
import HomeTopBar from "./children/HomeTopBar"
import HomeRecommend from "./children/HomeRecommend"
import WeekPopular from "./children/WeekPopular"
export default {
        name: "Home",
        components:{
            HomeTopBar,
            Swiper,
            SwiperItem,
            HomeRecommend,
            WeekPopular,
            TitleBar,
            Goods,
            BackTop
        },
        data(){
            return{
               banner:[],
               recommend:[],
               goods:{
                  pop:{
                      title:'流行',
                      id:0,
                      list:[]
                  },
                  news:{
                      title:'流行',
                      id:0,
                      list:[]
                  },
                  sell:{
                      title:'流行',
                      id:0,
                      list:[]
                  }
               },
               tit:["pop","news","sell"],
               cIndex:0,
               scroll,
               homeIsShow:false
            }
        },
        methods:{
            getHomeMultidata (){
                request({
                    url:"/home/multidata",
                }).then(res =>{
                    this.banner = res.data.data.banner.list
                    this.recommend = res.data.data.recommend.list
                })
            },
            getHomeGoods(title,id){
                request({
                    url:"/home/"+title,
                    params:{
                        id:id
                    }
                }).then(res=>{
                    console.log(res);
                    this.goods[title].list.push(...res.data.data.list)
                    this.goods[title].id ++
                    // this.scroll.refresh()
                    this.$nextTick(() => {
                        const  scroll= new BetterScroll(".wrapper", {
                            click:true,
                            probeType:3,
                            pullUpLoad:true
                        })
                        this.scroll = scroll
                        this.scroll.on("pullingUp",()=>{
                            this.getHomeGoods(this.tit[this.cIndex],this.goods[this.tit[this.cIndex]].id+1)
                        })
                        this.scroll.on("scroll",(po)=>{
                            if (po.y<-1000) {
                                this.homeIsShow = true
                            }else {
                                this.homeIsShow = false
                            }
                        })
                    })
                })
            },
            itemCli(index){
                this.cIndex = index
                this.scroll.refresh()
                // console.log(this.goods[this.tit[this.cIndex]]);
            },
            bScroll(option){
                console.log(option);
            },
            bacTop(){
                this.scroll.scrollTo(0,0,3000)
            }
        },
        created() {
          this.getHomeMultidata(),
            // getHomeMultidata(this.banner,this.recommend)
          this.getHomeGoods('pop',this.goods.pop.id+1)
          this.getHomeGoods('news',this.goods.pop.id+1)
          this.getHomeGoods('sell',this.goods.pop.id+1)
        },
        mounted(){
            // this.$nextTick(() => {
            //     this.scroll = new BetterScroll(".wrapper", {})
            // })
        }
    }
</script>

<style scoped>
#home{
  height: 100vh;
  margin-bottom: 80px;
}
.wrapper{
  height: calc(100vh - 50px - 44px);
  overflow: hidden;
}
</style>
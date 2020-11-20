<template>
  <div class="detail">
    <TopBar bgClo = "#fff">
      <div slot="left" @click="backHome" class="ti-left">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="ti-center">
        <div class="ti-item"
             v-for="(item,index) in topTitles"
             :key="item" @click="addActive(index)"
             :class="{active: index == cIndex?true:false}">{{item}}</div>
      </div>
    </TopBar>
    <div class="banner">
      <Swiper>
        <SwiperItem v-for="(item,index) in detailGoods.bannerImg" :key="index">
          <img :src="item" alt="">
        </SwiperItem>
      </Swiper>
    </div>
    <DetailShopping :shoppingInfo="detailGoods.shoppingInfo"></DetailShopping>
    <Columns :columns="detailGoods.columns"></Columns>
    <Servies :services="detailGoods.services"></Servies>
    <ShopInfo :shopInfo="detailGoods.shopInfo"></ShopInfo>
    <div class="shopIn">
      <button>进店逛逛</button>
    </div>
    <ShopDesc :shopDesc="detailGoods.shopDesc"></ShopDesc>
    <Wearing :wearings="detailGoods.detailInfo"></Wearing>
    <Parameter :parameter="detailGoods.itemParams"></Parameter>
    <Rate :rate="detailGoods.rate"></Rate>
    <h3 class="hot-recommed">热门推荐</h3>
    <Goods :goods = 'recommends'></Goods>
    <DetailBottom :shopData="detailGoods.shoppingInfo"></DetailBottom>
  </div>
</template>

<script>
  import {request} from "@/network/axios";
  import TopBar from "@/components/common/topBar/TopBar"
  import {Swiper,SwiperItem} from "@/components/common/swiper/swiper"
  import Goods from '@/components/content/goods/Goods'

  import DetailShopping from "./children/DetailShopping"
  import Columns from "./children/Columns"
  import Servies from "./children/Services"
  import ShopInfo from "./children/ShopInfo"
  import ShopDesc from "./children/ShopDesc"
  import Wearing from "./children/Wearing"
  import Parameter from "./children/Parameter"
  import Rate from "./children/Rate"
  import DetailBottom from "./children/DetailBottom"
  export default {
        name: "Detail",
        data(){
            return{
                detailGoods:{
                    bannerImg:[],
                    shoppingInfo:{
                        img:'',
                        title:'',
                        price:'',
                        oldPrice:"",
                        ShopDesc:'',
                        iid:''
                    },
                    columns:[],
                    services:[],
                    shopInfo:{},
                    shopDesc:'',
                    detailInfo:{},
                    itemParams:{},
                    rate:[]
                },
                topTitles:['商品','参数','评论','推荐'],
                cIndex:0,
                recommends:{},
                bottomBar:[
                    {
                        icon:""
                    }
                ]
            }
        },
        components:{
            TopBar,
            Swiper,
            SwiperItem,
            DetailShopping,
            Columns,
            Servies,
            ShopInfo,
            ShopDesc,
            Wearing,
            Parameter,
            Rate,
            Goods,
            DetailBottom
        },
        methods:{
            getDetail(iid){
              request({
                  url:"/detail",
                  params:{
                      id:iid
                  }
              }).then(val=>{
                  console.log(val);
                  var da = val.data.result
                  this.detailGoods.bannerImg = da.itemInfo.topImages
                  this.detailGoods.shoppingInfo.title = da.itemInfo.title
                  this.detailGoods.shoppingInfo.price = da.itemInfo.price
                  this.detailGoods.shoppingInfo.oldPrice = da.itemInfo.oldPrice
                  this.detailGoods.shoppingInfo.desc = da.itemInfo.discountDesc
                  this.detailGoods.shoppingInfo.img = da.itemInfo.topImages[0]
                  this.detailGoods.shoppingInfo.iid = this.$route.query.id
                  this.detailGoods.columns.push(da.columns[0],da.columns[1],da.shopInfo.services[da.shopInfo.services.length-1].name)
                  this.detailGoods.services= da.shopInfo.services
                  this.detailGoods.services.pop()
                  this.detailGoods.shopInfo = da.shopInfo
                  this.detailGoods.shopDesc = da.itemInfo.desc
                  this.detailGoods.detailInfo = da.detailInfo.detailImage[0].list
                  this.detailGoods.itemParams = da.itemParams
                  console.log(this.detailGoods.itemParams);
                  this.detailGoods.rate = da.rate.list
              })
            },
            getRecommendData(){
                request({
                    url:'/detail/recommend',
                }).then(value=>{
                    this.recommends = value.data.data
                })
            },
            backHome(){
                this.$router.push("/home")
            },
            addActive(index){
                this.cIndex = index
            }
        },
        created() {
            // this.gId = this.$route.query.id
            this.getDetail(this.$route.query.id)
            this.getRecommendData()
        }
    }
</script>

<style scoped>
  .detail{
    margin-bottom: 100px;
  }
.ti-center{
  display: flex;
}
.ti-item{
  flex: 1;
  text-align: center;
  line-height: 44px;
}
.ti-left img{
  margin-top: 10px;
}
.active{
  color: red;
}
.banner{
  height: 300px;
  overflow: hidden;
}
.shopIn button{
  width: 200px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: #cccccc;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  display: block;
  margin: 10px auto;
  color: #666666;
}
.hot-recommed{
  font-weight: normal;
  line-height: 50px;
  padding-left: 10px;
}
</style>
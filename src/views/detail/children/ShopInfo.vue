<template>
  <div class="shopInfo">
    <div class="title">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="product-description">
      <div class="pro-left">
        <div class="all-sales">
          <p>{{allSales}}万</p>
          <p>总销量</p>
        </div>
        <div class="all-baby">
          <p>{{shopInfo.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="pro-right">
        <ul>
          <li v-for="(item,index) in shopInfo.score" :key="item.name">
            <span>{{item.name}}</span>
            <span class="score" :class="{score_ctive:item.isBetter}">{{item.score}}</span>
            <span class="better" :class="{better_active:item.isBetter}">{{item.isBetter?"高":"低"}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopInfo",
        props:{
            shopInfo:Object
        },
        computed:{
            allSales(){
                return (this.shopInfo.cSells/1000).toFixed(1)
            }
        }
    }
</script>

<style scoped>
.shopInfo{
  padding: 0px 10px;
}
.title img{
  width: 60px;
}
.title span{
  font-size: 18px;
  margin-left: 20px;
}
.product-description{
  display: flex;
  margin-top: 20px;
}
.product-description>div{
  flex: 1;
}
.pro-left{
  display: flex;
}
.pro-left>div{
  flex: 1;
  text-align: center;
}
.pro-left>div>p:first-of-type{
  font-size: 16px;
  font-weight: bold;
}
.pro-right li{
  line-height: 24px;
  display: flex;
}
.pro-right li span{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.score{
  color: #0f0;
}
.better{
  background: #0f0;
}
.score_ctive{
  color: red;
  /*color: #ffffff;*/
}
.better_active{
  background:red;
}
</style>
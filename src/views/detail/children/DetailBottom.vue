<template>
  <div class="detailBottom">
    <div class="detailBar">
      <div class="detailBottomItem">
          <div slot="icon" class="fa fa-weixin"></div>
          <div slot="text">客服</div>
      </div>
      <div class="detailBottomItem">
          <div slot="icon" class="fa fa-shopping-bag"></div>
          <div slot="text">商铺</div>
      </div>
      <div class="detailBottomItem">
          <div slot="icon" class="fa fa-star-o"></div>
          <div slot="text">收藏</div>
      </div>
      <div class="detailBottomItem buy" id="car" @click="addCart">
          <div slot="text">加入购物车</div>
      </div>
      <div class="detailBottomItem buy" id="pay">
          <div slot="text">购买</div>
      </div>

    </div>
  </div>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar"
  import TabBarItem from "@/components/common/tabbar/TabBarItem"
    export default {
        name: "DetailBottom",
        components:{
            TabBar,
            TabBarItem
        },
        methods:{
            addCart(){
                this.$store.commit("addShoppingCart",this.shopData)
            }
        },
        props:{
            shopData:Object
        }
    }
</script>

<style scoped>
@import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.css";
.detailBar{
  display: flex;
  position: fixed;
  bottom:0px;
  left: 0px;
  right: 0;
  height: 55px;
  background: #ffffff;
  z-index: 200;
}
.detailBottomItem{
  flex: 2;
  text-align: center;

}
.detailBottomItem .fa{
  color: #FF69B4;
  font-size: 20px;
  margin-top: 10px ;
}
.buy{
  flex: 3;
  line-height: 55px;
}
#car{
  background: orange;
}
#pay{
  background: red;
}
</style>
<template>
  <div class="goodsItem">
    <img :src="image" alt="" @click="toDetail">
    <p class="goods-title">{{item.title}}</p>
    <p class="goods-price">
      <span class="price">￥{{item.price}}</span>
      <img src="@/assets/img/common/collect.svg" alt="">
      <span>{{item.cfav}}</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "GoodItem",
        props:{
            item:Object
        },
        methods:{
            toDetail(){
                this.$router.push({
                    path:"/detail",
                    query:{
                        id:this.item.iid
                    }
                })
            }
        },
        computed:{
            image(){
                return this.item.show ? this.item.show.img :this.item.image
            }
        }
    }
</script>

<style scoped>
.goodsItem{
  width: 45%;
  margin-bottom: 20px;
}
.goodsItem>img{
  width: 100%;
}
.goods-title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodsItem p img{
  width: 14px;
  vertical-align: middle;
}
.goodsItem p{
  line-height: 20px;
}
  .price{
    color: #ff0000;
  }
.goods-price span{
  vertical-align: middle;
}
</style>
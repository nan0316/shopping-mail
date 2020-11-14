<template>
  <div class="goods">
    <GoodsItem v-for="item in goods.list" :item = "item"></GoodsItem>
  </div>
</template>

<script>
  import GoodsItem from "./GoodItem"
    export default {
        name: "Goods",
        components:{
            GoodsItem
        },
        props:{
            goods:Object
            // goods:{
            //     type:Object
            // }
        }
    }
</script>

<style scoped>
.goods{
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
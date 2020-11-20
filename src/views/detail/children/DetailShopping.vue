<template>
  <div class="detail-info">
    <p>{{shoppingInfo.title}}</p>
    <h2>
      <span class="price">{{shoppingInfo.price}}</span>
      <span class="old-price">{{shoppingInfo.oldPrice}}</span>
      <span class="desc">{{shoppingInfo.desc}}</span>
    </h2>
  </div>
</template>

<script>
    export default {
        name: "DetailShopping",
        props:{
            shoppingInfo:Object
        }
    }
</script>

<style scoped>
  .price{
    color: #FF69B4;
    font-size: 14px;
  }
.old-price{
  font-size: 16px;
  text-decoration: line-through;
  color: #c0c0c0;
}
p{

}
.desc{
  font-size: 12px;
  color: #ffffff;
  border: solid #cccccc 1px;
  padding: 3px 5px;
  background: #FF69B4;
  margin-bottom: 15px;
  border-radius: 10px;
}
</style>
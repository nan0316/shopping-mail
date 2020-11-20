<template>
  <div class="desc">
    <div class="desc-left"> </div>
      <p>{{shopDesc}}</p>
    <div class="desc-right"> </div>
  </div>
</template>

<script>
    export default {
        name: "ShopDesc",
        props:{
            shopDesc:String
        }
    }
</script>

<style scoped>
.desc{
  padding: 0px 10px;
}
.desc>div{
  width: 150px;
  height: 0;
  border: 1px #cccccc solid;
}
.desc-right{
  float: right;
}
  p{
    margin: 10px 0px;
    font-size: 16px;
    color: #666666;
  }
</style>
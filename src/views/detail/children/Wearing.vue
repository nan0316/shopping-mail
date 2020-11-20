<template>
  <div class="wearing">
    <h3>穿着效果</h3>
    <div class="wearingItem" v-for="item in wearingS">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Wearing",
        props:{
            wearingS:Array
        }
    }
</script>

<style scoped>
.wearing{
  width: 100vw;
  padding: 10px;
}
img{
  width: 100vw;
  margin: 20px 0px;
}
</style>
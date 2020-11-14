<template>
  <div class="homeRecommend">
    <div class="recommendItem" v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommend:Array
        }
    }
</script>

<style scoped>
.homeRecommend {
  display: flex;
}
.recommendItem{
  flex: 1;
  text-align: center;
  width: 25%;
  padding-bottom: 10px;
  margin-top: 10px;
  border-bottom: 10px #cccccc solid;
}
.recommendItem img{
  width: 70%;
}
  a{
    color: #666666;
    font-size: 12px;
  }
</style>
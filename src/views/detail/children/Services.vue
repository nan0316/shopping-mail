<template>
  <div class="services">
    <div class="services-item" v-for="item in services" :key="item.name">
      <img :src="item.icon" alt="">
      {{item.name}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "Services",
        props:{
            services:Array
        }
    }
</script>

<style scoped>
.services{
  display: flex;
  padding: 0px 10px;
}

.services-item{
  font-size: 12px;
  flex: 1;
}
.services-item img{
  width: 10px;
}
.services-item:last-of-type{
  flex: 1.5;
}

</style>
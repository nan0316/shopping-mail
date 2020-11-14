<template>
  <div class="bacTop" v-show="isShow" @click="bac">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
    export default {
        name: "BacTop",
        props:{
            isShow:{
                type:Boolean,
                default:true
            }
        },
        methods:{
            bac(){
                this.$emit("bac")
            }
        }
    }
</script>

<style scoped>
.bacTop{
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 80px;
  right: 30px;
  opacity: 0.5;
}
.bacTop img{
  width: 100%;
}
</style>
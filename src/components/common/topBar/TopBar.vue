<template>
  <div id="top-bar" :style="{background:bgClo}">
    <div class="bar-item left">
      <slot name="left"></slot>
    </div>
    <div class="bar-item center">
      <slot name="center"></slot>
    </div>
    <div class="bar-item right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
    export default {
        name: "TopBar",
        props:{
            bgClo:{
                type:String,
                default:"#ff69B4"
            }
        }
    }
</script>

<style scoped>
#top-bar{
  width: 100%;
  height: 44px;
  display: flex;
}
  .left,.right{
    width: 40px;
  }
  .center{
    flex: 1;
  }
</style>
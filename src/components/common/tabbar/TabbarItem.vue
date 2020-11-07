<template>
    <div class="tab-item" @click="itemClick" :style="{color:changeColor}">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props:{
            path:String,
            col:{
                type:String,
                default:"red"
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            changeColor (){
                return this.isActive?this.col:""
            }

        },
        methods:{
            itemClick(){
                // this.isActive = true
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
  .tab-item{
    flex: 1;
  }
  .active{
    color: red;
  }
</style>
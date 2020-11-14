<template>
  <div class="titles">
    <div class="titlesItem"
         v-for="(item,index) in titles"
         :key="item"
         @click="change(index)" >
      <span :class="{active:cIndex == index ? true:false}">{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TitleBar",
        data(){
            return {
                cIndex:0
            }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return ["流行","新款","精选"]
                }
            }

        },
        methods:{
            change(index){
                this.cIndex = index,
                this.$emit("cli",index)
            }
        }
    }
</script>

<style scoped>
.titles{
  display: flex;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
}
.titlesItem{
  text-align: center;
  flex: 1;
}
span{
  padding: 0px 5px;
}
.active{
  color: #FF69B4;
  border-bottom: #FF69B4 solid 3px;
}
</style>
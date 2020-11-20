<template>
  <div class="cart-list">
    <div class="list-left">
      <div class="list-checked" @click="changeChecked" :class="{checkbox:isChecked}"></div>
    </div>
    <div class="list-center">
      <img :src="list.img" alt="">
    </div>
    <div class="list-right">
      <p>{{list.title}}</p>
      <p>{{list.title}}</p>
      <p>
        <span class="price">￥{{price | priceToFixed}}</span>
        <span class="count">X{{list.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CartList",
        props:{
            list:Object,
            index:Number,
            // ch:Boolean,
            boo:Boolean
        },
        // 监听数据的改变
        watch:{
            boo(){
               this.isChecked = this.boo
           }
        },
        data(){
            return{
                isChecked:this.$store.state.cart[this.index].checked
            }
        },
        computed:{
            price(){
                let p = this.list.oldPrice.slice(1)
                return p * this.list.count
            }
        },
        filters:{
            priceToFixed(price){
                return price.toFixed(2)
            }
        },
        methods:{
            changeChecked(){
              this.$store.commit("changeCheck",this.index)
              this.list.isChecked = this.$store.state.cart[this.index].checked
            }
        }
    }
</script>

<style scoped>
.cart-list{
  width: 100vw;
  display: flex;
  height: 150px;
  align-items: center;
}
.list-left{
  width: 30px;
  flex: 1;
}
.list-center{
  flex: 5;
  width: 100px;
  border-radius: 5px;
  /*overflow: hidden;*/
}
.list-checked{
  width: 20px;
  height: 20px;
  border-radius: 50% ;
  border: 1px solid #cccccc;
}
.list-center img{
  width: 100%;
  height: 100%;
}
.list-right{
  flex: 11;
  overflow: hidden;
  margin-right: 20px;
}
.list-right p{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
}
.list-right p:first-of-type{
  margin-top: 20px;
  font-size: 16px;
}
.list-right p:nth-of-type(2){
  color: #aaa;
}
.list-right p:last-of-type{
  margin-top: 30px;
}
.list-right p:last-of-type .price{
  color: #FF0000;
}
.list-right p:last-of-type .count{
  float: right;
  margin-right: 30px;
}
.price{
  color: #f00;
  float: left;
}
.count{
  float: right;
  margin-right: 30px;
}
.checkbox{
  /*background-color: red;*/
  background:red url("../../../assets/img/cart/tick.svg") no-repeat center center;
}
</style>
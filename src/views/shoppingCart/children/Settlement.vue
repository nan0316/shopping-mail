<template>
  <div class="settlement">
    <div class="settlement_left">
      <div class="checkbox" @click="allChanged" :class="{checked:isChecked}"></div>
      <span >全选</span><span class="all">总价</span><span>￥{{allPrice | priceToFixed}}</span>
    </div>
    <div class="settlement_right">
      <span>去结算({{sp}})</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Settlement",
        data(){
            return{
                // allPrice:0
               isChecked:true
            }
        },
        beforeMount(){
            this.addPrice()
        },
        methods:{
            addPrice(){
                let cart = this.$store.state.cart
                let all = 0
                for (let i in cart){
                    if (cart[i].checked){
                        all += cart[i].oldPrice.slice(1) * cart[i].count
                    }
                }
                return all
            },
            allChanged(){
              this.isChecked = !this.isChecked
              this.$store.commit("update",this.isChecked)
              this.$emit("co",this.isChecked)
              this.addPrice()
            }
        },
        computed:{
            allPrice(){
                let cart = this.$store.state.cart
                let all = 0
                for (let i in cart){
                    if (cart[i].checked){
                        all += cart[i].oldPrice.slice(1) * cart[i].count
                    }
                }
                return all
            }
        },
        filters:{
            priceToFixed(price){
                return price.toFixed(2)
            }
        },
        props:{
            sp:{
                type:Number,
                default:0
            }
        }
    }
</script>

<style scoped>
.checkbox{
  width: 20px;
  height: 20px;
  border-radius: 50% ;
  border: 1px solid #cccccc;
  display: inline-block;
  margin-top: 11px;
  background: white;
  vertical-align: middle;
}
.checked{
  background:red url("../../../assets/img/cart/tick.svg") no-repeat center center;
}
.settlement{
  height: 44px;
  display: flex;
  position: fixed;
  bottom: 55px;
  left: 0px;
  right: 0px;line-height: 44px;
}
span{
  vertical-align: center;
}
.settlement_left{
  flex: 2;
  background: #d0e9c6;
}
.all{
  margin: 0 50px 0 20px;
}
.settlement_right{
  flex: 1;
  background: #FF69B4;
  text-align: center;
}
</style>
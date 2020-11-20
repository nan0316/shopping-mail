<template>
    <div>
        <TopBar>
            <div slot="center" class="title">购物车 ({{this.$store.getters.shoppingCount}})</div>
        </TopBar>
        <CartList v-for="(item,index) in list" :list="item" :index="index" :key="index" :boo="boo"></CartList>
        <Settlement :sp = 'sp' @co = 'co'></Settlement>
    </div>
</template>

<script>
    import TopBar from '@/components/common/topBar/TopBar'
    import CartList from './children/CartList'
    import Settlement from './children/Settlement'
    export default {
        name: "ShoppingCart",
        components:{
            TopBar,
            CartList,
            Settlement
        },
        data(){
            return{
                list:[],
                boo
            }
        },
        created(){
            this.list = this.$store.state.cart
        },
        computed:{
            sp(){
                let count = 0
                for (let i in this.$store.state.cart) {
                    count += this.$store.state.cart[i].count
                }
                return count
            }
        },
        methods:{
            co(boo){
                this.boo = boo
            }
        }
    }
</script>

<style scoped>
.title{
    text-align: center;
    height: 44px;
    color: #ffffff;
    font-size: 18px;
    line-height: 44px;
}
</style>
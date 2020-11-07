<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" col="green">
        <div slot="icon" class="fa fa-home icon"></div>
        <div slot="text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" col="green">
        <div slot="icon" class="fa fa-th-large icon"></div>
        <div slot="text">分类</div>
      </TabBarItem>
      <TabBarItem path="cart" col="green">
        <div slot="icon" class="fa fa-shopping-cart icon"></div>
        <div slot="text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" col="green">
        <div slot="icon" class="fa fa-user icon"></div>
        <div slot="text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
    import TabBar from "../common/tabbar/Tabbar"
    import TabBarItem from "../common/tabbar/TabbarItem"
    export default {
        name: "MainTab",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
  .icon{
    font-size: 25px;
  }
</style>
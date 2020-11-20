<template>
  <div class="rate">
    <h3>
      <span>用户评论</span>
      <span>更多&gt;</span>
    </h3>
    <div class="userInfo">
      <div>
        <img :src="rate[0].user.avatar" alt="">
      </div>
      <h2>{{rate[0].user.uname}}</h2>
    </div>
    <p>{{rate[0].content}}</p>
    <p class="dt">
      <span class="date">{{rate[0].created | changDage}}</span>
      <span>{{rate[0].style}}</span>
    </p>
  </div>
</template>

<script>
  import {dateFormat} from "@/assets/js/data"
    export default {
        name: "Rate",
        props:{
            rate:Array
        },
        filters:{
            changDage(date){
                return dateFormat(new Date(date*1000),'yy-MM-dd hh:mm:ss')
            }
        }
    }
</script>

<style scoped>
.rate{
  padding: 10px 10px 0px;
  border-top: 2px solid #ddd ;
}
h3{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;
}
.userInfo{
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
}
.userInfo div{
  flex: 1;
  border-radius: 50%;
  margin-right: 30px;
}
.userInfo img{
  width: 100%;
}
.userInfo h2{
  flex: 6;
  margin-top: 10px;
}
.date{
  margin-right: 15px;
}
.dt{
  margin-top: 15px;
}
</style>
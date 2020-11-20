<template>
  <div class="parameter">
    <ul>
      <li v-for="(item,index) in parameter.rule.tables[0]" :key="index">
        <span v-for="i in item">{{i}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in parameter.info.set" class="sh" :key="index">
        <div>
          <b>{{item.key}}</b>
        </div>
        <div>
          <b>{{item.value}}</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Parameter",
        props:{
            parameter:Object
        }
    }
</script>

<style scoped>
.parameter{
  padding: 0 10px;
}
li{
  line-height: 30px;
}
span{
  display: inline-block;
  font-size: 16px;
  width: 50px;
  color: hotpink;
}
span:first-of-type{
  width: 100px;
  color: #333;
}
.sh{
  display: flex;
}
.sh div:first-of-type{
  flex: 1;
}
.sh div:last-of-type{
  flex: 3;
  padding-left: 10px;
}
.sh b{
  font-weight: normal;
}
.sh div:first-of-type b{
  color: #333333;
}
.sh div:last-of-type b{
  color: hotpink;
}

</style>
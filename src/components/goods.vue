<template>
  <div>
      <img :src="img" width="100%">
      <p>{{title}}</p>
      <p>￥{{price}}</p>
  </div>
</template>

<script>
export default {
    props:{
        img:String,
        title:String,
        price:Number
    }
}
</script>

<style>

</style>
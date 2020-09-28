<template>
  <div class="box">
      {{cm}}
  </div>
</template>

<script>
export default {
    props:{
        cm:String
    }
}
</script>

<style scoped>
.box{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #eee;
    color: black;
    text-align: center;
    line-height: 40px;
}

</style>
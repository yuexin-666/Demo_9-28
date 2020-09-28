<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-arrow
      @click-left="onClickLeft"
    />
    

    <div>
      <van-card
      v-for="item in cartList"
      :key="item.id"
      :price="item.price"
      :title="item.title"
      :thumb="item.img"
    />
    </div>
  </div>
</template>

<script>2
export default {
  data() {
    return {
      cartList: [],
    };
  },
  created() {
    let list = localStorage.list;
    if (list) {
      this.cartList = JSON.parse(list);
    }
  },
  methods:{
    onClickLeft(){
      this.$router.push({
        path:'/home'
      })
    }
  }
};
</script>

<style>
</style>
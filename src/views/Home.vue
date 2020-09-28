<template>
  <div>
    <van-card
      v-for="(item,index) in list"
      :key="index"
      :price="item.price"
      :title="item.title"
      :thumb="item.img"
      :desc="item.licheng"
    >
      <template #num>
        <span @click="add(item)">
          <van-icon name="cart-o" />
        </span>
      </template>
    </van-card>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/" icon="logistics">-</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o" :badge="$store.state.carList.length">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      list: [],
    };
  },
  created() {
    this.$axios.get("http://localhost:8080/data.json").then((res) => {
      this.list = res.data.nav;
    });
  },
  methods: {
    add(goods) {
      let rel = true;
      this.$store.state.carList.map((item) => {
        if (item.id == goods.id) {
          alert("已加入购物车");
          rel = false;
        }
      });

      if(rel){
         this.$store.commit("addCar", goods);
          this.$router.push({
        path:'/cart'
      })
      }
     
    },
  },
};
</script>

<style>
</style>
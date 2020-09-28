<template>
  <div>
    <div class="top">
      <size
        v-for="(item,index) in list"
        :key="index"
        :cm="item.cm"
        @click.native="searchSize(item)"
        :class="{active : item.num%2==1}"
      ></size>
    </div>
    <div class="carts-tt" @click="showPopup">
        <van-icon name="cart-o" size="40px" />
    </div>
    <div class="content">
      <goods
        v-for="(item,index) in showList"
        :key="index"
        :img="item.img"
        :title="item.title"
        :price="item.price"
        class="goods"
        @click.native="add(item)"
      ></goods>
    </div>

  </div>
</template>

<script>
import size from "@/components/size";
import goods from "@/components/goods";
export default {
  components: {
    size,
    goods,
  },
  data() {
    return {
      list: [], //尺码数据
      goodsList: [], //商品数据
      isShow:false,
      cartList:[],
      showList:[]
    };
  },
  created() {
    this.getList();
    let list = localStorage.list;
    if (list) {
      this.cartList = JSON.parse(list);
    }
  },
  methods: {
    getList() {
      this.$axios.get("http://localhost:8080/ceshi.json").then((res) => {
        this.list = res.data.size;
        this.goodsList = res.data.sj;
        this.showList = this.goodsList
      });
    },
    showPopup() {
      this.$router.push({
        path:'/carts'
      })
    },
    searchSize(goods) {
      goods.num++;
      if (goods.num % 2 == 1) {
        this.showList.map((item) => {
          if (item.scm == goods.cm) {
            this.showList = [];
            this.showList.push(item);
          }
        });
      } else {
        this.showList = this.goodsList
      }
    },
    add(item) {
      this.cartList.push(item);
      this.save();
    },
    save() {
      localStorage.list = JSON.stringify(this.cartList);
    },
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.content {
  width: 100%;
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.goods {
  width: 45%;
  height: 300px;
}
.active {
  background-color: red;
}
.carts {
  margin: 10px 0px;
}
.carts-tt{
    float: right;
}
</style>
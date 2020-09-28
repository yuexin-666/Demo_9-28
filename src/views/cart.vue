<template>
  <div>
    <van-nav-bar
      :right-text=text
      left-arrow
      @click-right="onClickRight"
      @click-left="onClickLeft"
    />

    <van-checkbox-group v-model="result" @change="changeCheck">
      <van-row v-for="(item,index) in $store.state.carList" :key="index">
        <van-col span="3" v-if="isShow">
          <van-checkbox :name="item"></van-checkbox>
        </van-col>
        <van-col span="21">
          <van-card :price="item.price" :title="item.title" :thumb="item.img" :desc="item.licheng"></van-card>
        </van-col>
      </van-row>
    </van-checkbox-group>

    <div class="bottom" v-if="isShow">
        <span><input type="checkbox" v-model="check" @click="sellAll">全选</span>
        <p class="p1" @click="del">删除</p>
    </div>

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
      active: 3,
      result: [],
      isShow:false,
      check:false,
      text:'编辑'
    };
  },
  methods:{
      onClickRight(){
          this.isShow = !this.isShow
          if(this.isShow){
              this.text = '取消'
          }else{
              this.text = '编辑'
          }
      },
      onClickLeft(){
        this.$router.push({
          path:'/'
        })
      },
      del(){
          this.result = []
          this.$store.state.carList=[]
      },
      changeCheck(){
          if(this.result.length == this.$store.state.carList.length){
              this.check = true
          }else{
              this.check = false
          }
      },
      sellAll(){
          if(!this.check){
              this.result = this.$store.state.carList
             
          }else{
              this.result = []
          }
          
           this.changeCheck()
      }
  }
};
</script>

<style scoped>
.bottom {
    width: 100%;
    height: 40px;
    align-items: center;
    position: fixed;
    bottom: 50px;
    display: flex;
    justify-content: space-between;
}
.p1{
    width: 20%;
    height: 40px;
    background-color: orange;
    text-align: center;
    line-height: 40px;
}
</style>
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- home 页面
    <van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab> -->

  <van-search
  v-model="value"
  shape="round"
  background="#4fc08d"
  placeholder="请输入搜索关键词"
/>

  <van-notice-bar
    left-icon="volume-o"
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />

   <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
  
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <!-- :title="item" -->
  <van-cell v-for="item in list" :key="item"  >
      <div><van-card
            num="2"
            tag="特价"
            price="2000.00"
            desc="描述信息"
            title="房源标题"
            thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
            origin-price="2800.00"
          /></div>
  </van-cell>
</van-list>

  <van-tabbar route>
    <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
    <van-tabbar-item icon="search" to='/login'>房源</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='/login'>充值</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to='/register'>我的</van-tabbar-item>
  </van-tabbar>
</van-tabs>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      active: 0,
      value:'',
      list: [],
      loading: false,
      finished: false,
      imgUrl:'../static/1.jpg'
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {

          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
}
</script>

<style lang="less">

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>


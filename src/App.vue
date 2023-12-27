<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">找个房</router-link> |
      <router-link to="/register">李贺</router-link>
      <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe> -->
    </div>
    <router-view/>
    <van-tabbar route>
    <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
    <van-tabbar-item icon="search" to='/search'>房源</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='/Recharge'>充值</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to='/my'>我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

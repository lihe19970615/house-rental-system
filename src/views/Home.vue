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
    text="欢迎尊贵的李总使用找个房！！！欢迎尊贵的李总使用找个房！！！欢迎尊贵的李总使用找个房！！！"
  />

  <van-grid :column-num="3">
    <van-grid-item icon="user" text="找房东"  @click="jump"/>
    <van-grid-item icon="wap-home" text="找小区" />
    <van-grid-item icon="map-marked" text="找地铁" />
    <van-grid-item icon="gold-coin" text="找价位" />
    <van-grid-item icon="newspaper" text="找户型" />
    <van-grid-item icon="friends" text="找中介" />
  </van-grid>

   <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><van-image
          width="390"
          height="150"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        /></van-swipe-item>
        <van-swipe-item><van-image
          width="390"
          height="150"
          src="https://house-agents.oss-cn-beijing.aliyuncs.com/1735326712989818896/2023/12/23/1703324407264_8e7853.jpg"
        /></van-swipe-item>
        <van-swipe-item><van-image
          width="390"
          height="150"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        /></van-swipe-item>
        <van-swipe-item><van-image
          width="390"
          height="150"
          src="https://house-agents.oss-cn-beijing.aliyuncs.com/1735326712989818896/2023/12/23/1703324407264_8e7853.jpg"
        /></van-swipe-item>
      </van-swipe> -->
  
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <!-- :title="item" -->
      <van-cell v-for="item in list" :key="item.id"  >
          <div @click="openDetail(item)"><van-card 
                num="2"
                tag="特价"
                price="2000.00"
                :desc="item.remark"
                :title="item.community"
                :thumb="thumb(item)"
                origin-price="2800.00"
              /></div>
      </van-cell>
        <div class="" style="position: fixed;bottom: 100px;left: 70%;" @click="groundingHouse()">
          <van-button type="primary" style="width: 70px;height: 70px;border-radius: 50%;font-size: 30px;">
            <h1>+</h1>
          </van-button>
        </div>
    </van-list>

  <!-- <van-tabbar route>
    <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
    <van-tabbar-item icon="search" to='/search'>房源</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='/Recharge'>充值</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to='/my'>我的</van-tabbar-item>
  </van-tabbar> -->


  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { getHouseList } from '../api/house'

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
      imgUrl:'../static/1.jpg',
      defaultThumb:'https://house-agents.oss-cn-beijing.aliyuncs.com/1735326712989818896/2023/12/23/1703324407264_8e7853.jpg'
    };
  },
  computed:{
    thumb(){
      return function(item){
					if(item.houseAttachment && item.houseAttachment[0] && item.houseAttachment[0].url){
            return item.houseAttachment[0].url
          }else{
            return this.defaultThumb
          }
      }
    }
  },
  mounted(){
      
  },
  methods: {
    jump(){
      this.$router.push({ name:'Search' ,query:{ type:'landlord' }})
    },
    groundingHouse(){
      console.log('上架')
      this.$router.push({ name:'Grounding'})
    },
    openDetail(item){
      console.log(item,'item')
      this.$router.push({ name:'Detail', query:{ id:item.id } })
    },
    async onLoad() {
      const page  = {pageNum:0,pageSize:10}
      const res = await getHouseList({},page)
      console.log('res',res)
      console.log('res.data.data.items',res.data.data.items.records)
      this.list = res.data.data.items.records
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {

      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
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


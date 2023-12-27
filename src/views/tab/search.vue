<template>
  <div>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>

    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <van-cell v-for="item in list" :key="item.id"  >
      <div @click="openDetail(item)"><van-card 
            num="2"
            price="2000.00"
            :desc="item.remark"
            :title="item.community"
            :thumb="thumb(item)"
            origin-price="2800.00"
          /></div>
  </van-cell>
</van-list>
  </div>
</template>

<script>
import { getHouseList } from '../../api/house'
export default {
    data() {
        return {
            list: [],
            loading: false,
            value1: 0,
            value2: 'a',
            value3: 'a',
            value4: 'a',
            finished: false,
            defaultThumb:'https://house-agents.oss-cn-beijing.aliyuncs.com/1735326712989818896/2023/12/23/1703324407264_8e7853.jpg',
            option1: [
                { text: '区域', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '租金', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
            option3: [
                { text: '户型', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
            option4: [
                { text: '筛选', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],

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
    methods: {
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

<style>

</style>
<template>
  <div>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" ref="item">
            <van-tree-select
                :items="items"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
                />
        </van-dropdown-item>
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" ref="item">
            <van-cell center title="包邮">
            <template #right-icon>
                <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template>
            </van-cell>
            <van-cell center title="团购">
            <template #right-icon>
                <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template>
            </van-cell>
            <div style="padding: 5px 16px;">
            <van-button type="danger" block round @click="onConfirm">
                确认
            </van-button>
            </div>
        </van-dropdown-item>
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
            activeId: 1,
            activeIndex: 0,
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
                { text: '高行', value: 1 },
                { text: '高桥', value: 2 },
                { text: '凌桥', value: 3 },
            ],
            option2: [
                { text: '租金', value: 'a' },
                { text: '不限', value: 'b' },
                { text: '<=1000', value: 'c' },
                { text: '1000-1500', value: 'c' },
                { text: '1500-2000', value: 'c' },
                { text: '2000-3000', value: 'c' },
                { text: '3000-5000', value: 'c' },
                { text: '>=5000', value: 'c' },
            ],
            option3: [
                { text: '户型', value: 'a' },
                { text: '单间', value: 'b' },
                { text: '一室户', value: 'c' },
            ],
            option4: [
                { text: '筛选', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
            items: [
                    {
                        // 导航名称
                        text: '所有城市',
                        // 导航名称右上角徽标，2.5.6 版本开始支持
                        badge: 3,
                        // 是否在导航名称右上角显示小红点
                        dot: true,
                        // 导航节点额外类名
                        className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                        {
                            // 名称
                            text: '温州',
                            // id，作为匹配选中状态的标识符
                            id: 1,
                            // 禁用选项
                            disabled: true,
                        },
                        {
                            text: '杭州',
                            id: 2,
                        },
                        ],
                    },
                    ]

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
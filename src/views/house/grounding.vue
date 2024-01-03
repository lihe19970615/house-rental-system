<template>
  <div>
    <van-form @submit="onSubmit">
        <van-field
            v-model="community"
            name="community"
            label="小区"
            placeholder="小区"
            :rules="[{ required: true, message: '请填写小区' }]"
        />

        <van-field
            v-model="building"
            name="building"
            label="楼栋"
            placeholder="楼栋"
            :rules="[{ required: true, message: '请填写具体楼栋' }]"
        />

        <van-field
            v-model="roomNumber"
            name="roomNumber"
            label="房间号"
            placeholder="房间号"
            :rules="[{ required: true, message: '请填写房间号' }]"
        />

        <van-field
            readonly
            clickable
            name="picker"
            :value="value"
            label="朝向"
            placeholder="点击选择朝向"
            @click="showPicker = true"
            />
        <van-popup v-model="showPicker" v-if="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="orientation"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>


        <van-field
            readonly
            clickable
            name="picker"
            :value="value"
            label="户型"
            placeholder="点击选择户型"
            @click="showPicker = true"
            />
        <van-popup v-model="showPicker" v-if="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="roomType"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>



        <van-field v-model="rent" name="rent" type="digit" label="租金">
        </van-field>

        <van-field name="stepper" label="合租户数">
            <template #input>
                <van-stepper v-model="stepper" />
            </template>
        </van-field>
       
        <van-field name="radio" label="钥匙类型" right-icon="lock">
            <template #input>
                <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1" value @click="chooseKey()">密码锁</van-radio>
                <van-radio name="2" @click="chooseKey()">钥匙</van-radio>
                </van-radio-group>
            </template>
        </van-field>

        <van-field name="radio" label="钥匙位置" v-if="this.radio === '2'">
            <template #input>
                <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1" value @click="chooseKey()">水表箱</van-radio>
                <van-radio name="2" @click="chooseKey()">电表箱</van-radio>
                <van-radio name="3" @click="chooseKey()">消防箱</van-radio>
                </van-radio-group>
            </template>
        </van-field>

        <van-field
            readonly
            clickable
            :value="value"
            name="radio" 
            label="门锁密码"
            placeholder="请填写门锁密码"
            @touchstart.native.stop="show = true"
            v-if="this.radio === '1'"
            />
            <van-number-keyboard
                v-model="value"
                :show="show"
                @blur="show = false"
            />

        <van-field name="uploader" label="房源图">
            <template #input>
                <van-uploader v-model="uploader" :after-read="afterRead" />
            </template>
        </van-field>


        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">新增</van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
import { groundingHouse } from '../../api/house'
import { formatterTime } from '@/utils/util.js';
import { orientation ,roomType} from '@/assets/dict'; 
import { Toast } from 'vant';
export default {
    data() {
        return {
            community: '',
            building: '',
            roomNumber: '',
            password: '',
            uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
            value: '',
            orientation: orientation,
            roomType: roomType,
            showPicker: false,
            radio: '1',
            keyLocation: '',
            show: false,
            value: '',
            stepper: 1,
            rent: 0,

        };
    },
    methods: {
        async onSubmit(values) {
            console.log('submit', values);
            const createTime = formatterTime(Date.now())
            console.log('createTime', createTime);
            const house = {
                "community": "",
                "createTime": "",
                "deleted": true,
                "houseAttachment": [
                    {
                        "createTime": "",
                        "deleted": true,
                        "description": "",
                        "houseId": 0,
                        "id": 0,
                        "imageName": "",
                        "updateTime": "",
                        "url": "",
                        "userId": 0,
                        "username": ""
                    }
                ],
                "id": 0,
                "keyOrPassword": "",
                "landlordName": "",
                "orientation": "",
                "remark": "",
                "rent": 0,
                "roomNumber": "",
                "subway": "",
                "updateTime": "",
                "userId": 0
            }
            const res = await groundingHouse(house)
            console.log('res',res)
            if(res.data.code == 200) {
                this.$router.push({ name:'Login' })
            }else{
                Toast(`${res.data.message}`);
            }
        },
        chooseKey(){
            console.log(this.radio)
            if(this.radio === '1'){ 
                
            }if(this.radio === '2'){

            } 
        },

        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);

        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
    },
}
</script>

<style>
    .van-field__label {
        font-weight: 800;
    }

    .unit {
        position: absolute;
        top: 4rem;
        right: 1rem;
        font-size: 1.2rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
    }
</style>
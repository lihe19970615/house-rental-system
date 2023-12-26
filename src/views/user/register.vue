<template>
    <div>
        <van-nav-bar title="用户注册"/>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="确认密码"
                placeholder="确认密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="手机号码"
                placeholder="手机号码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />

            <!-- <van-field
                v-model="password"
                type="password"
                name="密码"
                label="手机号码"
                placeholder="手机号码"
                :rules="[{ required: true, message: '请填写密码' }]"
            /> -->

            <van-field
                readonly
                clickable
                name="picker"
                :value="value"
                label="选择器"
                placeholder="点击选择城市"
                @click="showPicker = true"
                />
                <van-popup v-model="showPicker" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
                </van-popup>

            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
        
        <router-link to="/login"><div>已经有账号,去登录</div></router-link>
        
    </div>
  
</template>

<script>
import { register} from '../../api/user'
import { Toast } from 'vant';
export default {
    data() {
        return {
            username: '',
            password: '',
            value: '',
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            showPicker: false,
        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
            console.log('register',register)
            register({username: this.username,
            password: this.password}).then(res=>console.log('res',res))
        },
        onConfirm(value, index) {
            Toast(`当前值：${value}, 当前索引：${index}`);
            },
        onChange(picker, value, index) {
            Toast(`当前值：${value}, 当前索引：${index}`);
        },
        onCancel() {
            Toast('取消');
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
    },
}
</script>

<style>

</style>
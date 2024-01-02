<template>
    <div>
        <van-nav-bar title="用户注册"/>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="confirm_password"
                type="password"
                name="confirm_password"
                label="确认密码"
                placeholder="确认密码"
                @blur="confirmPassword"
                :rules="[{ required: true, message: '请确认两次输入密码一致' }]"
            />
            <van-field
                v-model="phone"
                type="number"
                name="phone"
                label="手机号码"
                placeholder="手机号码"
                :rules="[{ required: true, message: '请填写手机号码' }]"
            />

            <van-field
                readonly
                clickable
                name="role"
                :value="value"
                label="身份"
                placeholder="点击选择身份"
                @click="showPicker = true"
                />
                <van-popup v-model="showPicker" v-if="showPicker" position="bottom">
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
            confirm_password:'',
            phone:'',
            value: '',
            columns: ['房东', '经纪人', '客户', '管理员'],
            showPicker: false,
        };
    },
    methods: {
        async onSubmit(values) {
            console.log('submit', values);
            const res = await register({username: this.username,password: this.password})
            if(res.data.code == 200) {
                this.$router.push({ name:'Login' })
            }else{
                Toast(`${res.data.message}`);
            }
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
        confirmPassword(){
            if(this.confirm_password !== this.password){
                Toast('请确认两次输入密码一致');
            }
        }
    },
}
</script>

<style>

</style>
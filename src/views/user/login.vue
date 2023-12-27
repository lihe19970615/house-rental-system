<template>
    <div>
        <van-nav-bar title="用户登录"/>
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
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
        
        <router-link to="/register"><div>注册账号</div></router-link>
    </div>
</template>

<script>
import { login} from '../../api/user'
import { Toast } from 'vant';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async onSubmit(values) {
            console.log('submit', values);
            const res = await login({username: this.username,password: this.password})
            if(res.data.code == 200) {
                this.$router.push({ name:'Home' })
            }else{
                Toast(`${res.data.message}`);
            }
        },
    },

}
</script>

<style>

</style>
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
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
        
        <router-link to="/login"><div>已经有账号,去登录</div></router-link>
        
    </div>
  
</template>

<script>
import { register} from '../../api/user'
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
            console.log('register',register)
            register({username: this.username,
            password: this.password}).then(res=>console.log('res',res))
        },
    },
}
</script>

<style>

</style>
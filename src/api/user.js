import axios from "axios";
import request from '../utils/request' 

//用户注册
export function register(user){
    request.post('/admin/user/save',user)
}

//用户登录
export function login(user){
    request.post('/admin/user/save',user)
}
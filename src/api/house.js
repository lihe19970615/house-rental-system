import axios from "axios";
import request from '../utils/request' 

//用户注册
export function getHouseList(houseSearchVo,page){
    return request.post(`/admin/house/${page.pageNum}/${page.pageSize}`,houseSearchVo)
}

//用户登录
export function login(user){
    return request.post('/admin/user/login',user)
}
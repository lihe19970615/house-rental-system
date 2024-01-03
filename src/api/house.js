import axios from "axios";
import request from '../utils/request' 

//查询房源列表
export function getHouseList(houseSearchVo,page){
    return request.post(`/admin/house/${page.pageNum}/${page.pageSize}`,houseSearchVo)
}

//查询单个房源列表
export function getHouseDetail(houseId){
    return request.post(`/admin/house/${houseId.houseId}`)
}

//上架房子
export function groundingHouse(house){
    return request.post(`/admin/house`)
}
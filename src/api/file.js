import axios from "axios";
import request from '../utils/request' 

//文件上传
export function upload(){
    return request.post(`/api/oss/upload`)
}
import {request} from "../../network/axios";
export function getHomeMultidata(){
    request({
        url:"/home/multidata"
    }).then(res => {
        return res
    })
}
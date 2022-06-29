import service from "@/server";

//获取轮播图数据
export function getBanner() {
    return service({
        method: 'GET', url: '/banner?type=2',
    })
}
//获取推荐歌单
export function  getPlaylist() {
    return service({
        method: 'GET', url: '/top/playlist?limit=20',
    })
}

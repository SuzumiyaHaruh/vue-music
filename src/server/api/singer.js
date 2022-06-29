import service from "@/server";

//获取歌手
export function getSinger() {
    return service({
        method: 'GET', url: '/artist/list?cat=6003',
    })
}
//获取歌手热门歌曲
export function getSingerList(id) {
    return service({
        method: 'GET', url: `/artist/top/song?id=${id}`,
    })
}

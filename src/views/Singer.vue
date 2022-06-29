<template>
  <div class="singer">
    <index-list
        :singers="singers"
        @select="selectSinger"
        v-loading="loading"
    ></index-list>
    <router-view  v-slot="{Component}">
      <transition name="slide">
        <component :is="Component" :singer="selectedSinger"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import {getSinger} from "@/server/api/singer";
import IndexList from "@/components/base/Index-List/Index-List";
import storage from "good-storage"
import {SINGER_KEY} from "@/assets/js/constant";
export default {
  name: `Singer`,
  components: {IndexList},
  data() {
    return {
      singers: [],
      selectedSinger: null
    }
  },
  computed:{
    loading(){
      return  !this.singers.length
    }
  },
  methods:{
    selectSinger(singer){
      this.selectedSinger = singer
      this.cacheSinger(singer)
      // console.log(this.selectedSinger)
      //跳转路由
      this.$router.push({
        path: `/singer/${singer.id}`
      })

    },
    cacheSinger(singer){
      storage.session.set(SINGER_KEY,singer)
    }
  },
  async created() {
    // 获取歌手
    let resSingers = await getSinger()
    this.singers = resSingers.data.artists
  },
}
</script>

<style scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>

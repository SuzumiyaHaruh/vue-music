<template>
  <div class="singer-detail">
    <music-list
        :songs="songs"
        :pic="pic"
        :title="title"
        :loading="loading"
    ></music-list>
  </div>
</template>

<script>
// import {getSingerList} from "@/server/api/singer";

import {getSingerList} from "@/server/api/singer";
import MusicList from "@/components/base/Music-list/Music-list";
import storage from "good-storage"
import {SINGER_KEY} from "@/assets/js/constant";

export default {
  name: "Singer-detail",
  components: {MusicList},
  props: {
    singer: Object
  },
  data() {
    return {
      songs: [],
    }
  },
  computed: {
    computedSinger() {
      let ret = null
      let singer = this.singer
      if (singer) {
        ret = singer
      } else {
        let cacheSinger = storage.session.get(SINGER_KEY)
        if (cacheSinger&&cacheSinger.id==this.$route.params.id) {
          ret = cacheSinger
        }
      }
      return ret
    },
    pic() {
      let singer=this.computedSinger
      console.log(singer)
      return singer && singer.picUrl;
    },
    title() {
      let singer=this.computedSinger
      return singer && singer.name;
    },
    loading() {
      return !this.songs.length
    }
  },
  async created() {
    let resSingerList = await getSingerList(this.computedSinger.id)
    this.songs = resSingerList.data.songs
    console.log(this.songs)
  }
}
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>

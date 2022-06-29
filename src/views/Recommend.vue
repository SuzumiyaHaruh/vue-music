<template>
  <div class="recommend" v-loading="loading">
    <Scroll class="recommend-content" >
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <Slider v-if="sliders.length" :sliders="sliders"></Slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li
                v-for="item in playlist"
                class="item"
                :key="item.id"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.coverImgUrl" :key="item.coverImgUrl">
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.name }}
                </h2>
                <p class="title">
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>
<script>
import {getBanner, getPlaylist} from "@/server/api/recommend";
import Slider from "@/components/base/Slider/Slider";
import Scroll from "@/components/base/Scroll/Scroll";

export default {
  name: `Recommend`,
  data() {
    return {
      sliders: [],
      playlist: []
    }
  },
  computed:{
    loading(){
      return  !this.sliders.length&&!this.playlist.length
    }
  },

  components: {Slider, Scroll},
  async created() {
    let resBanner = await getBanner()
    this.sliders = resBanner.data.banners
    let resPlaylist = await getPlaylist()
    this.playlist = resPlaylist.data.playlists
    // console.log(this.playlist)
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;

      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
          img{
            border-radius: 15px;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }

        .name {
          margin-bottom: 10px;
          color: $color-text;
        }

        .title {
          color: $color-text-d;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>

<template>
  <Scroll class="index-list">
    <ul>
      <li
          v-for="item in singers"
          :key="item.id"
          class="item"
          @click="onItemClick(item)"
      >
        <img class="avatar" v-lazy="item.img1v1Url">
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
  </Scroll>
</template>

<script>
import Scroll from "@/components/base/Scroll/Scroll";

export default {
  name: "Index-List",
  components: {Scroll},
  emits: ['select'],
  props: {
    singers: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props, {emit}) {
    function onItemClick(item) {
      emit('select', item)
    }

    return {
      onItemClick
    }
  }
}
</script>

<style lang="scss" scoped>
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;

  .item {
    display: flex;
    align-items: center;
    padding: 20px 0 0 30px;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 15px;
    }

    .name {
      margin-left: 20px;
      color: $color-text-l;
      font-size: $font-size-medium;
    }
  }

}
</style>

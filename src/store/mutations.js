const mutations = {
  //设置播放状态
  setPlayingState(state, playing) {
    state.playing = playing
  },
  //设置序列表
  setSequenceList(state, list) {
    state.sequenceList = list
  },
  //设置播放列表
  setPlaylist(state, list) {
    state.playlist = list
  },
  //设置播放模式
  setPlayMode(state, mode) {
    state.playMode = mode
  },
  //设置当前索引
  setCurrentIndex(state, index) {
    state.currentIndex = index
  },
  //设置全屏
  setFullScreen(state, fullScreen) {
    state.fullScreen = fullScreen
  }
}

export default mutations

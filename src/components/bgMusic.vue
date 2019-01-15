<template>
  <div class="bgMusic">
    <div class="controls" @click="play" ref="contorls"></div>
      <!-- <audio src="../static/audios/donggan.mp3" 
        loop
        ref="audio"
        style="display:none">
      </audio> -->
       <audio ref="audio"
        :src="bgMusic" 
        loop>
      </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      bgMusic: '../static/audios/donggan.mp3'
    }
  },
  mounted() {
    this.$refs.contorls.style.animationPlayState = 'paused'
  },
  methods: {
    //控制背景音乐播放
    play(){
      let audio = this.$refs.audio
      if(!this.isPlaying){
        audio.play();
        this.$refs.contorls.style.animationPlayState = 'running'
        this.isPlaying = !this.isPlaying;
      }else {
        audio.pause();
        this.$refs.contorls.style.animationPlayState = 'paused'
        this.isPlaying = !this.isPlaying;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.bgMusic {
  position: relative;
  .controls {
    color:#fff;
    background: url(../assets/image/music.png) no-repeat center;
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
    animation: move 5s infinite linear;
  }
  audio{
    display: none
  }
  @keyframes move {
    0%{
      transform:rotate(0)
    }
    100%{
      transform:rotate(360deg)
    }
  }
}
</style>

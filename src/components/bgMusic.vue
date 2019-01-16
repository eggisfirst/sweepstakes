<template>
  <div class="bgMusic">
    <div class="controls" @click="play" ref="contorls"></div>
       <audio ref="audio"
        :src="bgMusic" 
        preload="auto"
        loop>
      </audio>
  </div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      isPlaying: false,
      bgMusic: 'https://derucci.net/web/2019eveningParty/media/choujiang1.mp3',
      isAutoPlay: false,
      key: true,
      currentTime: ''
    }
  },
  computed: {
    ...mapState({
      awardName: state => state.awardName.awardName,
      awardContent: state => state.lock.awardContent,
      awardPerson: state => state.lock.awardPerson
    })
  },
  watch: {
    awardContent() {
      this.bgMusic = 'https://derucci.net/web/2019eveningParty/media/begin.mp3'
    },
    awardName() {
      if(this.awardName) {
        this.autoPlay()
      }
    },
    awardPerson() {
      if(this.awardPerson) {
        this.bgMusic = 'https://derucci.net/web/2019eveningParty/media/success.mp3'
      }
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
        if(this.key) {
          audio.currentTime = '18'
          this.key = false
        }
        audio.play();
        audio.autoplay = true
        this.$refs.contorls.style.animationPlayState = 'running'
        this.isPlaying = !this.isPlaying;
      }else {
        audio.pause();
        this.$refs.contorls.style.animationPlayState = 'paused'
        this.isPlaying = !this.isPlaying;
      }
    },
    autoPlay() {
      let audio = this.$refs.audio
      this.bgMusic = 'https://derucci.net/web/2019eveningParty/media/begin.mp3'
      // this.$refs.contorls.style.display = 'none'
    }
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
    opacity: 0.4;
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

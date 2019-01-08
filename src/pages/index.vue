<template>
  <div class="home">
    <div class="title">
      <img src="../assets/image/topBar.png" alt="">
    </div>
    <bg-start/>
    <div class="viaContainer" v-show="Lottery">
      <ViaAnimation/>
    </div>
    <div class="content" v-show="content">
      <begin-page/>
    </div>
    <div class="clean_components" v-show="false">
      <clean-data/>
    </div>
    <div class="footer" v-show="Lottery">
      <span>按空格键停止</span>
    </div>  
  </div>
</template>

<script>
import BgStart from '../components/bgStart'
import ViaAnimation from '../components/viaAnimation'
import BeginPage from '../components/beginPage'
import CleanData from '../components/cleanData'

export default {
  components: { BgStart, ViaAnimation, BeginPage, CleanData },
  data () {
    return {
      Lottery: true,
      content: false
    }
  },
  computed: {
   
  },
  created() {
    this.stopLottery()
  },
  methods: {
    //停止抽奖
    stopLottery() {
      document.onkeydown = (e) => {
        let _key = window.event.keyCode;
        if(_key === 32){
          this.Lottery = false
          this.content = true
        }
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url('../assets/image/bgTop.png') no-repeat center;
  background-size: 100% 100%;
  .title {
    width: 558px;
    margin: 0 auto;
    margin-top: 27px;
    img {
      height: 129px;
    }
  }
  .viaContainer {
    margin: auto;
    width: 500px;
    height: 500px;
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -350px;
  }
  .content {
    width: 68%;
    height: 67.2%;
    margin: auto;
    margin-top: 9px;
  }
  .clean_components {
    position: absolute;
    bottom: 17%;
    right: 6%;
  }
  .footer {
    position: fixed;
    bottom: 20px;
    left: 50%;
    color: #6f6f6f;
    opacity: .5;
    font-size: 24px;
    // width: 152px;
    text-align: center;
    margin-left: -75px; 
  }
}

</style>


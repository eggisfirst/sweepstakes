<template>
  <div class="home">
    <div class="title">
      <img src="../assets/image/topBar.png" alt="">
    </div>
    <bg-start/>
    <div class="viaContainer" v-show="Lottery">
      <ViaAnimation/>
    </div>
    <transition 
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutRight"
      >
      <!-- <transition
      v-bind:css="false"
      v-on:before-enter="contBeforeEnter"
      v-on:enter="contEnter"
      v-on:leave="contLeave"> -->
      <div class="content" v-show="content">
        <begin-page/>
      </div>
    </transition>
    <transition 
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      >
      <div class="award_person" v-show="award_person">
        <award-person/>
      </div>
    </transition>
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
import AwardPerson from '../components/awardPerson'
import Vuex,{ mapMutations, mapState } from 'vuex'
import SockJS from  'sockjs-client';
import  Stomp from 'stompjs';
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
import animation from 'animate.css'
import  Velocity from 'velocity-animate'
import {awardBeforeEnter, awardEnter, awardLeave} from '../utils/my-animation'
// import {contentBeforeEnter, contentEnter, contentLeave} from '../utils/my-animation'
export default {
  components: { BgStart, ViaAnimation, BeginPage, CleanData, AwardPerson },
  data () {
    return {
      Lottery: false,
      content: true,
      award_person: false,
      stompClient: '',
      award: ''
    }
  },
  computed: {
    ...mapState({
      awardName: state => state.awardName.awardName
    })
  },
  mounted() {
    // this.stopLottery()
    // this.initWebSocket()
    this._getData()
  },
  methods: {
    ...mapMutations(['setAwardName']),
    _getData() {
      indexModel.getTitleList().then(res => {
        this.setAwardName(res.data)
      })
    },
    // initwebsocket
    initWebSocket() {
      if(this.stompClient.connected !== true) {
        this.connection()
      }
    },
    connection() {
      let sock = new SockJS("http://10.11.8.207/endpointChat");
      this.stompClient = Stomp.over(sock);
      this.stompClient.connect({}, () => {
        this.stompClient.subscribe('/topic/lottery/prize', (res) => {
          if(res.body) {
            this.award = JSON.parse(res.body)
            console.log(this.award)
          }
        });
      });
    },
    //停止抽奖
    stopLottery() {
      document.onkeydown = (e) => {
        let _key = window.event.keyCode;
        if(_key === 32){
          this.Lottery = false
          this.award_person = true
          
          setTimeout(() => {
            this.award_person = false
          }, 4000);
           setTimeout(() => {
            this.content = true
          }, 5000);
        }
      }
    },
    beforeEnter(el) {
      awardBeforeEnter(el)
    },
    enter(el, done) {
      awardEnter(el, done)
    },
    leave(el, done) {
      awardLeave(el, done)
    },
    // contBeforeEnter(el) {
    //   contentBeforeEnter(el)
    // },
    // contEnter(el, done) {
    //   contentEnter(el, done)
    // },
    // contLeave(el, done) {
    //   contentLeave(el, done)
    // }
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
  
  .award_person{
    width: 68%;
    // border: 1px solid red;
    // height: 67.2%;
    margin: auto;
    margin-top: 6vw;
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


<template>
  <div class="container">
    <div class="bubble-wrap">
      <!-- <div 
        v-for="(item, index) in imgArr" :key="index"  
        class="bubble"
        :style="{'backgroundImage': `url(${item.headPortrait})`}">
      </div> -->
      
        <div 
          v-for="(item, index) in imgArr" :key="index"  
          class="bubble"
          style='color: #fff'>
          {{ item.name }}
        </div>
    </div>
</div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
import {IndexModel} from '../utils/index'
import animation from 'animate.css'
const indexModel = new IndexModel()


export default {
  data() {
    return {
      img: [],
      key: true,
      imgArr: []
    }
  },
  computed: {
    ...mapState({
      awardName: state => state.awardName.awardName
    })
  },
  watch: {
    awardName() {
      if(this.awardName) {
        if(this.key) {
          this.getAllUser()
        }
      }
    }
  },
  created() {
    // this._getData()
    // this.getAwards()
    this.getAllUser()
  },
  methods: {
    //获取抽奖用户列表
    getAllUser() {
      if(this.awardName.lotteryId) {
        let id = this.awardName.lotteryId
        indexModel.getAllUser(id).then(res => {
          this.img = res.users
          this.getSomeData()
          console.log(this.imgArr)
          this.key = false
        })
      }
    },
    getSomeData() {
      this.img.forEach((item,index) => {
        if(index < 201) {
          this.imgArr.push(item)
        }
      });
    }

  }
}
</script>

<style lang="scss" scoped>
html, body {
  height: 100%;
  overflow: hidden;
}
body {
  min-height: 100%;
  overflow: hidden;
}

@keyframes move {
  10%{
    opacity: 0.8;
  }
  20%{
    opacity: 0.1;
  }
  25%{
    opacity: 0;
  }
  100% {
    color: #000;
    transform: translate3d(-450px, -50px, 2000px);
  }
}
.container {
  position: relative;
  width: 100%;
  min-height: 100%;
  transform-style: preserve-3d;
  
}
.bubble-wrap {
  margin: auto;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform-origin: center center;
  perspective: 660px;
}
.bubble {
   position: absolute;
  opacity: 1;
  // border-radius: 50%;
  animation: move 8s infinite;
}

@for $i from 1 through 200 {
  .bubble:nth-child(#{$i}){
     $size: random(100)+px;
     font-size: 1vw;
     height: $size;
     width: $size;
     animation-delay: -$i * .2s ;
     transform: translate3d( (random(400) * 1px),  (random(200) * 1px), (random(100) * 1px));
    //  background: hsl( random(360) , 70%, 50%);
     background-size: contain;
     background-position: center;
     background-repeat: no-repeat;
  }
 
}
// @keyframes move {
//   0%{
//     opacity: 1;
//   }
//   50%{
//     opacity: 0.8;
//   }
//   100%{
//     opacity: 0;
//   }
// }

</style>


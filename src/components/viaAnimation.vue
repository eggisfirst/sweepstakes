<template>
  <div class="container">
    <div class="bubble-wrap">
      <div 
        v-for="(item, index) in img" :key="index"  
        class="bubble"
        :style="{'backgroundImage': `url(${item.headPortrait})`}"></div>
    </div>
</div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()


export default {
  data() {
    return {
      img: []
    }
  },
  computed: {
    ...mapState({
      awardName: state => state.awardName.awardName
    })
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
          console.log(123,res)
        })
      }
      indexModel.getMockAllUser(1).then(res => {
        this.img = res.data
      })
    }

  }
}
</script>

<style lang="scss" scoped>
html, body {
  height: 100%;
}
body {
  // background: black;
  min-height: 100%;
  overflow: hidden;
}

@keyframes move {
  100% {
    transform: translate3d(-100px, -50px, 1000px);
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
  width: 30px;
  height: 30px;
  transform-style: preserve-3d;
  transform-origin: center center;
  perspective: 600px;
}
.bubble {
  position: absolute;
  opacity: 1;
  border-radius: 50%;
  animation: move 3s infinite;
  // border: 1px solid #e28902;
}

@for $i from 1 through 500 {
  .bubble:nth-child(#{$i}){
     $size: random(25)+px;
     height: $size;
     width: $size;
     animation-delay: -$i * .2s;
     transform: translate3d( (random(200) * 1px),  (random(200) * 1px), (random(400) * 1px));
    //  background: hsl( random(360) , 70%, 50%);
    //  background-image:url(../assets/image/icon1.jpeg); 
     background-size: 200% 200%;
     background-position: center;
     background-repeat: no-repeat;
  }
 
}

</style>


<template>
  <div class="container">
    <div class="bubble-wrap">
      <div 
        v-for="(item, index) in imgArr" :key="index"  
        class="bubble"
        :style="{'backgroundImage': `url(${item.headPortrait})`}">
      </div>
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
    // this.getAllUser()
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
        if(index < 101) {
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
  100% {
    transform: translate3d(-300px, -50px, 2000px);
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
  animation: move 2s infinite;
}

@for $i from 1 through 100 {
  .bubble:nth-child(#{$i}){
     $size: random(60)+px;
     height: $size;
     width: $size;
     animation-delay: -$i * .2s;
     transform: translate3d( (random(200) * 1px),  (random(100) * 1px), (random(200) * 1px));
    //  background: hsl( random(360) , 70%, 50%);
     background-size: contain;
     background-position: center;
     background-repeat: no-repeat;
  }
 
}

</style>


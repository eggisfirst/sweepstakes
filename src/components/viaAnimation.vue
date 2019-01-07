<template>
  <div class="container">
    <div class="bubble-wrap">
      <div 
        v-for="(item, index) in img" :key="index"  
        class="bubble"
        :style="{'backgroundImage': `url(${item})`}"></div>
    </div>
</div>
</template>

<script>
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
import axios from 'axios' 

export default {
  data() {
    return {
      img: []
    }
  },
  created() {
    this._getData()
  },
  methods: {
    _getData() {
      indexModel.getTitleList().then(res => {
        console.log(res.data)
        this.img = res.data.photos
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
    transform: translate3d(-100px, -100px, 1000px);
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
  width: 40px;
  height: 40px;
  transform-style: preserve-3d;
  transform-origin: center center;
  perspective: 600px;
}
.bubble {
  position: absolute;
  // background: black;
  opacity: .7;
  border-radius: 50%;
  animation: move 3s infinite;
  
}

@for $i from 1 through 100 {
  .bubble:nth-child(#{$i}){
     $size: random(30)+px;
     height: $size;
     width: $size;
     animation-delay: -$i * .1s;
     transform: translate3d( (random(200) * 1px),  (random(200) * 1px), (random(400) * 1px));
    //  background: hsl( random(360) , 70%, 50%);
    //  background-image:url(../assets/image/icon1.jpeg); 
     background-size: 100% 100%;
  }
 
}

</style>


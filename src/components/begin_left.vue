<template>
  <div class="left">
    <div class="left_top">
      <span class="awards">{{ list.award || '一等奖'}}</span>
      <span class="awards_number">({{ list.winNum || '3'}}名)</span>
      <p class="awards_name">{{ list.prize || 'iphone xs Max'}}</p>
    </div>
    <div class="left_content">
      <div class="left_content_bg">
        <img :src="`${ list.prizePicture }`" v-show="imgShow">
        <img src="../assets/image/award_photo.png" v-show="!imgShow">
      </div>
    </div>
    <div class="control_num">
      <button class="cut_down" @click="cutDown"></button>
      <span class="num_text">人数</span>
      <span class="num_bg">
        <input  class="num"
          type="number" 
          v-model="num">
        <!-- <div class="num">{{ num }}</div> -->
      </span>
      <button class="add" @click="add"></button>
    </div>
    <div class="begin_btn" @click="beginBtn"></div>
  </div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
import awardName from '../store/modules/awardName';
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel() 
import axios from 'axios' 

export default {
  computed: {
    ...mapState({
      awardName: state => state.awardName.awardName
    })
  },
  watch: {
    awardName() {
      this.list = this.awardName
    },
    num() {
      this.num = parseInt(this.num)
    }
  },
  data() {
    return {
      num: 1,
      imgShow: false,
      list: {}
    }
  },
  created() {
    if(this.awardName.prizePicture) {
      this.imgShow = true
    }
  },
  methods: {
    ...mapMutations(['setBeginLock', 'setAwardContent', 'setAwardList']),
    //抽奖人数选择
    add() {
      if(this.num < this.awardName.winNum) {
        this.num += 1 
      }
    },
    cutDown() {
      if(this.num > 1) {
        this.num -= 1
      }
    },
    //点击开始抽奖
    beginBtn() {
      let prizeId = this.awardName.id
      let drawNum = this.num
      if(drawNum > this.awardName.winNum) {
        alert('输入人数大于该奖项剩余名额')
      }else {
        this.setAwardContent(false)
        this.setBeginLock(true)
        indexModel.getDrawLottery(prizeId, drawNum).then(res => {
          console.log(111,res.data)
          this.setAwardList(res.data)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left{
  .left_top{
    padding-left: 48px;
    font-size: 36px;
    font-weight: bold;
    line-height: 40px;
    .awards{
      color: #fff;
    }
    .awards_number,.awards_name{
      color: #e4b54a;
    }
    .awards_name{
      font-size: 24px;
    }
  }
  .left_content{
    width: 85%;
    margin: auto;
    .left_content_bg{
      width: 250px;
      height: 250px;
      border-radius: 50%;
      margin: 0 auto;
      margin-top: 2vw;
      background-color: #e4b54a;
      text-align: center;
      img{
        width: 58%;
        margin-top: -2vw;
      }
    }
  }
  .control_num{
    width: 160px;
    margin: auto;
    margin-top: 2vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .cut_down,.add{
      width: 1.4vw;
      height: 1.4vw;
      cursor: pointer;
    }
    .cut_down{
      background: url(../assets/image/cut_down.png) no-repeat center;
      background-size: 100% 100%;
    }
    .add{
      background: url(../assets/image/add.png) no-repeat center;
      background-size: 100% 100%;
    }
    .num_text{
      font-size: 12px;
      color: #fff;
      opacity: .2;
    }
    .num_bg{
      width: 52px;
      height: 25px;
      background: url(../assets/image/num_icon.png) no-repeat center;
      background-size: 100% 100%;
      .num{
        text-align: center;
        line-height: 25px;
        color: #fff;
        opacity: 0.2;
        font-size: 22.5px;
        width: 100%;
        // margin: 0;
        // padding: 0
      }
    }
  }
  .begin_btn{
    width: 187.5px;
    height: 78px;
    background: url(../assets/image/begin_icon.png) no-repeat center;
    background-size: 100% 100%;
    margin: auto;
    margin-top: 2vw;
    cursor: pointer;
  }
}
</style>

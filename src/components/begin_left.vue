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
      this.prizeId = this.list.id
      this.allNum = this.list.winNum
      this.imgShow = true
    },
    num() {
      this.num = parseInt(this.num)
    }
  },
  data() {
    return {
      num: 1,
      imgShow: false,
      list: {},
      drawNum: 0,
      prizeId: '',
      allNum: 0
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
      if(this.num < this.allNum) {
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
      this.drawNum = this.num
      if(this.drawNum > this.allNum) {
        alert('输入人数大于该奖项剩余名额')
      }else {
        this.setAwardContent(false)
        this.setBeginLock(true)
        indexModel.getDrawLottery(this.prizeId, this.drawNum).then(res => {
          this.setAwardList(res.list)
          this.allNum = this.allNum - this.drawNum
          if(res.status === 0 ) {
            alert(res.msg)
          }
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

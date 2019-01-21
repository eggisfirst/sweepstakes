<template>
  <div class="right">
    <div class="right_top">
      <h1 class="top_text">获奖名单</h1>
      <div class="logo"></div>
    </div>
    <div class="right_content">
      <ul>
        <li 
          v-for="(item, index) in list" :key="index" 
            @mouseover="delete_show(index)"
            @mouseout="delete_hide(index)">
          <div class="content_photo">
            <p class="content_dept" >{{ item.dept }}</p>
            <p class="content_name" >{{ item.name }}</p>
            <p class="content_num" >{{ item.number }}</p>
          </div>
          <div class="delete_icon" 
            v-show="isShow === index? true : false"
            @click="deleteData(index)">
          </div>
        </li>
      </ul>
    </div>
    <div class="allLook" 
      v-show="showTurnPage"
      @click="showAllLook">全屏</div>
    <div class="control_page" v-show="showTurnPage">
      <turn-page :allPage='allPage' :page='changeNowPage'/>
    </div>
    <div class="empty_icon" @click="isEmptyShow"></div>
  </div>
</template>

<script>
import TurnPage from './turnPage'
import Vuex,{ mapMutations, mapState } from 'vuex'
import awardName from '../store/modules/awardName';
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
export default {
  components: { TurnPage },
  data() {
    return {
      isShow: -1,
      list: [],
      liWidth: '',
      fontSize: '',
      showTurnPage: false,
      allPage: 0,
      nowPage: 1,
      award: {},
      userIds: [],
      awardNoPhoto: '/static/image/awardNoPhoto.jpeg'
    }
  },
  computed: {
    ...mapState({
      awardList: state => state.awardList.awardList,
      awardName: state => state.awardName.awardName,
      awardContent: state => state.lock.awardContent,
      beginLock: state => state.lock.beginLock
    })
  },
  watch: {
    //奖项改变
    awardName() {
      this.setAwardList([])
      this.award = this.awardName
    },
    //开始抽奖
    beginLock() {
      if(this.beginLock) {
        this.list = []
      }
    },
    //翻页
    nowPage() {
      if(this.list.length > 0) {
        this.setData()
      }
    },
    //中奖列表
    awardList() {
      if(this.awardList) {
        if(this.awardList.length > 0) {
          this.setData()
          this.nowPage = 1
        }
        if(this.awardList.length === 1) {
          this.liWidth = '35%'
          this.fontSize = '28px'
        }else if(this.awardList.length === 3){
          this.liWidth = '28%'
          this.fontSize = '24px'
        }else if(this.awardList.length >3 && this.awardList.length <= 15){
          this.liWidth = '17%'
          this.fontSize = '14px'
        }else if(this.awardList.length > 15) {
          this.liWidth = '17%'
          this.fontSize = '14px'
        }else if(this.awardList.length === 0) {
          this.list = []
          this.showTurnPage = false
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setAwardList', 'setEmptyShow', 'setDeleteNum', 'setAwardPerson', 'setAwardContent']),
    //删除图标的显示隐藏
    delete_show(index) {
      this.isShow = index
    },
    delete_hide(index) {
      this.isShow = -1
    },
    //清空数据
    isEmptyShow() {
      this.setEmptyShow(true)
    },
    //处理翻页数据
    setData() {
      this.allPage = Math.ceil((this.awardList.length)/10)
      if(this.allPage > 1) {
        this.showTurnPage = true
        if(this.nowPage >= 1 && this.nowPage < this.allPage){
          let leftSide = (this.nowPage - 1)* 10 
          let rightSide = leftSide + 10
          this.list = this.awardList.slice(leftSide,rightSide)
        }
        else if(this.nowPage > 1 && this.nowPage == this.allPage) {
          let left_side = (this.nowPage - 1)* 10 + 1
          let right_side = this.awardList.length
          this.list = this.awardList.slice(left_side,right_side)
        }
      }else{
        this.list = this.awardList
      }
    },
    //删除数据
    deleteData(index) {
      let prizeId = this.award.id
      this.userIds[0] = this.awardList[index].id
      this.awardList.splice(index, 1)
      indexModel.deleteLottery(prizeId, this.userIds)
      .then(res => {
        this.setDeleteNum(1)
      })
    },
    //更改当前页面
    changeNowPage(value) {
      this.nowPage = value
    },
    //全屏
    showAllLook() {
      this.setAwardPerson(false)
      this.setAwardContent(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.right{
  margin-left: 36px;
  position: relative;
  height: 100%;
  .right_top{
    position: relative;
    .top_text{
      line-height: 40px;
      color: #fff;
      font-weight: bold;
      font-size: 36px;
    }
    .logo{
      width: 52.5px;
      height: 36px; 
      background: url(../assets/image/logo.png) no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      top: -50%;
      right: 10%;
    }
  }
  .right_content{
    ul{
      width: 85%;
      margin-top: 1.6vw;
      li:nth-child(odd){
        .content_photo {
          background-color:rgba(228, 181, 74, 0.1);
        }
      }
      li{
        width: 100%;
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
        .content_photo{
          box-sizing: border-box;
          padding: 0 1vw;
          width: 92%;
          display: flex;
          justify-content: space-between;

          :nth-child(1) {
            flex: 0.5;
          }
          :nth-child(2) {
            flex: 0.3
          }
          :nth-child(3) {
            flex: 0.25
            
          }
          .content_name, .content_num, .content_dept{
            font-size: 18px;
            color: #ffa926;
            // line-height: calc(fontSize);
          }
          }
         .delete_icon{
            background: url(../assets/image/delete_icon.png) no-repeat center;
            background-size: 100% 100%;
            width: 20px;
            height: 20px;
            margin-top: 5px;
            cursor: pointer;
          }
      }
    }
  }
  .allLook {
    position: absolute;
    left: 0;
    bottom: 5.6%;
    width: 76px;
    height: 30px;
    background-color: rgba(60, 60, 60, 0.5);
    border-radius: 15px;
    border: solid 1px #000000;
    color: rgba(255, 255, 255, 0.34);
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  .control_page{
    position: absolute;
    right: 10%;
    bottom: 5.6%;
  }
  .empty_icon{
    width: 2.5%;
    height: 15px;
    position: absolute;
    bottom: 6%;
    right: 5%;
    background: url(../assets/image/empty_icon.png) no-repeat center;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>
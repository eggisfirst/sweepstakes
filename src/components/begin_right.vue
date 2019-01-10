<template>
  <div class="right">
    <div class="right_top">
      <h1 class="top_text">获奖名单</h1>
      <div class="logo"></div>
    </div>
    <div class="right_content">
      <ul>
        <li v-for="(item, index) in list" :key="index" 
          @mouseover="delete_show(index)"
          @mouseout="delete_hide(index)">
          <div class="content_photo">
            <div class="photo_wrapper">
              <div class="photo">
                <!-- <img src="../assets/image/photo.jpeg" alt=""> -->
                <img :src="`${ item.headPortrait }`" alt="">
              </div>
            </div>
            <div class="delete_icon" v-show="isShow === index? true : false"></div>
          </div>
          <p class="content_name">{{ item.name }}</p>
          <p class="content_num">{{ item.number }}</p>
        </li>
      </ul>
    </div>
    <div class="control_page">
      <turn-page/>
    </div>
    <div class="empty_icon"></div>
  </div>
</template>

<script>
import TurnPage from './turnPage'
import Vuex,{ mapMutations, mapState } from 'vuex'
import awardName from '../store/modules/awardName';
export default {
  components: { TurnPage },
  data() {
    return {
      isShow: -1,
      list: []
    }
  },
  computed: {
    ...mapState({
      awardList: state => state.awardList.awardList,
      awardName: state => state.awardName.awardName,
      awardContent: state => state.awardContent.awardContent,
      beginLock: state => state.beginLock.beginLock
    })
  },
  watch: {
    awardName() {
      this.list = []
    },
    beginLock() {
      if(this.beginLock) {
        this.list = []
      }else {
        this.list = this.awardList
      }
    }
  },
  methods: {
    ...mapMutations(['setAwardList']),
    //删除图标的显示隐藏
    delete_show(index) {
      this.isShow = index
    },
    delete_hide(index) {
      this.isShow = -1
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
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li{
        width: 30%;
        margin-top: 1.6vw;
        padding-right: 10px;
        .content_photo{
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 100%;
          border-radius: 100%;
          background: rgba(219, 139, 0, 0.19);
          margin-bottom: 8px;
          .photo_wrapper{
            border: 2px dotted #d78200;
            width: 100%;
            height: 0;
            padding-top: 100%;
            border-radius: 100%;
            position: absolute;
            left: 0;
            top: -0.6%;
            box-sizing: border-box;
            .photo{
              position: absolute;
              top: 5%;
              left: 5%;
              width: 90%;
              height: 0;
              padding-top: 90%;
              border-radius: 100%;
              box-sizing: border-box;
              border: 2px solid #e28902;
              img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }
          .delete_icon{
            background: url(../assets/image/delete_icon.png) no-repeat center;
            background-size: 100% 100%;
            width: 18%;
            height: 18%;
            position: absolute;
            top: -1px;
            right: -10px;
            cursor: pointer;
          }
        }
        .content_name, .content_num{
          font-size: 14px;
          color: #ffa926;
          text-align: center;
          line-height: 18px;
        }
      }
    }
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
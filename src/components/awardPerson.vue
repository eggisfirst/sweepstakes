<template>
  <div class="awardPerson">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="content_photo">
          <!-- <img v-bind:src="`${item.headPortrait}`==='undefined'? awardNoPhoto:`${item.headPortrait}`" alt="" class="img"> -->
          <!-- <div class="photo_wrapper">
            <div class="photo">
            </div>
          </div> -->
          <span class="content_dept">{{ item.dept }}</span>
          <span class="content_name">{{ item.name }}</span>
          <span class="content_num">{{ item.number }}</span>
        </div>
      </li>
    </ul>
    <div class="turnBack" @click="turnBack">返回</div>
    <div class="control_page">
      <turn-page :allPage='allPage' :page='changeNowPage'/>
    </div>
  </div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
import TurnPage from './turnPage'
export default {
  data() {
    return {
      list: [],
      awardNoPhoto: '/static/image/awardNoPhoto.jpeg',
      allPage: 0,
      nowPage: 1
    }
  },
  components: { TurnPage },
  computed: {
    ...mapState({
      awardList: state => state.awardList.awardList,
      awardContent: state => state.lock.awardContent
    })
  },
  watch: {
     nowPage() {
      if(this.list.length > 0) {
        this.setData()
      }
    },
    awardList() {
      if(this.awardList) {
        if(this.awardList.length > 0) {
          this.setData()
          this.nowPage = 1
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setAwardContent', 'setAwardPerson']),
    setAwardList() {
      // this.list = []
      // if(this.awardList.length > 10) {
      //   for(var i = 0; i < 10; i++) {
      //     this.list.push(this.awardList[i])
      //   }
      // }else {
        this.list = this.awardList
      // }
    },
    //返回
    turnBack() {
      this.setAwardContent(true)
      this.setAwardPerson(true)
    },
    //翻页
    changeNowPage(value) {
      this.nowPage = value
    },
    //处理数据
    setData() {
      this.allPage = Math.ceil((this.awardList.length)/51)
      console.log(123,this.allPage)
      if(this.allPage > 1) {
        if(this.nowPage >= 1 && this.nowPage < this.allPage){
          let leftSide = (this.nowPage - 1)* 51
          let rightSide = leftSide + 51
          this.list = this.awardList.slice(leftSide,rightSide)
        }
        else if(this.nowPage > 1 && this.nowPage == this.allPage) {
          let left_side = (this.nowPage - 1)* 51 
          let right_side = this.awardList.length
          this.list = this.awardList.slice(left_side,right_side)
        }
      }else{
        this.list = this.awardList
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.awardPerson{
  height: 100%;
  width: 100%;
  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px 31px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 33%;
      text-align: left;
      // width: 100%;
      // width: 18%;
      // margin-top: 3vw;
      // margin-bottom: 2vw;
      //   @keyframes right {
      //   0%{
      //     transform:scale(1)
      //   }
      //   50%{
      //     transform:scale(1.2)
      //   }
      //   100%{
      //     transform:scale(1)
      //   }
      // }
      .content_photo{
        // flex:0.3;
        // position: relative;
        // width: 100%;
        // height: 0;
        // padding-top: 100%;
        // border-radius: 100%;
        // background: rgba(219, 139, 0, 0.19);
        // margin-bottom: 8px;
        
        .img{
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            border-radius: 50%;
          }
        .photo_wrapper{
          overflow: hidden;
          -webkit-animation: right .5s  infinite linear;
          border: 2px dotted #d78200;
          width: 94%;
          height: 0;
          padding-top: 94%;
          border-radius: 94%;
          position: absolute;
          left: 3%;
          top: 2%;
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
            // img{
            //   position: absolute;
            //   top: 0;
            //   left: 0;
            //   width: 100%;
            //   height: 100%;
            //   border-radius: 50%;
            // }
          }
        }
         .content_name, .content_num,.content_dept{
          font-size: 20px;
          color: #ffa926;
          text-align: center;
          // line-height: 1.4em;
        }
        .content_dept{
          margin-right: 1vw;
        }
        .content_num {
          color: #ff6326
        }
      }
    }
  }
  .turnBack {
    position: absolute;
    right: 2%;
    bottom: 3.2%;
    width: 66px;
    height: 25px;
    background-color: rgba(60, 60, 60, 0.5);
    border-radius: 15px;
    border: solid 1px #000000;
    color: rgba(255, 255, 255, 0.34);
    text-align: center;
    line-height: 25px;
    cursor: pointer;
    font-size: 12px;
  }
  .control_page{
    position: absolute;
    right: 9%;
    bottom: 3.6%;
  }
}
</style>


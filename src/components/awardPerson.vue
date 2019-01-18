<template>
  <div class="awardPerson">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="content_photo">
          <img v-bind:src="`${item.headPortrait}`==='undefined'? awardNoPhoto:`${item.headPortrait}`" alt="" class="img">
          <div class="photo_wrapper">
            <div class="photo">
              <!-- <img src="../assets/image/photo.jpeg" alt=""> -->
            </div>
          </div>
          <p class="content_name">{{ item.name }}</p>
          <p class="content_num">{{ item.number }}</p>
        </div>
      </li>
    </ul>
 
  </div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      list: [],
      awardNoPhoto: '/static/image/awardNoPhoto.jpeg'
    }
  },
  computed: {
    ...mapState({
      awardList: state => state.awardList.awardList
    })
  },
  watch: {
    awardList() {
      if(this.awardList) {
        this.setAwardList()
      }
    }
  },
  methods: {
    setAwardList() {
      this.list = []
      if(this.awardList.length > 10) {
        for(var i = 0; i < 10; i++) {
          this.list.push(this.awardList[i])
        }
      }else {
        this.list = this.awardList
      }
    }
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
    li {
      width: 18%;
      margin-top: 3vw;
      margin-bottom: 2vw;
        @keyframes right {
        0%{
          transform:scale(1)
        }
        50%{
          transform:scale(1.2)
        }
        100%{
          transform:scale(1)
        }
      }
      .content_photo{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        border-radius: 100%;
        background: rgba(219, 139, 0, 0.19);
        margin-bottom: 8px;
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
         .content_name, .content_num{
          font-size: 24px;
          color: #ffa926;
          text-align: center;
          line-height: 1.4em;
        }
      }
    }
  }
  
}
</style>


<template>
  <div class="awardPerson">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="content_photo">
          <div class="photo_wrapper">
            <div class="photo">
              <!-- <img src="../assets/image/photo.jpeg" alt=""> -->
              <img :src="`${item.headPortrait}`" alt="">
            </div>
          </div>
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
      list: []
    }
  },
  computed: {
    ...mapState({
      awardList: state => state.awardList.awardList
    })
  },
  watch: {
    awardList() {
      this.setAwardList()
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
       @-webkit-keyframes myMove1 {
            //  0% {background: rgba(66, 52, 26, 0.19)}
            // 50% {border: 14px solid rgba(80, 80, 48, 0.89)}
            // 100%{border: 5px solid rgba(49, 49, 30, 0.89)}
            // 0% {width: 100%;padding-top: 100%}
            // 50% {width: 120%;padding-top: 120%}
            // 100%{width: 100%;padding-top: 100%}
        }  
      .content_photo{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        border-radius: 100%;
        background: rgba(219, 139, 0, 0.19);
        margin-bottom: 8px;
        -webkit-animation: myMove1 0.5s  infinite linear;
        @-webkit-keyframes  changeColor{
          0% {border-color: #d78200}
          50% {border-color: #FFD700}
          100%{border-color: #d78200}
        } 
        .photo_wrapper{
          border: 2px dotted #d78200;
          width: 94%;
          height: 0;
          padding-top: 94%;
          border-radius: 94%;
          position: absolute;
          left: 3%;
          top: 2%;
          box-sizing: border-box;
          // -webkit-animation: changeColor 1s linear infinite ;

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
      }
    }
  }
  
}
</style>


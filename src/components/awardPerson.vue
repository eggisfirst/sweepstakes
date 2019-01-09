<template>
  <div class="awardPerson">
    <ul>
      <li v-for="i in 5" :key="i">
        <div class="content_photo">
          <div class="photo_wrapper">
            <div class="photo">
              <img src="../assets/image/photo.jpeg" alt="">
            </div>
          </div>
        </div>
      </li>
    </ul>
 
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {

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


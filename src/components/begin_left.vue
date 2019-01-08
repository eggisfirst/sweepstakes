<template>
  <div class="left">
    <div class="left_top">
      <span class="awards">一等奖</span>
      <span class="awards_number">（ 3名 ）</span>
      <p class="awards_name">iphone Xs Max</p>
    </div>
    <div class="left_content">
      <div class="left_content_bg">
        <img src="../assets/image/award_icon.png" alt="奖品图片">
      </div>
    </div>
    <div class="control_num">
      <button class="cut_down"></button>
      <span class="num_text">人数</span>
      <span class="num_bg">
        <div class="num">1</div>
      </span>
      <button class="add"></button>
    </div>
    <div class="begin_btn"></div>
  </div>
</template>

<script>
export default {
  
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
        width: 80%;
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

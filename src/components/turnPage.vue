<template>
  <div class="turnPage">
    <div class="btn_wrapper"  @click="cutPage">
      <button class="turn_left" ></button>
    </div>
    <div class="count_page">
      <span class="now_page">{{ nowPage }}</span>
      <span>/</span>
      <span class="all_page">{{ allPage }}</span>
    </div>
    <div class="btn_wrapper"  @click="addPage">
      <button class="turn_right"></button>
    </div>
  </div>
</template>

<script>
export default {
  props:['allPage', 'page'],
  data() {
    return {
      nowPage: 1
    }
  },
  methods: {
    cutPage() {
      if(this.nowPage > 1) {
        this.nowPage = this.nowPage - 1
        this.page(this.nowPage)
      }
    },
    addPage() {
      if(this.nowPage < this.allPage) {
        this.nowPage = this.nowPage + 1
        this.page(this.nowPage)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.turnPage{
  color: #a7a7a7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 80px;
  .btn_wrapper{
    padding: 0 0.6vw;
    cursor: pointer;
  }
  .turn_left{
    background: url(../assets/image/control_page.png) no-repeat center;
    background-size: 100% 100%;
    width: 8px;
    height: 12px;
    transform: rotate(180deg);
    cursor: pointer;
  }
  .turn_right{
    background: url(../assets/image/control_page.png) no-repeat center;
    background-size: 100% 100%;
    width: 8px;
    height: 12px;
    cursor: pointer;
  }
  .count_page{
    font-size: 12px;
  }
}
</style>

<template>
  <div class="cleanData">
    <div class="clean_text">是否清除全部？</div>
    <div class="clean_btn">
      <button class="btn_left" @click="emptyAll">是</button>
      <button class="btn_right" @click="disEmpty">否</button>
    </div>
  </div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(['setAwardList', 'setEmptyShow']),
    emptyAll() {
      this.setAwardList([])
      this.setEmptyShow(false)
    },
    disEmpty() {
      this.setEmptyShow(false)
    }
  }
}
</script>

<style lang="scss">
.cleanData {
  width: 160px;
  height: 85px;
  background-color: rgba(37, 50, 64, 0.8);
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  .clean_text {
    line-height: 50px;
  }
  .clean_btn {
    display: flex;
    align-items: center;
    text-align: center;
    .btn_left{
      background: #253240;
      flex: 0.5;
      color: #fff;
      border-bottom-left-radius: 8px;
      cursor: pointer;
      line-height: 32px;
      font-size: 14px
    }
    .btn_right {
      background: #404f5f;
      flex: 0.5;
      color: #fff;
      border-bottom-right-radius: 8px;
      cursor: pointer;
      line-height: 32px;
      font-size: 14px
    }
  }
}
</style>

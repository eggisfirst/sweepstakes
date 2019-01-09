<template>
  <div class="beginPage">
    <div class="begin_left">
      <begin-left/>
    </div>
    <div class="begin_right">
      <begin-right/>
    </div>
  </div>
</template>

<script>
import BeginLeft from './begin_left'
import BeginRight from './begin_right'

export default {
  components: { BeginLeft, BeginRight },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.beginPage{
  width: 100%;
  height: 100%;
  background: url(../assets/image/beginBg.png) no-repeat center;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  .begin_left{
    height: 100%;
    flex: 0.44;
    box-sizing: border-box;
    padding-top: 48px;
  }
  .begin_right{
    box-sizing: border-box;
    height: 100%;
    flex: 0.6;
    padding-top: 48px;
  }
}
</style>

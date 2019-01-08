<template>
  <div class="turnPage">
    <button class="turn_left"></button>
    <div class="count_page">
      <span class="now_page">12</span>
      <span>/</span>
      <span class="all_page">20</span>
    </div>
    <button class="turn_right"></button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.turnPage{
  color: #a7a7a7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
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

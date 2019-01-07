<template>
  <div class="home">
    <bg-start/>
    <div class="viaContainer">
      <ViaAnimation/>
    </div>
  </div>
</template>

<script>
import BgStart from '../components/bgStart'
import ViaAnimation from '../components/viaAnimation'

export default {
  components: { BgStart, ViaAnimation },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  position: fixed;
  width: 100%;
  height: 100%;
  
  .viaContainer{
    margin: auto;
    width: 500px;
    height: 500px;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -350px;
  }
}

</style>


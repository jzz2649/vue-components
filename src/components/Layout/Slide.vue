<template>
  <div class="slide">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from '../Menu/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>


<style>
  .slide {
    flex: 0 0 256px;
    min-height: 100vh;
    background: #001529;
  }
</style>

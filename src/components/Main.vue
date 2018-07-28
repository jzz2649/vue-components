<template>
  <div class="main">
    <Slide></Slide>
    <Content></Content>
  </div>
</template>

<script>
import Slide from './Layout/Slide.vue';
import Content from './Layout/Content.vue';

export default {
  components:{
    Slide,
    Content
  }
}
</script>

<style>
  .main {
    display: flex;
  }
</style>


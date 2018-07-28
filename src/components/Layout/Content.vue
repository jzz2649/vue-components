<template>
  <div class="content">
    <Header>{{title}}</Header>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  components:{
    Header
  },
  data(){
    return {
      title:''
    }
  },
  watch:{
    '$route':function(route){
      this.title = route.fullPath
    }
  }
}
</script>


<style>
  .content {
    flex: auto;
    min-height: 100vh;
    background: #F0F2F5;
  }
  .box {
    margin: 20px;
    padding: 20px;
    background: #fff;
  }
</style>

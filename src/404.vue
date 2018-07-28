<template>
  <div>找不到这个路径<span class="_notmatch">{{path}}</span></div>
</template>

<script>
export default {
  data(){
    return {
      path:''
    }
  },
  mounted(){
    this.path = this.$route.fullPath;
  },
  watch:{
    '$route':function(val){
      this.path = val.fullPath;
    }
  }
}
</script>

<style scoped>
  ._notmatch {
    color: red;
  }
</style>


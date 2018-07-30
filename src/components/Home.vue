<template>
  <div class="_main">
    <input class="input" autocomplete="off" @input="change" >
    <p>{{introduce}}</p>
  </div>
</template>

<script>
import { throttle } from '../utils'
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'introduce'
    ])
  },
  created(){
    this.delay = throttle((v)=>{
      this.$store.commit('introduce',v);
    })
  },
  mounted(){
    this.$store.commit('introduce','这是一个简单的vue demo')
  },
  methods:{
    change(e){
      // this.$store.dispatch('introduce',e.target.value);
      this.delay(e.target.value);
    }
  }
}
</script>

<style scoped>
  ._main {
    text-align: center;
  }
  .input {
    padding: 5px;
  }
</style>

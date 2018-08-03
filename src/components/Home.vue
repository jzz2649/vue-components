<template>
  <div class="_main">
    <input class="input" autocomplete="off" @input="change" >
    <p>{{introduce}}</p>
  </div>
</template>

<script>
import { delayMixin } from './mixin'
import { mapGetters, mapMutations } from 'vuex'

export default {
  mixins: [delayMixin],
  computed:{
    ...mapGetters([
      'introduce'
    ])
  },
  mounted(){
    this.$store.commit('introduce','这是一个简单的vue demo')
  },
  methods:{
    ...mapMutations({updateState:'introduce'}),
    change(e){
      // this.$store.dispatch('introduce',e.target.value);
      // this.rAFIimit((v)=>this.$store.commit('introduce',v),e.target.value);
      this.rAFIimit((v)=>this.updateState(v),e.target.value);
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

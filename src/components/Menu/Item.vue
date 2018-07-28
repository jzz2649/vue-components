<template>
  <div class="menu-list" v-if="hasChildren(data.children)">
    <div class="menu-title menu-hidden" :style="{paddingLeft:paddingLeft+'px'}" @click="slide">{{data.title}}</div>
    <div class="menu-child">
      <menu-item v-for="item in data.children" :key="item.key" :data="item" :left="itemLeft"></menu-item>
    </div>
  </div>
  <div class="menu-item" :style="{paddingLeft:paddingLeft+'px'}" @click="go(data.link)" v-else>{{data.title}}</div>
</template>

<script>
export default {
  name: 'menu-item',
  props:{
    data:{
      type:Object
    },
    left:{
      type: Number,
      default: 0
    }
  },
  computed:{
    paddingLeft(){
      return this.left*24+10;
    },
    itemLeft(){
      return this.left + 1;
    }
  },
  methods:{
    hasChildren(list){
      if(typeof list === 'undefined'){
        return false;
      }
      if(list.length === 0){
        return false;
      }
      return true;
    },
    slide(e){
      const me = e.target;
      const $next = me.nextElementSibling;
      if ($next) {
        if (me.classList.contains("menu-hidden")) {
          me.classList.remove("menu-hidden");
          $next.style.display = "block";
        } else {
          me.classList.add("menu-hidden");
          $next.style.display = "none";
        }
      }
    },
    go(link){
      if(link){
        this.$router.push(link);
      }
    }
  }
}
</script>

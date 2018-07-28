<template>
  <Pagination :page="page" :total="total" @change="change"></Pagination>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  components:{
    Pagination
  },
  data(){
    return {
      page:1,
      total:0
    }
  },
  created(){
    this.total = 50;
  },
  methods:{
    change(page,total){
      this.page = page;
    }
  }
}
</script>

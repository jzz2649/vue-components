<template>
  <ul class="pagination">
    <li title="上一页" class="pagination-prev" @click="nextpage(-1)" :class="{'pagination-disabled':page===1}"><a>&lt;</a></li>
    <li class="pagination-item" v-if="isJump(item)" v-for="item in list" :title="item" :key="item" @click="topage(item)" :class="{'pagination-item-active':item===page}"><a>{{item}}</a></li>
    <li v-else-if="item==='prev'" :title="'向前'+p+'页'" :key="item" class="pagination-jump-prev"  @click="jumppage(-p)"><a></a></li>
    <li v-else :title="'向后'+p+'页'" :key="item" class="pagination-jump-next"  @click="jumppage(p)"><a></a></li>
    <li title="下一页" class="pagination-next" @click="nextpage(1)" :class="{'pagination-disabled':page>=total}"><a>&gt;</a></li>
  </ul>
</template>

<script>
export default {
  props:{
    page:{
      type:Number,
      default:1,
    },
    total:{
      type:Number,
      default:0,
    },
    adjacent: {
      type: Number,
      default: 2
    },
    jump:{
      type:Number,
      default: 5
    }
  },
  data(){
    return {
      list: []
    }
  },
  computed:{
    p:function(){
      return this.jump;
    }
  },
  watch:{
    page(){
      this.filterList();
    },
    total(){
      this.filterList();
    }
  },
  created(){
    this.filterList();
  },
  methods:{
    topage(page){
      if(this.page === page) return;
      this.$emit('change',page,this.total);
    },
    nextpage(page){
      const nextpage = this.page + page;
      if(nextpage<1||nextpage>this.total)return;
      this.topage(nextpage);
    },
    jumppage(page){
      let total = this.page + page;
      let nextpage = page;
      if(total<1){
        nextpage = 1-this.page;
      }
      if(total>this.total){
        nextpage = this.total - this.page;
      }
      this.nextpage(nextpage);
    },
    isJump(item){
      if(item === 'prev'||item === 'next'){
        return false;
      }
      return true;
    },
    filterList(){
      const list = [];
      const N = this.adjacent;
      let min = 0-N;
      let max = N;
      let fix = this.page + min > 0 ? 0 : N+1-this.page;
        fix = this.page + max > this.total ? this.total-this.page-max: fix;
      min += fix;
      max += fix;
      let i = min;
      for(;i<=max;i++){
        list.push(this.page+i);
      }
      const flist = list.filter(d=>{
        if(d>0&&d<=this.total){
          return true;
        }
      })
      let len = flist.length-1;
      if(len>0){
        if(flist[0]-1>1){
          flist.unshift('prev')
          flist.unshift(1);
        }else if(flist[0]-1>0){
          flist.unshift(1);
        }
        len = flist.length-1;
        if(this.total-flist[len]>1){
          flist.push('next')
          flist.push(this.total);
        }else if(this.total-flist[len]>0){
          flist.push(this.total);
        }
      }
      this.list = flist;
    }
  }
}
</script>

<style scoped>
  .pagination{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    box-sizing: border-box;
  }
  .pagination-prev,
  .pagination-next,
  .pagination-jump-prev,
  .pagination-jump-next,
  .pagination-item {
    cursor: pointer;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    min-width: 32px;
    text-align: center;
    list-style: none;
    background-color: #fff;
    font-family: Arial;
    outline: 0;
    box-sizing: border-box;
  }
  .pagination-prev,
  .pagination-next,
  .pagination-item{
    border: 1px solid #d9d9d9;
  }
  .pagination-prev,
  .pagination-next,
  .pagination-jump-prev,
  .pagination-jump-next,
  .pagination-item,
  .pagination-total-text {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    line-height: 30px;
    margin-right: 8px;
  }
  .pagination-jump-prev::after,
  .pagination-jump-next::after{
    content: "•••"
  }
  .pagination-jump-prev:focus:after, .pagination-jump-prev:hover:after{
    content: "«";
    color: #1890ff;
  }
  .pagination-jump-next:focus:after, .pagination-jump-next:hover:after{
    content: "»";
    color: #1890ff;
  }
  .pagination-item-active {
    border-color: #1890ff;
    font-weight: 500;
  }
  .pagination-prev:focus,.pagination-prev:hover,
  .pagination-next:focus,.pagination-next:hover,
  .pagination-item:focus, .pagination-item:hover {
      -webkit-transition: all .3s;
      transition: all .3s;
      border-color: #1890ff;
  }
  .pagination-prev:focus a,.pagination-prev:hover a,
  .pagination-next:focus a,.pagination-next:hover a,
  .pagination-item:focus a, .pagination-item:hover a {
    color: #1890ff;
  }
  .pagination-item-active a {
    color: #1890ff;
  }
  .pagination-disabled {
    cursor: not-allowed;
  }
  .pagination-disabled:focus a,
  .pagination-disabled:hover a,
  .pagination-disabled:focus,
  .pagination-disabled:hover,
  .pagination-disabled a{
    border-color: #d9d9d9;
    color: rgba(0,0,0,.25);
    cursor: not-allowed;
  }
</style>

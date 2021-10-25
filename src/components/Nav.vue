<template>
  <div id="nav-bar">

    <div class="nav-bar-item" v-for="(item,idx) in navItems" :key="idx">
      <router-link :to="item.link">{{item.title}}</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navItems:[{
        title:'首页',
        link:'/'
      },{
        title:'分类',
        link:'/category'
      },{
        title:'购物车',
        link:'/cart'
      },{
        title:'我的',
        link:'/mine'
      }],
    }
  },
  computed: {
    currentLink: function(){
      
    }
  },
  mounted: function(){
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav-bar{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.nav-bar-item{
  flex:1;
  align-content: center;
  font-size: 16px;
  align-self: center;
}
.nav-bar-item a{
  color: #333;
}
.nav-bar-item .router-link-exact-active{
  color: #fc7227;
  font-weight: bold;
  font-size: 18px;
}
</style>

<template>
  <div id="category">
    <h1>分类</h1>
    <router-link to="/first">first</router-link>
    <Nav :navData="navData"></Nav>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
export default {
  name: 'Home',
  components:{
      Nav
  },
  data() {
      return {
          navData:{
              title:'分类',
              link:'category'
          }
      }
  },
  beforeRouteEnter (to, from, next) {
    // console.log(from); // /
    // console.log(to);  // /category
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm);
    })
  },

}
</script>

<style>
</style>
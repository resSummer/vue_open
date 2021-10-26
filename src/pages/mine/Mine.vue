<template>
  <div id="mine">
    <h1>个人中心</h1>

    <div>{{count}}</div>
    <div>{{age}}</div>
    <div>{{num}}</div>
    <div>{{name}}</div>

    <button @click="asyncEdit({age:155})">改变名字(Vuex-mapActions)</button>
    <button @click="changeName">改变名字(Vuex-dispatch)</button>
    <Nav :navData="navData"></Nav>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

// 2s 之后返回双倍的值
/*
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    } )
}
async function testResult() {
    let result = await doubleAfter2seconds(30);
    console.log(result);
}

testResult();
*/

export default {
  name: 'Home',
  components:{
      Nav
  },
  data() {
      return {
          navData:{
              title:'我的',
              link:'mine'
          }
      }
  },
  computed:{
    // ...mapState(['count','age','num','name']),
    ...mapState({
      count:'count',
      age:'age',
      num:'num',
      name:'name',
    }),
    ...mapGetters(['doneTodo','nameInfo','fullInfo']),
  },
  mounted(){
    // console.log(this)
    console.log(this.$store.state.count)
  },
  methods:{
    ...mapActions(['asyncEdit']),
    changeName(){
      console.log(this);
      this.$store.dispatch('asyncEdit', {age:15});
    }
  }
}
</script>

<style>
</style>
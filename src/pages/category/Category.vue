<template>
  <div id="category">
    <h1>分类</h1>
    <router-link to="/first">first</router-link>


    <h3>事件处理</h3>
    <button @click="showTip1('参数1', $event)">提示信息1</button>
    <button @click="showTip2($event, '参数2')">提示信息2</button>

    <div class="form-control">
      <span>用户名: </span>
      <input type="text" v-model="username">
    </div>

    <div class="form-control">
      <span>密码: </span>
      <input type="text" v-model="password">
    </div>

    <div class="form-control">
      <span>用户信息: </span>
      {{userInfo}}
    </div>
    <div class="form-control">
      <span>用户信息(计算属性实现): </span>
      {{userInfo1}}
    </div>

    <!-- 天气情况 -->
    <h3>今天的天气{{weatherInfo}}</h3>
    <button @click="isHot = !isHot">切换天气</button>


    <!-- watch对象 -->
    <h3>numbers中a的值是{{numbers.a}}</h3>
    <button @click="numbers.a++">a++</button>

    <!-- watch简写 -->
    <h3>朋友的名字是{{friend}}</h3>
    <button @click="friend = (friend == '小明')?'小亮':'小明'">切换朋友</button>
    <Nav :navData="navData"></Nav>
  </div>
</template>

<script>
import Nav from '../../components/Nav';
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
          },
          username:'小五',
          password: 123456,
          userInfo1: '',
          isHot: true,
          numbers:{
            a: 1, 
            b: 2
          },
          friend:'小明',
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
  mounted() {
    // console.log(this)
  },
  computed:{
    //计算属性不能实现异步任务需求
    userInfo(){
      /*
      setTimeout(() => {
        console.log(this)
        return this.username + this.password
      },1000);
    */
      return this.username + this.password
        
    },
    weatherInfo(){
      return this.isHot?'炎热':'凉爽';
    }
  },
  methods: {
    showTip1(param1, $event1){
      console.log(param1);
      console.log($event1);
    },
    showTip2($event2, param2){
      console.log($event2);
      console.log(param2);
      console.log('东西不难 就是需要时常回忆')
    },
    //切换天气
    changeWeather(){
      this.isHot = !this.isHot;
    }
  },
  // 监视属性
  watch:{
    //使用watch实现计算属性
    'username'(val){
      setTimeout(() => {
        this.userInfo1 = val + this.password;
      },2000)
    },
    'password'(val){
      /**
       * 1.所有被Vue管理的函数最好写成普通函数, 这样this才是指向Vue实例或者组件实例对象
       * 2.所有不属于Vue管理额函数(setTimeout, ajax的回调函数, Promise的回调函数等)最好是写成箭头函数, 这样箭头函数中的this指向的才是Vue实例或者组件实例对象
       */
      setTimeout(() => {
        this.userInfo1 = this.username + val;
      },2000)
    },
    'isHot':{
      immediate: true,
      handler(newValue, oldValue){
        console.log('isHot被修改了, 之前是: '+oldValue+', 现在是: '+newValue);
      }
    },
    'numbers.a':{
      handler(newValue, oldValue){
        console.log('numbers.a被修改了, 之前是: '+oldValue+', 现在是: '+newValue);
      }
    },
    //默认情况下使用watch见识numbers 当a/b变化时handle不会触发, 但是添加deep属性为true后则可以
    'numbers':{
      deep: true,
      handler(newValue, oldValue){
        console.log('numbers.a被修改了, 之前是: '+oldValue+', 现在是: '+newValue);
      }
    },
    //简写形式
    friend(newValue, oldValue){
      console.log('friend被修改了, 之前是: '+oldValue+', 现在是: '+newValue);
    }
  },

}
</script>

<style scoped lang="scss">
  h3{
    font-weight: bold;
    font-size: 18px;
  }
  #category{
    *{
      margin: 10px 0;
    }
  }

</style>
<template>
  <div id="home">
    <h1>首页</h1>
    <router-link to="/chart">大数据展示</router-link>
    <div ref="msgDiv">{{ msg }}</div>
    <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>
    <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>
    <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>
    <button @click="changeMsg">
      Change the Message
    </button>

    <div class="input_wrap" v-show="show_flag">
      <input
        type="text"
        id="user_name"
        ref="userName"
        :value="username"
        @focus="selfFocus"
      />
    </div>

    <ConfirmButton :title="buttonTitle" @submitAction = "homeSubmit"></ConfirmButton>
    <Nav :navData="navData"></Nav>
  </div>
</template>

<script>
import Nav from "../../components/Nav"
import ConfirmButton from "../../components/ConfirmButton"
export default {
  name: "Home",
  components: {
    Nav,
    ConfirmButton
  },
  data() {
    return {
      navData: {
        title: "首页",
        link: "home"
      },
      show_flag: false,
      username: "123",
      msg: "Hello Vue.",
      msg1: "",
      msg2: "",
      msg3: "",
      buttonTitle: '提交'
    };
  },
  mounted() {
    // this.$refs.userName.focus()
  },
  methods: {
    changeMsg(e) {
      console.log(e)
      this.msg = "Hello world.";
      this.msg1 = this.$refs.msgDiv.innerHTML;

      this.msg3 = this.$refs.msgDiv.innerHTML;

      this.show_flag = true;
      this.$nextTick(() => {
        this.$refs.userName.focus();
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
    },
    selfFocus() {
      console.log("获取焦点了");
    },
    homeSubmit(args) {
      console.log('homeSubmit'+ args);
    }
  }
};
</script>

<style></style>

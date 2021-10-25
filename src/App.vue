<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  watch: {
　　　'$route' (to, from) {
　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
　　　　　if(isBack) { // 如果是返回，则左侧滑到右边去「滑入右边」，否则打开界面从右边滑到左边去
　　　　　　this.transitionName = 'slide-right'
　　　　　} else {
　　　　　　this.transitionName = 'slide-left'
　　　　　}
　　     this.$router.isBack = false
　　 }
　 }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
    margin:0;
    padding:0;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
fieldset, img {
    border:0 none;
    display:block;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style:normal;
    font-weight:normal;
}

caption, th {
    text-align:left;
}

a {
    text-decoration:none;
}
a:hover {
    text-decoration:none;
}
.clearfix:after {
    height:0;
    content:" ";
    display:block;
    overflow:hidden;
    clear:both;
}
.clearfix {
    zoom:1;
}
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* .Router {
     position: absolute;
     width: 100%;
     height: 100%;
     transition: all .3s ease;
}
.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
   opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
} */
</style>

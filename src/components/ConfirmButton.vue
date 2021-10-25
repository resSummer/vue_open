<!--  -->
<template>
<div id='confirm-button-view'>
  <button class="confirm-button" @click='$emit("submitAction","传递给home页面")'>{{title}}</button>
</div>
</template>

<script>

export default {
  props: {
    title:{
      type: String,
      default: "确认"
    }
  },
  data() {
    return {
      
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  created() {

  },
  mounted() {

  },
}
</script>
<style scoped>

</style>
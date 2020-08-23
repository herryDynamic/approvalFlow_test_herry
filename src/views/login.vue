<template>
  <div id="login">
    <div>我是hellow</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "login",
  computed: {
    ...mapState(["test"]),
  },
  components: {},
  mounted() {
    this.start();
  },
  methods: {
    start() {
      let a = this.test;
      console.log("我是");
      console.log(a);
      a = "我是白艾米你";

      // 修改store中test值
      this.$store.commit("test", a);

      console.log(this.test);
    },
  },
};
</script>

<style>
</style>

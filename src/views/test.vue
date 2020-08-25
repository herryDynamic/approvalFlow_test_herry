
<template>
  <div></div>

  
</template>
<script>
/* eslint-disable */
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutation,
  mapMutations,
} from "vuex";
export default {
  name: "app",
  data() {
    return {
      newAge: [],
    };
  },
  computed: {
    // 在计算属性中通过辅助函数, 将state中的两个数据导出来
    ...mapState(["defaultLevel", "salary", "ages"]),
  },

  mounted() {
    this.upgradeHandler();
  },
  methods: {
    ...mapActions(["changeLevel", "changeLevel2"]),
    ...mapMutations(["upSalary"]),
    async upgradeHandler() {
      let ret = await this.changeLevel("中级前端开发"); // 等待异步执行的结果
      console.log(ret);
    },
  },
};
</script>
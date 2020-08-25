//ren1.1.vue:组件
<script>
export default {
  props: {
    greet: {
      type: String,
      default: "",
    },
  },
  render: function (createElement) {
    return createElement(
      "h1",
      {
        class: {
          title: true,
        },
        style: {
          color: "red",
        },
      },
      this.greet + "我是标题一"
    );
  },
};
</script>
<style scoped>
.title {
  font-style: italic;
}
</style>


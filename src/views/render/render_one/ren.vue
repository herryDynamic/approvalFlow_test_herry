
//ren.vue:对比tem创建快10ms
<script>
export default {
  render: function (createElement) {
    return createElement("h1", "我是标题一");
  },
};
</script>



// 2.0 创建多个标签的初级版
<script>
export default {
  render: function (createElement) {
    return createElement("ul", [
      createElement("li", "li-1"),
      createElement("li", "li-2"),
      createElement("li", "li-3"),
    ]);
  },
};
</script>



// 2.1 创建多个标签的中级版

<script>
export default {
  data() {
    return {
      list: ["li-1", "li-2", "li-3"],
    };
  },
  render: function (createElement) {
    return createElement(
      "ul",
      this.list.map((_) => {
        return createElement("li", _);
      })
    );
  },
};
</script>




// 2.2 创建多个标签的高级版
<script>
export default {
  data() {
    return {
      parent: "ul",
      son: "li",
      list: ["li-1", "li-2", "li-3"],
    };
  },
  render: function (createElement) {
    return createElement(
      this.parent,
      this.list.map((_) => {
        return createElement(this.son, _);
      })
    );
  },
};
</script>
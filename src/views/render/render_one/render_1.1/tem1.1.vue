//tem1.1.vue 在父组件中
<template>
  <div>
    <Ren greet="Hello " />
  </div>
</template>

<script>
import Ren from "./ren1.1"; //这是我的路径不要照搬
export default {
  components: {
    Ren,
  },
};
</script>
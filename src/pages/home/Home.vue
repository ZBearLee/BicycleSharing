<template>
  <div class="homepage">
      <head-bar></head-bar>
      <main-map></main-map>
      <scan></scan>
      <client-sercive></client-sercive>
  </div>
</template>

<script type="text/javascript">
import HeadBar from "@/components/Head.vue";
import MainMap from "./MainMap";
import Scan from "./Scan";
import ClientSercive from "./ClientSercive";
export default {
  components: {
    HeadBar,
    MainMap,
    Scan,
    ClientSercive,
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  background: #fafafa;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>



<template>
  <div class="my_rute_wrapper">
    <header>
        <button><router-link to="/My"><i class="fa fa-long-arrow-left"></i></router-link></button>
        <span>我的行程</span>
    </header>
    <div class="my_rute_content">
      连接硬件设备进行统计
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.my_rute_wrapper {
  width: 100%;
  height: 100vh;
  header {
    font-size: 0.5rem;
    letter-spacing: 0.07rem;
    height: 1rem;
    button {
      border: 0;
      background-color: transparent;
      height: 1rem;
      width: 1rem;
      a {
        font-size: 0.6rem;
        color: #000;
      }
    }
  }
  .my_rute_content {
    margin-top: 2rem;
    text-align: center;
  }
}
</style>


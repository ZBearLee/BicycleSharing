<template>
  <div class="my_wallet_wrapper">
     <header>
        <button><router-link to="/My"><i class="fa fa-long-arrow-left"></i></router-link></button>
        <span>{{detial}}</span>
    </header>
    <p class="my_wallet_title">{{my_wallet_title}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detial: "明细",
      my_wallet_title:'我的钱包'
    };
  }
};
</script>
<style lang="scss" scoped>
.my_wallet_wrapper {
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
      float: left;

      a {
        font-size: 0.6rem;
        color: #000;
      }
    }
    span {
      float: right;
      font-size: .4rem;
      padding: .2rem;
    }
  }
  .my_wallet_title {
    font-size: 0.6rem;
    padding: 0.2rem;
  }
}
</style>


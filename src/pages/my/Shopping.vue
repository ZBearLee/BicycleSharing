<template>
  <div class="my_shopping_wrapper">
    <header>
        <button><router-link to="/My"><i class="fa fa-long-arrow-left"></i></router-link></button>
        <span><i class="iconfont">&#xe691;</i></span>
    </header>
    <p class="shopping_title">{{shopping_title}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopping_title: "摩拜商城"
    };
  }
};
</script>
<style lang="scss" scooped>
@import "@/assets/scss/icon.scss";
.my_shopping_wrapper {
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
    }
  }
  .shopping_title {
    font-size: 0.5rem;
    font-weight: 600;
    letter-spacing: 0.08rem;
    margin: 0.2rem;
  }
}
</style>


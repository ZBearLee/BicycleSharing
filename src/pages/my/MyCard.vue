<template>
  <div class="my_card_wrapper">
     <header>
        <button><router-link to="/My"><i class="fa fa-long-arrow-left"></i></router-link></button>
        <span>{{use_introduct}}</span>
    </header>
    <p class="my_card_title">{{my_card_title}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      use_introduct: "使用说明",
      my_card_title:'我的卡券'
    };
  }
};
</script>
<style lang="scss" scoped>
.my_card_wrapper {
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
  .my_card_title {
    font-size: 0.6rem;
    padding: 0.2rem;
  }
}
</style>


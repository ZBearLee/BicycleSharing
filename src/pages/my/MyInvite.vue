<template>
  <div class="my_invite_wrapper">
    <header>
        <button><router-link to="/My"><i class="fa fa-long-arrow-left"></i></router-link></button>
        <span>邀请好友</span>
    </header>
    <div class="my_invite_content">
      分享到微信进行邀请
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.my_invite_wrapper {
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
  .my_invite_content{
    margin-top: 2rem;
    text-align: center;
  }
}
</style>


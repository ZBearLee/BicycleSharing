<template>
    <div class="aboutus_page">
     <header>
      <button><router-link to="/Setting"><i class="fa fa-long-arrow-left"></i></router-link></button>
      <span>关于我们</span>
    </header>
    <div class="aboutus_content">
        关于我们
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
.aboutus_page {
  header {
    font-size: 0.5rem;
    letter-spacing: 0.07rem;
    background: #fff;
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
    span {
      margin-left: 0.5rem;
    }
  }
  .aboutus_content{
      font-size: .5rem;
      text-align: center;
      margin-top: 2rem;
  }
}
</style>


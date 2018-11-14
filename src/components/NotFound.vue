<template lang="html">
<div class="not_found_page">
  <header>
      <button><router-link to="" onclick="window.history.go(-1)"><i class="fa fa-long-arrow-left"></i></router-link></button>
      <span>404</span>
  </header>
  <h1>404</h1>
  <h2>^_^<span>您访问的页面不存在</span></h2>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not_found_page {
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
  h1,
  h2 {
    text-align: center;
    letter-spacing: .2rem
    span {
      margin-left: 0.2rem;
    }
  }
  h1{
    margin-top: 3rem;
  }
}
</style>

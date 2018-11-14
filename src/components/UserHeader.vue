<template>
<div class="user_headeer_componemt">
    <header>
      <button><router-link to=""  onclick="window.history.go(-1)"><i class="fa fa-long-arrow-left"></i></router-link></button>
      <span>用户指南</span>
    </header>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>
header {
  font-size: 0.5rem;
  letter-spacing: 0.07rem;
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
</style>

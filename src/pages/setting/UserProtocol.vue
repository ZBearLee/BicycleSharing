<template>
    <div class="user_protocol_page">
     <header>
      <button><router-link to="/Setting"><i class="fa fa-long-arrow-left"></i></router-link></button>
      <span>用户协议</span>
    </header>
    <div class="user_protocol_content">
        用户协议
    </div>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
.user_protocol_page {
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
  .user_protocol_content{
      font-size: .5rem;
      text-align: center;
      margin-top: 2rem;
  }
}
</style>



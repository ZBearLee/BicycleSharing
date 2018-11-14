<template>
  <div class="my_account_wrapper">
    <header>
        <button><router-link to="/My"><i class="fa fa-long-arrow-left"></i></router-link></button>
    </header>
    <div class="my_account_content">
      <p class="my_acoout_img"><img src="http://oxsm65f5j.bkt.clouddn.com/message2.jpg" alt=""></p>
      <ul class="accounts_lists">
        <li class="accout_item"><router-link to="#" ><i class="iconfont">&#xe6bd;</i><span class="text">亲密好友共享你的押金</span></router-link></li>
        <li class="accout_item"><router-link to="#" ><i class="iconfont">&#xe6c4;</i><span class="text">一人充月卡，两人免费骑</span></router-link></li>
        <li class="accout_item"><router-link to="#" ><i class="iconfont">&#xe7dd;</i><span class="text">目前仅限邀请新用户</span></router-link></li>
      </ul>
    </div>
    <footer>
     <router-link to="/"><span>绑定微信好友</span></router-link>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/icon.scss";
.my_account_wrapper {
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
  .my_account_content {
    width: 100%;
    height: 80%;
    .my_acoout_img {
      height: 50%;
      img {
        opacity: 0.9;
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .accounts_lists {
      li {
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        &:first-child {
          margin-top: 0.5rem;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          color: #111;
          i {
            display: inline-block;
            float: left;
            padding: 0 0.5rem;
            margin-left: 2.2rem;
          }
          span {
            float: left;
          }
        }
        .router-link-exact-active {
          .text {
            color: #f56c6c;
          }
          .iconfont {
            color: #f56c6c;
          }
        }
        .router-link-exact-active:hover {
          text-decoration: none;
        }
      }
    }
  }
  footer {
    position: absolute;
    background: #000;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    bottom: 0.5rem;
    width: 90%;
    left: 5%;
    border-radius: 5px;
    a {
      span {
        color: #fff;
      }
    }
  }
}
</style>


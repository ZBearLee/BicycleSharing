<template>
    <div class="authenticate_page">
        <user-header></user-header>
        <p class="authenticate_title">{{title}}</p>
        <ul class="authenticate_lists">
            <li v-for="authenticate in authenticates" :key="authenticate.id"><router-link :to="authenticate.url"><span>{{authenticate.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
        </ul>
    </div>
</template>
<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "注册与认证",
      authenticates: [
        { txt: "收不到验证码", url: "/customer" },
        { txt: "实名认证", url: "/customer" },
        { txt: "实名认证失败", url: "/customer" },
        { txt: "邀请好友", url: "/customer" }
      ]
    };
  },
  components: {
    UserHeader: UserHeader
  }
};
</script>
<style lang="scss" scoped>
.authenticate_page {
  .authenticate_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .authenticate_lists {
    background: #fff;
    padding: 0 0 0.3rem 0;
    li {
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #fafafa;
      a {
        color: #000;
        font-size: 0.4rem;
        display: inline-block;
        width: 100%;
        padding-left: 0.3rem;
        text-decoration: none;
        span {
          font-family: sans-serif;
        }
        i {
          float: right;
          display: inline-block;
          line-height: 0.8rem;
          font-size: 0.6rem;
          padding-right: 0.2rem;
        }
      }
    }
  }
}
</style>


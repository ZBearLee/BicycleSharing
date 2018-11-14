<template>
<div class="customer_page">
    <user-header></user-header>
    <p class="customer_title">{{customer_title}}</p>
    <ul class="customer_lists">
        <li v-for="customer in customers" :key="customer.id"><router-link :to="customer.url"><span>{{customer.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
    </ul>
</div>
    
</template>

<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      customer_title: "热点问题",
      customers: [
        { url: "/fee", txt: "押金与车费" },
        { url: "/charging", txt: "计费" },
        { url: "/clock", txt: "开关/锁" },
        { url: "/authenticate", txt: "注册与认证" },
        { url: "/monthcard", txt: "月卡" },
        { url: "/personalcount", txt: "个人账户" },
        { url: "/aboutuse", txt: "用车相关" },
        { url: "/aboutservice", txt: "客服相关" }
      ]
    };
  },
  components: {
    UserHeader
  }
};
</script>

<style lang="scss" scoped>
.customer_page {
  .customer_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .customer_lists {
    background: #fff;
    padding: 0 0 0.3rem 0;
    li {
      height: 1.2rem;
      line-height: 1.2rem;
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

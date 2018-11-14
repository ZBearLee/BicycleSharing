<template>
    <div class="fee_page">
        <user-header></user-header>
        <p class="fee_title">{{title}}</p>
        <ul class="fee_lists">
            <li v-for="fee in fees" :key="fee.id"><router-link :to="fee.url"><span>{{fee.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
        </ul>
    </div>
</template>
<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "押金与车费",
      fees: [
        { txt: "押金与车费的区别", url: "/customer" },
        { txt: "免押使骑", url: "/customer" },
        { txt: "免押券的使用", url: "/customer" },
        { txt: "押金充值", url: "/customer" },
        { txt: "押金退款", url: "/customer" },
        { txt: "车费充值", url: "/customer" },
        { txt: "车费退款", url: "/customer" }
      ]
    };
  },
  components: {
    UserHeader: UserHeader
  }
};
</script>
<style lang="scss" scoped>
.fee_page {
  .fee_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .fee_lists {
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


<template>
    <div class="charing_page">
     <user-header></user-header>
     <p class="charging_title">{{title}}</p>
     <ul class="charging_lists">
        <li v-for="charging in chargings" :key="charging.id"><router-link :to="charging.url"><span>{{charging.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
    </ul>
    </div>
</template>

<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "计费",
      chargings: [
        { txt: "计费规则", url: "/customer" },
        { txt: "计费异常", url: "/customer" }
      ]
    };
  },
  components: {
    UserHeader: UserHeader
  }
};
</script>
<style lang="scss" scoped>
.charing_page {
  .charging_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .charging_lists {
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



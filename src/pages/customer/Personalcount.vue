<template>
    <div class="personal_count_page">
        <user-header></user-header>
        <p class="personal_count_title">{{title}}</p>
        <ul class="personal_count_lists">
            <li v-for="personal_count in personal_counts" :key="personal_count.id"><router-link :to="personal_count.url"><span>{{personal_count.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
        </ul>
    </div>
</template>
<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "个人账户",
      personal_counts: [
        { txt: "要换手机号", url: "/customer" },
        { txt: "模范分", url: "/customer" }
      ]
    };
  },
  components: {
    UserHeader: UserHeader
  }
};
</script>
<style lang="scss" scoped>
.personal_count_page {
  .personal_count_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .personal_count_lists {
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


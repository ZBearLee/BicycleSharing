<template>
    <div class="clock_page">
        <user-header></user-header>
        <p class="clock_title">{{title}}</p>
        <ul class="clock_lists">
            <li v-for="clock in clocks" :key="clock.id"><router-link :to="clock.url"><span>{{clock.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
        </ul>
    </div>
</template>
<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "开/关锁",
      clocks: [
        { txt: "如何开锁", url: "/customer" },
        { txt: "开锁失败", url: "/customer" },
        { txt: "为开锁已计费", url: "/customer" },
        { txt: "如何开锁", url: "/customer" },
        { txt: "忘记开锁", url: "/customer" },
        { txt: "已开锁未结费", url: "/customer" }
      ]
    };
  },
  components: {
    UserHeader: UserHeader
  }
};
</script>
<style lang="scss" scoped>
.clock_page {
  .clock_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .clock_lists {
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


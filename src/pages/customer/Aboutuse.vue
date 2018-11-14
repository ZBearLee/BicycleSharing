<template>
    <div class="about_use_page">
        <user-header></user-header>
        <p class="about_use_title">{{title}}</p>
        <ul class="about_use_lists">
            <li v-for="about_use in about_uses" :key="about_use.id"><router-link :to="about_use.url"><span>{{about_use.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
        </ul>
    </div>
</template>
<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "用车相关",
      about_uses: [
        { txt: "预约", url: "/customer" },
        { txt: "如何找车", url: "/customer" },
        { txt: "停车地点", url: "/customer" },
        { txt: "电单车使用说明", url: "/customer" }
      ]
    };
  },
  components: {
    UserHeader: UserHeader
  }
};
</script>
<style lang="scss" scoped>
.about_use_page {
  .about_use_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .about_use_lists {
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


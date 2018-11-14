<template>
    <div class="month_card_page">
        <user-header></user-header>
        <p class="month_card_title">{{title}}</p>
        <ul class="month_card_lists">
            <li v-for="month_card in month_cards" :key="month_card.id"><router-link :to="month_card.url"><span>{{month_card.txt}}</span><i class="fa fa-angle-right"></i></router-link></li>
        </ul>
    </div>
</template>
<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "月卡",
      month_cards: [
        { txt: "月卡规则", url: "/customer" },
        { txt: "月卡购买/续费", url: "/customer" }
      ]
    };
  },
  components: {
    UserHeader: UserHeader
  }
};
</script>
<style lang="scss" scoped>
.month_card_page {
  .month_card_title {
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    padding-left: 0.6rem;
    color: #000;
  }
  .month_card_lists {
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


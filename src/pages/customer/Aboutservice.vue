<template>
    <div class="about_service_page">
         <user-header></user-header>
         <p class="about_service_title">{{title}}</p>
        <p class="description">客服相关</p>
    </div>
</template>

<script>
import UserHeader from "@/components/UserHeader";
export default {
  data() {
    return {
      title: "客服相关"
    };
  },
  components: {
    UserHeader
  }
};
</script>

<style lang="scss" scoped>
.about_service_page {
  background: #fefefe;
  height: 100vh;
  .about_service_title {
    border-bottom: 2px solid #eee;
    margin: 0.4rem auto 0.1rem;
    width: 94%;
    padding-bottom: 0.1rem;
    font-size: 0.4rem;
  }
  .description{
    margin: 0.1rem auto 0.1rem;
    width: 94%;
    font-size: 0.4rem;
  }
}
</style>


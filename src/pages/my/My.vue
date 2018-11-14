<template>
  <div class="my_wrappper">
    <my-list></my-list>
  </div>
</template>
<script>
import MyList from "./MyList";
import * as types from "../../store/mutation-types";
import api from "@/store/modules/login";
export default {
  data() {
    return {};
  },
  mounted() {
    this.get_User();
  },
  methods: {
    get_User() {
      setTimeout(() => {
        api.getUser().then(({ data }) => {
          if (data.code == 401) {
            console.log("token");
            this.$router.push("/");
            this.$store.dispatch("UserLogout");
            console.log(localStorage.token);
          } else {
            console.log('success')
          }
        });
      }, 100);
    }
  },
  components: {
    MyList
  }
};
</script>

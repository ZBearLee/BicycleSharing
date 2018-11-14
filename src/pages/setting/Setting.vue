<template>
  <div class="setting_page">
    <header>
      <button><router-link to="/My"><i class="fa fa-long-arrow-left"></i></router-link></button>
      <span>设置</span>
    </header>
    <ul class="setting_lists">
      <li v-for="setting in settings" :key="setting.id"  :class="setting.setting_item_name"><router-link :to="setting.url"><span class="settiing_text">{{setting.text}}</span><i class="fa fa-angle-right"></i></router-link></li>
    </ul>
    <el-button type="danger" @click="logout()"><span>退出登录</span></el-button>
  </div>
</template>

<script>
import * as types from "../../store/mutation-types";
import api from "@/store/modules/login";
export default {
  data() {
    return {
      users: "",
      username: "",
      settings: [
        { text: "常用地址", url: "/address" },
        { text: "检查新版本", url: "/checkversion" },
        {
          text: "关于我们",
          url: "/aboutus",
          setting_item_name: "about_us_item"
        },
        {
          text: "用户协议",
          url: "/userprotocol",
          setting_item_name: "user_proctocol_item"
        },
        { text: "押金说明", url: "/deposit" },
        {
          text: "充值协议",
          url: "/recharge",
          setting_item_name: "recharge_item"
        }
      ]
    };
  },
  mounted() {
    this.get_User();
    this.username = window.localStorage.getItem("username");
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
            this.user = data;
          }
        });
      }, 100);
    },
    logout() {
      //清除token
      this.$store.dispatch("UserLogout");
      if (!this.$store.state.token) {
        this.$router.push("/");
        this.$message({
          type: "success",
          message: "登出成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "登出失败"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.setting_page {
  background: #fafafa;
  height: 100vh;
  header {
    font-size: 0.5rem;
    letter-spacing: 0.07rem;
    background: #fff;
    button {
      border: 0;
      background-color: transparent;
      height: 1rem;
      width: 1rem;
      a {
        font-size: 0.6rem;
        color: #000;
      }
    }
    span {
      margin-left: 0.5rem;
    }
  }
  .el-button--danger {
    width: 94%;
    margin: 1rem auto 0;
    display: block;
    span {
      font-size: 0.4rem;
      letter-spacing: 0.05rem;
    }
  }
  .setting_lists {
    background: #fff;
    padding: 0.4rem 0 0.3rem 0;
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
    .about_us_item,
    .recharge_item {
      border-bottom: transparent;
      &::after {
        height: 0.3rem;
        background: #fafafa;
        width: 100%;
        content: "";
        display: block;
      }
    }
    .user_proctocol_item {
      margin-top: 0.3rem;
    }
  }
}
</style>

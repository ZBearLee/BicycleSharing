<template>
    <div class="message_page">
        <header>
            <button><router-link to="/"><i class="fa fa-long-arrow-left"></i></router-link></button>
            <span>我的消息</span>
        </header>
        <div class="get_message_lists">
          <ul>
            <li v-for="message in messageList" :key="message.id">
              <p class="message_poster"><img alt="活动海报" :src="message.poster"></p>
              <div class="left_part">
                <p class="message_title">{{message.title}}</p>
                <p class="message_date">{{message.start_time}}</p>
              </div>
             <div class="right_part">
               <span><i></i></span>
             </div>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import * as types from "../../store/mutation-types";
import api from "@/store/modules/login";
export default {
  data() {
    return {
      messageList: []
    };
  },
  mounted() {
    this.getMessage();
    this.get_User();
  },
  methods: {
    getMessage() {
      axios
        .get("api/message")
        .then(res => {
          console.log(res.data);
          this.messageList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
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
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/common.scss";
.message_page {
  background-color: #fafafa;
  min-height: 100vh;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  header {
    font-size: 0.5rem;
    letter-spacing: 0.07rem;
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
  .get_message_lists {
    width: 94%;
    margin: 0.3rem auto;
    li {
      background: #fff;
      height: 6rem;
      margin-bottom: 0.4rem;
      border-radius: 10px;
      .message_title {
        font-size: 0.4rem;
        font-family: cursive;
        font-weight: 600;
        letter-spacing: 0.05rem;
        padding: 0.2rem 0 0.2rem 0.2rem;
      }
      .message_date {
        color: #aaa;
        padding-left: 0.2rem;
        font-size: 0.3rem;
        letter-spacing: 0.03rem;
      }
    }
    .message_poster {
      width: 100%;
      height: 4.2rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

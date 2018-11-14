<template>
  <div class="my_list_container">
              <header>
                <img src="../../assets/imgs/user_avatar.jpg" alt="头像">
                <div class="header_right">
                  <p>{{username}}</p>
                  <ul>
                    <li>会员</li>
                    <li>信用良好<span><i class="fa fa-angle-right"></i></span></li>
                  </ul>
                </div>
              </header>
              <p class="gold_bite"><span><i class="iconfont">&#xe620;</i></span><span class="gold_mount">52摩币</span></p>
              <ul class="my_center_list">
               <li class="item"><router-link to="/MyWallet"><i class="iconfont">&#xe6c4;</i><span class="side_text">我的钱包</span></router-link></li>
               <li class="item"><router-link to="/MyCard"><i class="iconfont">&#xe618;</i><span class="side_text">我的卡券</span></router-link></li>
               <li class="item"><router-link to="/MyRute"><i class="iconfont">&#xe601;</i><span class="side_text">我的行程</span></router-link></li>
               <li class="item"><router-link to="/Shopping"><i class="iconfont">&#xe7a8;</i><span class="side_text">摩拜商城</span></router-link></li>
               <li class="item"><router-link to="/MyInvite"><i class="iconfont">&#xe7be;</i><span class="side_text">邀请好友</span></router-link></li>
               <li class="item"><router-link to="/FriendAccount"><i class="iconfont">&#xe608;</i><span class="side_text">亲密账户</span></router-link></li>
             </ul>
             <footer>
               <router-link to="/Setting">设置</router-link>
               <button @click="goto_custom_srive()">客服中心</button>
             </footer>
              <div class="head_mask" v-show="isShowList" @click="onTapMask"></div>
        </div>
        
</template>
<script>
export default {
  data() {
    return {
      username: "",
      isShowList: true
    };
  },
  mounted() {
    this.get_User();
    this.username = localStorage.getItem("username");
  },
  methods: {
    onTapMask() {
      this.$router.push("/");
    },
    goto_custom_srive() {
      this.$router.push("/Customer");
    },
    get_User() {}
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/icon.scss";
.my_list_container {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: #fff;
  width: 78%;
  z-index: 110;
  position: absolute;
  top: 0;
  header {
    height: 15vh;
    background-color: #fafafa;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }
    .header_right {
      width: 60%;
      p {
        font-size: 0.5rem;
      }
      ul {
        display: flex;
        li {
          border-radius: 10px;
          color: #fff;
          font-size: 12px;
          margin-top: 0.3rem;
          letter-spacing: 1px;
        }
        li:first-child {
          background-color: red;
          padding: 2px 10px;
        }
        li:last-child {
          background-color: #666;
          padding: 3px 14px;
          margin-left: 0.3rem;
          span {
            margin-left: 0.2rem;
            i {
              font-size: 0.3rem;
            }
          }
        }
      }
    }
  }
  .my_center_list {
    height: 66vh;
    li {
      height: 11vh;
      line-height: 11vh;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        i {
          margin: 0 0.5rem 0 0.3rem;
          font-size: 0.8rem;
        }
        span {
          font-size: 0.4rem;
          color: #333;
          letter-spacing: 0.03rem;
        }
      }
    }
  }
  footer {
    border-top: 1px solid #eee;
    height: 10vh;
    a {
      color: #333;
      font-size: 0.4rem;
      padding-left: 0.4rem;
    }
    button {
      border: 0;
      background-color: transparent;
      height: 1.5rem;
      line-height: 1.5rem;
      padding: 0 0.5rem;
      font-size: 0.4rem;
    }
  }
  .gold_bite {
    height: 9vh;
    display: flex;
    border-bottom: 1px solid #eee;
    line-height: 1.6rem;
    span:first-child {
      width: 1.5rem;
      margin-right: 0.3rem;
      text-align: center;
      i {
        color: orange;
      }
    }
    .gold_mount {
      font-size: 0.4rem;
    }
  }
  .head_mask {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 22%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>


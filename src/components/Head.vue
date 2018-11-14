<template>
  <div class="bs_header">
    <div class="header_main">
       <div class="headnav_container">
            <button class="my_center" @click="showMycenterList"><router-link to="/My"><i class="iconfont">&#xe61e;</i></router-link></button>
            <ul>
            	<li v-for="item in headItems" :key="item.id"><router-link :to="item.url" class="add_bottom"><span class="txt">{{item.text}}</span></router-link></li>
            </ul>
             <button class="messages"><router-link to="/Message"><i class="iconfont">&#xe617;</i></router-link></button>
        </div>
    </div>
    <div class="head_mask" v-show="isShowList" @click="onTapMask"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      isActive: true,
      headItems: [
        { text: "摩拜单车", url: "/" },
        { text: "专车", url: "/SpecialCar" },
        { text: "顺风车", url: "/FreeRide" }
      ],
      isShowList: false
    };
  },
  methods: {
    showMycenterList() {
      this.isShowList = !this.isShowList;
    },
    onTapMask() {
      this.isShowList = !this.isShowList;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/icon.scss";
.bs_header {
  a{
    color: transparent;
  }
  .header_main {
    z-index: 100;
    overflow: hidden;
    .headnav_container {
      display: flex;
      justify-content: space-around;
      height: 1.2rem;
      background-color: #fff;
      ul {
        display: flex;
        width: 60%;
        align-items: center;
        li {
          width: 33.3%;
          text-align: center;
          .txt {
            color: #999;
            font-size: .35rem
          }
          .add_bottom {
            height: 100%;
            display: inline-block;
            line-height: 1.15rem;
          }
          .router-link-exact-active {
            border-bottom: 2px solid red;
            .txt {
              color: #000;
            }
          }
        }
      }
      button {
        width: 10%;
        border: none;
        background-color: transparent;
      }
    }
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
        height: 2.6rem;
        background-color: #fafafa;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 1.3rem;
          height: 1.3rem;
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
              padding: 3px 8px;
            }
            li:last-child {
              background-color: #666;
              padding: 3px 14px;
              margin-left: 0.3rem;
              span {
                margin-left: 0.2rem;
              }
            }
          }
        }
      }
      .my_center_list {
        height: 11rem;
        padding: 0.6rem 0;
        li {
          height: 1.8rem;
          line-height: 1.8rem;
          a {
            display: flex;
            align-items: center;
            i {
              margin: 0 0.5rem 0 0.3rem;
              font-size: 0.8rem;
            }
            span {
              font-size: 0.4rem;
              color: #333;
            }
          }
        }
      }
      footer {
        border-top: 1px solid #eee;
        height: 1.5rem;
        button {
          border: 0;
          background-color: transparent;
          height: 1.5rem;
          line-height: 1.5rem;
          padding: 0 0.5rem;
        }
      }
      .gold_bite {
        height: 1.4rem;
        display: flex;
        border-bottom: 1px solid #eee;
        line-height: 1.4rem;
        span:first-child {
          width: 1.5rem;
          margin-right: 0.3rem;
          text-align: center;
          i {
            color: orange;
          }
        }
        .gold_mount{
          font-size: .4rem;
        }
      }
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

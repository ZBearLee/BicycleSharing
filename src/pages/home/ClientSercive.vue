<template>
  <div class="home_service_component">
    <div class="serviece_content_wrapper">
      <el-button v-popover:open_service v-show="!isShowBox">
        <i class="iconfont" @click="onShowBox">&#xe626;</i>
      </el-button>
      <div class="serviece_content_main"  v-show="isShowBox">
        <p class="serviece_title">客户服务</p>
        <ul class="service_lists">
               <li class="service_item"><router-link to="/VehicleFailure"><i class="iconfont">&#xe60b;</i><span class="service_text">车辆故障</span></router-link></li>
               <li class="service_item"><router-link to="/Complain"><i class="iconfont">&#xe6a1;</i><span class="service_text">举报违停</span></router-link></li>
               <li class="service_item"><router-link to="/UpReport"><i class="iconfont">&#xe6fa;</i><span class="service_text">上报淤积</span></router-link></li>
               <li class="service_item"><router-link to="/OtherProblem"><i class="iconfont">&#xe617;</i><span class="service_text">其他问题</span></router-link></li>
        </ul>
      </div>
    </div>
    <div class="service_mask" v-show="isShowBox" @click="onClickMask"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBox: false
    };
  },
  methods: {
    onShowBox() {
      this.isShowBox = !this.isShowBox;
    },
    onClickMask() {
      this.isShowBox = !this.isShowBox;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/icon.scss";
.home_service_component {
  height: 100%;
  overflow: hidden;
  .serviece_content_wrapper {
    position: absolute;
    z-index: 100;
    overflow: hidden;
    background-color: #fff;
    bottom: 0;
    width: 100%;
    .el-button {
      position: fixed;
      bottom: 1.7rem;
      width: 0.9rem;
      height: 0.9rem;
      right: 0.2rem;
      background: #fff;
      border: 1px solid #fff;
      border-radius: 50%;
      padding: 0;
    }
    .serviece_content_main {
      .serviece_title {
        text-align: center;
        color: #333;
        padding: 0.2rem;
        font-size: 0.4rem;
      }
      .service_lists {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          padding: 0.5rem 1.6rem;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            font-size: 0.33rem;
            -webkit-tap-highlight-color: transparent;
            i {
              color: red;
              text-align: center;
            }
            span {
              color: #111;
            }
          }
        }
      }
    }
  }
  .service_mask {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
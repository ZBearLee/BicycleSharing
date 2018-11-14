<template>
  <div class="home_service">
    <el-popover ref="open_service" placement="bottom" title="" width="100%" trigger="click" content="" class="service_wrap">
      <p class="container_title">客户服务</p>
      <ul class="main_content">
               <li class="service_item"><router-link to="/VehicleFailure"><i class="iconfont">&#xe60b;</i><span class="service_text">车辆故障</span></router-link></li>
               <li class="service_item"><router-link to="/Complain"><i class="iconfont">&#xe6a1;</i><span class="service_text">举报违停</span></router-link></li>
               <li class="service_item"><router-link to="/UpReport"><i class="iconfont">&#xe6fa;</i><span class="service_text">上报淤积</span></router-link></li>
               <li class="service_item"><router-link to="/OtherProblem"><i class="iconfont">&#xe617;</i><span class="service_text">其他问题</span></router-link></li>
      </ul>
    </el-popover>
    <el-button v-popover:open_service>
      <i class="iconfont">&#xe626;</i>
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/icon.scss";
.home_service {
  .el-button {
    position: absolute;
    z-index: 999;
    bottom: 1.7rem;
    width: 0.9rem;
    height: 0.9rem;
    right: 0.2rem;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 0;
  }
}
#el-popover-9768 {
  position: absolute;
  top: 500px;
  bottom: 0;
}
.el-popover--plain {
  margin: 18px 0 !important;
}
.el-popover {
  bottom: 0 !important;
}
.container_title {
  width: 100%;
  text-align: center;
  font-size: 0.5rem;
}
.main_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main_content li {
  padding: 0.8rem 1.6rem;
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
</style>
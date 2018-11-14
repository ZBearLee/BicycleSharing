<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="消息管理" name="first">
      <admin-message></admin-message>
    </el-tab-pane>
    <el-tab-pane label="用户管理" name="second">
      <admin-user></admin-user>
    </el-tab-pane>
    <el-tab-pane label="单车管理" name="third">
      <admin-bike></admin-bike>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import AdminMessage from "./AdminMessage";
import AdminUser from "./AdminUser";
import AdminBike from "./AdminBike";

export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {},
  components: {
    AdminMessage,
    AdminUser,
    AdminBike
  }
};
</script>
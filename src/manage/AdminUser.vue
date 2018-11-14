<template>
    <div class="user_manage_page">
        <header class="user_manage_title">
            <h1>{{msg}}:{{username}}</h1>
        </header>
        <table class="user_lists">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>用户账号</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in userList" :Key="user._id">
                    <td>{{index+1}}</td>
                    <td>{{user.email}}</td>
                    <td><el-button  type="primary" primary size="small" @click="del_user(index)">删除</el-button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import * as types from "@/store/mutation-types";
import api from "../store/modules/login";
export default {
  data() {
    return {
      msg: "欢迎来到用户管理",
      username: "",
      userList: ""
    };
  },
  mounted() {
    this.get_User();
    this.username = localStorage.getItem("username");
  },
  methods: {
    get_User() {
      setTimeout(() => {
        api.getUser().then(({ data }) => {
          if (data.code == 401) {
            this.$router.push("/login");
            this.$store.dispatch("UserLogout");
          } else {
            this.userList = data;
          }
        });
      }, 100);
    },
    del_user(id) {
      let opt = {
        id: this.userList[id]._id
      };
      api
        .delUser(opt)
        .then(response => {
          this.$message({
            type: "success",
            message: "删除成功"
          });
          this.get_User();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.user_manage_page {
  width: 100%;
  .user_manage_title {
    h1 {
      text-align: center;
    }
  }
  .user_lists {
    width: 100%;
    border: 1px solid #999;
    thead {
      display: table-caption;
      height: 38px;
      width: 100%;
      padding: 0px;
      line-height: 38px;
      tr {
        display: flex;
        justify-content: space-around;
        th {
          width: 33.3%;
          text-align: center;
        }
      }
    }
    tbody {
      height: 30px;
      line-height: 30px;
      tr {
        border: 1px solid #999;
        &:hover {
          background: #eee;
        }
        td {
          width: 33.3%;
          text-align: center;
          padding: 6px 0;
        }
      }
    }
  }
}
</style>
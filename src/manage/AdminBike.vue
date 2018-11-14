<template>
  <div class="bike_manage_page">
    <el-table :data="bikes" border style="width: 80%">
      <el-table-column prop="_id" label="Id">
      </el-table-column>
      <el-table-column prop="longitude" label="经度">
      </el-table-column>
      <el-table-column prop="latitude" label="纬度">
      </el-table-column>
      <el-table-column prop="operate" label="操作">
        <template slot-scope="scope">
            <el-button type="warning" size="small"
             @click.native.prevent="openEditBikeModal(scope.$index, bikes)">修改</el-button>
            <el-button type="danger" size="small" @click.native.prevent="removeBike(scope.$index,bikes)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" plain class="add_bike_button" @click="openAddBikeModal">添加</el-button>
    <vodal :show="addBikeModal" animation="slideDown" :width="300" :height="200" :closeButton="false">
      <el-input type="text" placeholder="经度" v-model="longitude"></el-input>
      <el-input type="text" autosize placeholder="纬度" v-model="latitude"></el-input>
      <el-button type="primary" @click="addBike" class="confire_btn">确定</el-button>
      <el-button type="primary" @click="closeModal">取消</el-button>
    </vodal>
    <vodal :show="editBikeModal" animation="slideDown" :width="300" :height="200" :closeButton="false">
      <el-input type="text" placeholder="" v-model="longitude"></el-input>
      <el-input type="text" autosize placeholder="" v-model="latitude"></el-input>
      <el-button type="primary" @click="editBike"  class="confire_btn">确定</el-button>
      <el-button type="primary" @click="closeModal">取消</el-button>
    </vodal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getBikes();
  },
  data() {
    return {
      bikes: [],
      longitude: "",
      latitude: "",
      bike_id: "",
      addBikeModal: false,
      editBikeModal: false
    };
  },
  methods: {
    openAddBikeModal() {
      this.addBikeModal = true;
    },
    openEditBikeModal(index, bikes) {
      //console.log(bikes[index]);
      this.longitude = bikes[index].longitude;
      this.latitude = bikes[index].latitude;
      this.bike_id = bikes[index]._id;
      this.editBikeModal = true;
    },
    closeModal() {
      this.addBikeModal = false;
      this.editBikeModal = false;
      this.longitude = "";
      this.latitude = "";
      this.bike_id = "";
    },
    getBikes() {
      axios
        .get("/api/bike")
        .then(res => {
          let response = res.data;
          this.bikes = response;
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addBike() {
      axios
        .post("/api/bike", {
          longitude: this.longitude,
          latitude: this.latitude
        })
        .then(res => {
          this.addBikeModal = false;
          this.longitude = "";
          this.latitude = "";
          this.getBikes();
        })
        .catch(err => {
          console.log(err);
        });
    },
    editBike() {
      let id = this.bike_id;
      axios
        .put(`/api/bike/${id}`, {
          longitude: this.longitude,
          latitude: this.latitude
        })
        .then(res => {
          this.closeModal();
          this.longitude = "";
          this.latitude = "";
          this.getBikes();
        })
        .catch(err => {
          console.log(err);
        });
    },
    removeBike(index, bikes) {
      let id = bikes[index]._id;
      axios
        .delete(`/api/bike/${id}`)
        .then(res => {
          console.log(res.data);
          this.getBikes();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.bike_manage_page {
  .el-table {
    width: 80%;
    margin: 0 auto;
  }
  .el-table td,
  .el-table th.is-leaf {
    text-align: center;
  }
  .add_bike_button {
    margin: 0 auto;
    display: flex;
    margin-top: 20px;
  }
  .el-input {
    margin: 15px 0;
  }
  .confire_btn {
    margin-left: 15%;
  }
}
</style>
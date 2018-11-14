<template>
  <div class="message_manage_item">
    <mu-table :showCheckbox="false" >
        <mu-thead>
          <mu-tr>
            <mu-th>活动名称</mu-th>
            <mu-th>活动海报</mu-th>
            <mu-th>开始日期</mu-th>
            <mu-th>操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="(message,index) of messages" :key="message.title">
            <mu-td><h3>{{ message.title }}</h3></mu-td>
            <mu-td><p><img class="message_poster" :src="message.poster"></p></mu-td>
            <mu-td><h3>{{ message.start_time }}</h3></mu-td>
            <mu-td>
              <mu-raised-button @click="showDetail(message.title)" 
              label="详细" primary/>
              <mu-raised-button @click="openEditMessageModal(message)" 
              label="修改" primary/>
              <mu-raised-button @click="removeMessage(message)" 
              label="删除" secondary/>
            </mu-td>
          </mu-tr>
        </mu-tbody>
    </mu-table>
    <mu-float-button icon="add" class="add-message-button" 
    backgroundColor @click="openAddMessageModal"/>
    <vodal :show="addMessageModal" animation="slideDown" 
    :width="500" :height="300" :closeButton="false">
      <mu-text-field v-model="title" fullWidth icon="title" 
      label="活动名称" labelFloat/><br/>
      <mu-text-field v-model="poster"
       fullWidth icon="picture_in_picture" label="活动海报" labelFloat/><br/>
      <mu-text-field v-model="start_time" fullWidth icon="date_range" label="开始日期"
      labelFloat/><br/>
      <mu-raised-button @click="addMessage" label="确定"  style="margin:0 15% 0 25%" icon="check" primary/>
      <mu-raised-button @click="closeModal" label="取消"  icon="undo"/>
    </vodal>
    <vodal :show="editMessageModal" animation="slideDown" :width="500"
     :height="300" :closeButton="false">
      <mu-text-field v-model="title" fullWidth icon="title" 
      label="活动名称" labelFloat/><br/>
      <mu-text-field v-model="poster" fullWidth icon="picture_in_picture" 
      label="海报地址" labelFloat/><br/>
      <mu-text-field v-model="start_time" fullWidth icon="date_range" 
      label="开始时间" labelFloat/><br/>
      <mu-raised-button @click="editMessage" label="确定" style="margin:0 15% 0 25%"  icon="check" primary/>
      <mu-raised-button @click="closeModal" label="取消" icon="undo"/>
    </vodal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getMessages();
    document.title = this.$route.name;
  },
  components: {},
  data() {
    return {
      title: "",
      poster: "",
      start_time: "",
      message_id: "",
      messages: [],
      addMessageModal: false,
      editMessageModal: false
    };
  },
  methods: {
    openAddMessageModal() {
      this.addMessageModal = true;
    },
    openEditMessageModal(message) {
      console.log(message);
      this.editMessageModal = true;
      this.title = message.title;
      this.poster = message.poster;
      this.start_time = message.start_time;
      this.message_id = message._id;
    },
    closeModal() {
      this.addMessageModal = false;
      this.editMessageModal = false;
      this.title = "";
      this.poster = "";
      this.start_time = "";
      this.message_id = "";
    },
    getMessages() {
      axios
        .get("/api/message")
        .then(res => {
          //console.dir(res.data);
          this.messages = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addMessage() {
      axios
        .post("/api/message", {
          title: this.title,
          poster: this.poster,
          start_time: this.start_time
        })
        .then(res => {
          console.log(res.data);
          this.addMessageModal = false;
          this.title = "";
          this.poster = "";
          this.start_time = "";
          this.message_id = "";
          this.getMessages();
        })
        .catch(e => {
          console.log(e);
        });
    },
    editMessage() {
      let id = this.message_id;
      axios
        .put(`/api/message/${id}`, {
          title: this.title,
          poster: this.poster,
          start_time: this.start_time
        })
        .then(res => {
          console.log(res.data);
          this.closeModal();
          this.title = "";
          this.poster = "";
          this.start_time = "";
          this.movie_id = "";
          this.getMessages();
        })
        .catch(err => console.log(err));
    },
    removeMessage(message) {
      let id = message._id;
      axios
        .delete(`/api/message/${id}`)
        .then(res => {
          console.log(res.data);
          this.getMessages();
        })
        .catch(e => console.log(e));
    },
    showDetail(title) {
      this.$router.push(`/Message`);
    }
  }
};
</script>

<style lang="scss">
.mu-tr {
  vertical-align: middle !important;
  height: 66px;
  line-height: 66px;
  .mu-th {
    text-align: center !important;
  }
  .mu-td {
    text-align: center !important;
    p {
      height: 100%;
      .message_poster {
        width: 110px;
        vertical-align: middle;
        height: 54px;
      }
    }
  }
}
.add-message-button {
  margin: 2% auto !important;
  display: flex;
}
</style>

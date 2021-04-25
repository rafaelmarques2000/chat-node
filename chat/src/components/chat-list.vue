<template>
  <div class="chat-list">
    <h2>Usuários conectados</h2>
    <ul>
      <li v-for="user in userList">
        <div class="color-avatar" :style="'background:'+user.color"></div>
        <p>{{ user.nickname | meIndentify }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "chat-list",
  filters: {
    meIndentify(nickname) {
        const data = JSON.parse(sessionStorage.getItem('data'));
        return nickname === data.nickname ? (nickname+'(eu)').toUpperCase() : nickname.toUpperCase();
    }
  },
  props: {
    userList: {
      type: Array
    }
  }
}
</script>

<style scoped>
.chat-list {
  background: #383838;
  width: 100%;
  height: 100vh;
}

.chat-list h2 {
  font-size: 15px;
  background: #3d3d3d;
  color: #fff;
  padding: 10px;
}

.chat-list ul {
  padding: 10px;
}

.chat-list ul li {
  cursor: pointer;
  border-bottom: solid 1px #474747;
  padding: 5px;
  transition: background-color .3s, color .3s;
  display: flex;
}

.chat-list ul li:hover {
  background: #4f4f4f;
  color: #fff;
}

.chat-list ul li p {
  font-size: 12px;
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
  color: #fff;
}

.color-avatar {
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
</style>
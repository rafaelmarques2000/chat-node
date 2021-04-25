<template>
  <div class="chat-talk">
    <div class="chat-screen">
      <ul>
        <li class="talk-ballon" :style="'background:'+message.data.chatColor"
            :class="[nickname === message.data.nickname ? 'talk-ballon-me' : 'talk-ballon-other' ]"
            v-for="message in $store.state.chatMessages">
          <b>{{ message.data.nickname }} diz:</b><br>
          <span>{{ message.data.msg }}</span>
        </li>
      </ul>
      <div class="typing-msg" ref="typingMsg" id="typing-msg"></div>
    </div>
    <div class="chat-form">
      <textarea v-model="msg" cols="5" rows="2" @keyup="clearTyping" @keydown.enter="sendMessage" @keypress="sendTyping"
                class="form-control"></textarea>
      <input type="button" @click="sendMessage" value="enviar" class="btn btn-primary send-button">
    </div>
  </div>


</template>

<script>
export default {
  name: "chat-talk",
  data() {
    return {
      msg: '',
      nickname: ''
    }
  },
  props: {
    show: {
      type: Boolean
    }
  },
  sockets: {
    receptMessage(data) {
      this.$store.commit({
        type:"addMessage",
        data: data
      })
    },
    detectTyping(data) {
      this.$refs.typingMsg.innerHTML = data;
    },
    detectClearTyping() {
      this.$refs.typingMsg.innerHTML = '';
    }
  },
  methods: {
    sendMessage() {
      const data = JSON.parse(sessionStorage.getItem('data'));
      let msg = {nickname: data.nickname, msg: this.msg, chatColor: data.color}
      this.$socket.emit('sendMessage', msg);
      this.msg = ''
    },
    sendTyping() {
      const data = JSON.parse(sessionStorage.getItem('data'));
      const typingMsg = `${data.nickname} esta digitando...`;
      this.$socket.emit('sendTyping', typingMsg);
    },

    clearTyping() {
      setTimeout(() => {
        this.$socket.emit('clearTyping');
      }, 1000)

    }
  },
  mounted() {
     const data = JSON.parse(sessionStorage.getItem('data'));
     this.nickname = data.nickname;
  }
}
</script>

<style scoped>
.chat-screen {
  width: 80%;
  height: 90vh;
  background: #2f2f2f;
  position: absolute;
  top: 0;
  overflow: auto;
}

.chat-form {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 80%;
  height: 60px;
  background: #ccc;
  padding: 10px;
}

.chat-form textarea {
  background: #b2b2b2;
  border: none;
  margin-right: 10px;
}

.chat-screen ul {
  list-style: none;
}

.talk-ballon-me {
  width: 250px;
  border-radius: 10px;
  padding: 10px;
  margin-left: 15px;
  margin-top: 10px;
  color: #fff
}

.talk-ballon-other {
  width: 250px;
  border-radius: 10px;
  padding: 10px;
  margin-left: 30px;
  margin-top: 10px;
  color: #fff
}

.send-button {
  background: none;
  border: none;
  color: #292929;
  font-weight: bold;
}

.typing-msg{
  color: #fff;
  margin-left: 10px;
}


</style>
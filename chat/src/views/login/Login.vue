<template>
  <div class="login-content">
    <h1>Public Talk</h1>
    <div class="alert alert-danger" :class="{'show-alert': !showAlert}">
      <p>{{alertMsg}}</p>
    </div>
    <form @submit.prevent="validateLoginForm">
      <div class="form-group">
        <input type="text" v-model="nickname" class="form-control login-input" placeholder="Digite o seu nickname">
      </div>
      <div class="form-group">
        <label>Selecione uma cor</label><br>
        <input type="color" v-model="color">
      </div>
      <input type="submit" class="btn login-btn" value="Acessar Chat">

    </form>
  </div>


</template>

<script>

export default {
  data() {
    return {
      nickname: '',
      color: '',
      showAlert: false,
      alertMsg: ''
    }
  },
  methods: {
    validateLoginForm() {
      if (this.nickname === '') {
          this.showAlertMessage(true, 'preencha o campo nickname');
          return;
      }
      if (this.color === '') {
        this.showAlertMessage(true, 'selecione uma cor para seu chat');
        return;
      }
      this.enterChat()
    },

    showAlertMessage(show, msg) {
       this.showAlert = true;
       this.alertMsg = msg;
       setTimeout(() =>{
         this.showAlert = false;
         this.alertMsg = '';
       },3000);
    },
    enterChat() {
      const data = {nickname: this.nickname, color: this.color}
      sessionStorage.setItem('data', JSON.stringify(data));
      this.$socket.emit('registeruser', JSON.parse(sessionStorage.getItem('data')));
      this.$router.push({path: "/chat"});
    }
  },
}
</script>

<style scoped>
.login-content {
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
  background: #373737;
  padding: 22px;
  border-radius: 12px;
  color: #fff;
}

.login-content h1 {
  text-align: left;
  font-size: 1.3em;
}

.login-input {
  background: none;
  border: none;
  border-bottom: solid 1px #ccc;
  border-radius: 0;
  padding-left: 0;
  color: #fff;
}

.login-input:focus {
  background: none;
  box-shadow: 0 0 0 0;
  outline: 0;
}

.login-btn {
  background: #565656;
  border: none;
  color: #fff;
  font-weight: bold;
  transition: background .5s, color .5s;
}

.login-btn:hover {
  color: #fff;
  background: #242424;
}

.show-alert {
  display: none;
}

</style>
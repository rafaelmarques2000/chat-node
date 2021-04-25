<template>
     <div class="chat-content">
          <div class="chat-users-list">
               <chat-list :user-list="chatUsers"></chat-list>
          </div>
          <div class="talk-content">
              <chat-talk></chat-talk>
          </div>
     </div>
</template>

<script>
import chatList from '../../components/chat-list'
import chatTalk from '../../components/chat-talk'
import http from '../../axios'

export default {
    name: 'chat',
    sockets: {
      connect: function (){
         this.$socket.emit('registeruser',JSON.parse(sessionStorage.getItem('data')));
      },
      updateList: function () {
           this.getChatUsers();
           console.log('update');
      }
    },
    data(){
        return {
           chatUsers: []
        }
    },
    methods:{
        getChatUsers(){
           http.get('/chat-users').then(response => {
               this.chatUsers = response.data
           }).catch(error => {
               alert('falha ao obter lista de usuarios do chat');
           });
        }
    },
    components:{
        chatList: chatList,
        chatTalk: chatTalk
    },
  mounted() {
      this.getChatUsers();
  }
}
</script>

<style scoped>
   .chat-content {
     display: flex;
     height: 100vh;
   }

   .chat-users-list{
     width: 20%;
   }

   .talk-content {
     width: 80%;
   }
</style>
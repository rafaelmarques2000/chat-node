# chat-node
Projeto que utiliza node.js + Vue.js afim de criar um chat publico de texto

**Objetivo**
Experimentar backend nodejs + socket.io e treinamento de conceitos

**Recursos Implementados**
  - eventos para detectar a digitação dos usuarios
  - chat de texto
  - armazenamento das mensagens locais

**Recursos para sempre implementados**
 - chat de video usando WebRTC


## Executando o projeto:

### Pré-requisitos
- vue-cli
- docker(minimo 19.x)
- docker composer (minimo 1.26.x)

### Backend
  **Linux**
  - Em um terminal dentro da pasta chat-api execute o comando **make serve**

   **Windows**
   - Em um terminal dentro da pasta chat-api execute **docker-compose -f docker-compose.yml up**

### Frontend
  - Em um terminal dentro da pasta chat execute **npm run serve**

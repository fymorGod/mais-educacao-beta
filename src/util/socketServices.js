import io from "socket.io-client";

const SOCKET_URL = "http://192.168.4.43:3010/";
const SOCKET_URL_CONQUISTAS = "http://192.168.4.43:3010/conquistas";
// const SOCKET_URL_CONQUISTAS2 = "http://192.168.4.43:3010/conquistas2";

class WSService {
  initializeSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });
      
      this.socket2 = io(SOCKET_URL_CONQUISTAS, {
        transports: ["websocket"],
      });
    
      // this.socket3 = io(SOCKET_URL_CONQUISTAS2, {
      //   transports: ["websocket"],
      // });
      
      // console.log("initializing socket", this.socket);

      this.socket.on("connect", (data) => {
        // console.log("===socket on===");
      });

      this.socket2.on("connect", (data) => {
        // console.log("===socket on conquistas===");
      });
      
      this.socket2.emmit("RESPONDA_X_ATIVIDADES", (data) => {
        // console.log("===A CONQUISTA FUNCIONOU===");
      });
      
      // this.socket3.on("connect", (data) => {
      // //   console.log("===socket on conquistas===");
      // });

      this.socket.on("disconnect", (data) => {
        // console.log("===socket disconnect===");
      });

      this.socket.on("error", (data) => {
        // console.log("socket error", data);
      });
    } catch (error) {
      // console.log("error is socket", error);
    }
  };

  emit(event, data, cb = {}) {
    this.socket.emit(event, data, cb);
  }

  on(event, cb = {}) {
    this.socket.on(event, cb);
  }

  remove(listenerName) {
    this.socket.remove(listenerName);
  }
}

const socketServices = new WSService();

export default socketServices;

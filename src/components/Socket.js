import React, { Component } from "react";
import SockJsClient from "react-stomp";

class Socket extends Component {
  componentDidMount() {
    console.info("Socket connected");
  }
  constructor(props) {
    super(props);
    this.state = {
      clientConnected: false,
      messages: []
    };
  }

  onMessageReceive = (msg) => {
    console.log("Recieved: " + JSON.stringify(msg));

    this.setState(prevState => ({
      messages: [...prevState.messages, msg]
    }));
  };

  sendMessage = msg => {
    try {
      this.clientRef.sendMessage("/app/broadcast", JSON.stringify(msg));
      return true;
    } catch (e) {
      return false;
    }
  };

  render() {
    return (
      <SockJsClient
        url={"http://localhost:8080/ws"}
        topics={["/topic/all"]}
        onMessage={this.onMessageReceive}
        ref={client => {
          this.clientRef = client;
        }}
        onConnect={() => {
          this.setState({ clientConnected: true });
        }}
        onDisconnect={() => {
          this.setState({ clientConnected: false });
        }}
        debug={false}
      />
    );
  }
}

export default Socket;

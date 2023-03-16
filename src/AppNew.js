// https://ko.reactjs.org/docs/context.html
import React from "react";

const StyleContext = React.createContext({ background: "perple" });

class Button extends React.Component {
  static contextType = StyleContext;
  render() {
    return <button style={this.context}>{this.props.children}</button>;
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    const children = this.props.messages.map((message, i) => (
      <Message key={i} text={message.text} />
    ));
    return (
      <StyleContext.Provider value={{ background: "tomato" }}>
        <div>{children}</div>
      </StyleContext.Provider>
    );
  }
}

export default function App() {
  return (
    <>
      <div>
        <MessageList messages={[{ text: "TEST1" }, { text: "TEST2" }]} />
      </div>
    </>
  );
}

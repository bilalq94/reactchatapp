import React from 'react';

import {GiftedChat} from 'react-native-gifted-chat'

class Chat extends React.Component {
  state = {
    messages: []
  };
  render() {
    return (
      <GiftedChat>
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
    );
  }
}

Chat.defaultProps = {
  name: 'Bilal',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};

export default Chat;

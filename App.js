import React from 'react';
import Home from './src/components/Home';
import Chat from './src/components/Chat';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Platform
} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{ paddingTop: Platform.OS === 'ios' ? 64 : 54 }}>
          <Scene key='home' component={Home} />
          <Scene key='chat' component={Chat} />
        </Scene>
      </Router>
    );
  }
}

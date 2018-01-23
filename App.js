import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import mainReducer from './src/reducers';

import Navigator from './src/components/Navigator';

const NavigatorWithHelpers = ({dispatch, nav}) => (
	<Navigator navigation={addNavigationHelpers({
		dispatch, state: nav
	})}/>
)

const mapStateToProps = (state) => ({
	nav: state.nav
})

const ConnectedNavigator = connect(mapStateToProps)(NavigatorWithHelpers);

export default class App extends Component {

  render(){
    let store = createStore(mainReducer, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle='light-content'/>
          <ConnectedNavigator/>
        </View>
      </Provider>
    )
  }
}
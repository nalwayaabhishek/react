/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
            style={{flex: 1}} initialRoute={{
        title: 'My View Title'
      }}/>

      <View style={styles.container}>
        <Text style={styles.welcome}>
         HelloReact!!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('HouseShare', () => HelloWorld);

/**
 * 京致衣橱sky版
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Home = require('./component/Home');
var ListPage = require('./component/ListPage');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var jzyc = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '京致衣橱sky版',
          component: Home,
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});

AppRegistry.registerComponent('jzyc', () => jzyc);

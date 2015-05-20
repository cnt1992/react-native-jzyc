'use strict';

var React = require('react-native');
var Banner = require('./Banner');
var Keyword = require('./Keyword');
var List = require('./List');
var ListPage = require('./ListPage');

var {
  StyleSheet,
  View,
  TabBarIOS,
  ScrollView
} = React;

module.exports = React.createClass({

	getInitialState : function () {
		return {
			selectedTab : 'default'
		};
	},

	selectItem : function () {
		this.props.navigator.push({
			title : '列表页',
			component : ListPage,
			passProps : {}
		});
	}, 

	_renderTabContent : function () {
		return (
			<View style={{flex:1,paddingTop:44}}>
				<ScrollView stickyHeaderIndices={[1]}>
					<Banner />
					<Keyword />
					<List onSelect={() => this.selectItem()}/>
				</ScrollView>	
			</View>
		)
	},

	render () {
		return (
			<TabBarIOS style={{backgroundColor:'#666666',flexDirection:'row',justifyContent:'center'}}>
				<TabBarIOS.Item
					icon={require('image!QQ20150520-1')}
					selectedIcon={require('image!uie_thumb_selected')}
					title="品牌"
					selected={this.state.selectedTab==='default'}
					onPress={()=>{
						this.setState({
							selectedTab : 'default'
						});
					}}>
					{this._renderTabContent()}
				</TabBarIOS.Item>	
				<TabBarIOS.Item
					title="搭配"
					systemIcon='favorites'
					selected={this.state.selectedTab==='dapei'}
					onPress={()=>{
						this.setState({
							selectedTab : 'dapei'
						});
					}}>
					{this._renderTabContent()}
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="衣橱"
					systemIcon='most-viewed'
					selected={this.state.selectedTab==='clothes'}
					onPress={()=>{
						this.setState({
							selectedTab : 'clothes'
						});
					}}>
					{this._renderTabContent()}
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="购物袋"
					systemIcon='history'
					selected={this.state.selectedTab==='shopping'}
					onPress={()=>{
						this.setState({
							selectedTab : 'shopping'
						});
					}}>
					{this._renderTabContent()}
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="我"
					badge='1'
					systemIcon='contacts'
					selected={this.state.selectedTab==='me'}
					onPress={()=>{
						this.setState({
							selectedTab : 'me'
						});
					}}>
					{this._renderTabContent()}
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
});
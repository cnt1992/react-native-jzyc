'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
	StyleSheet,
	TabBarIOS,
	Image,
	Text,
	ListView,
	TouchableHighlight,
	View,
} = React;

var {width,height,scale} = Dimensions.get('window');

module.exports = React.createClass({

	getInitialState : function () {
		return {
			
		};
	},

	renderTab () {
		return (
			<View style={{flexDirection:'row',justifyContent:'center',borderTopColor:'#999',borderBottomColor:'#999',backgroundColor:'#fff'}}>
				<View style={styles.tab}>
					<Text style={[styles.tab_txt,{color:'#f00'}]}>默认</Text>
				</View>
				<View style={styles.tab}>
					<Text style={styles.tab_txt}>价格</Text>
				</View>
				<View style={styles.tab}>
					<Text style={styles.tab_txt}>折扣</Text>
				</View>
			</View>
		)
	},	

	renderList : function () {
		return (
			<View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
				<View style={styles.img_wrap}>
					<Image style={{height:145,width:width/2-15,resizeMode: Image.resizeMode.contain}} source={{ uri : 'http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg' }} />
				</View>
				<View style={styles.img_wrap}>
					<Image style={{height:145,width:width/2-15,resizeMode: Image.resizeMode.cover}} source={{ uri : 'http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg' }} />
				</View>
				<View style={styles.img_wrap}>
					<Image style={{height:145,width:width/2-15,resizeMode: Image.resizeMode.stretch}} source={{ uri : 'http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg' }} />
				</View>
				<View style={styles.img_wrap}>
					<Image style={{height:145,width:width/2-15}} source={{ uri : 'http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg' }} />
				</View>

			</View>
		)
	},

	render() {
		return (
			<View style={{flex:1,paddingTop:60,paddingLeft:10,paddingRight:10,backgroundColor:'#f1f1f1'}}>
				<View style={styles.header}>
					<View style={{flex:1,paddingLeft:5,borderLeftColor:'#f00',borderLeftWidth:3}}>
						<Text style={{textAlign:'left'}}>全场满499减50</Text>
					</View>
					<View style={{flex:1}}>
						<Text style={{textAlign:'right'}}>品牌故事</Text>
					</View>
				</View>
				{this.renderTab()}
				{this.renderList()}
			</View>
		)
	}
});

var styles = StyleSheet.create({
	header : {
		flexDirection : 'row',
		justifyContent : 'center',
		marginTop:15,
		marginBottom:15,
		height:13,
		lineHeight:13
	},
	tab : {
		flex:1,
		paddingTop:10,
		paddingBottom:10,
		borderRightColor:'#f5f5f5',
		borderRightWidth:1
	},
	tab_txt : {
		textAlign : 'center',
		color : '#666',
		fontSize : 14
	},
	img_wrap : {
		marginBottom : 10,
		backgroundColor : '#ffffff'
	}
});













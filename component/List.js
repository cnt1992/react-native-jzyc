'use strict';

var React = require('react-native');

var {
	StyleSheet,
	Image,
	Text,
	ListView,
	TouchableHighlight,
	View,
} = React;

var API = 'http://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550';
//var API = 'http://wq.jd.com/mcoss/focuscpt/qqshow?id=2482&tpl=3&pageindex=1&callback=banner&pagesize=20&category=&level=1&ch=8&extid=1&g_tk=225251217&g_ty=ls&t=0.16189939086325467&g_ty=ls';

module.exports = React.createClass({

	getInitialState() {
		return {
			dataSource : new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2})
		}
	},

	componentDidMount() {
		this.fetchData();
	},

	fetchData : function () {
		fetch(API)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.data),
				})
				//console.log(this.state.dataSource,'dataSource');
			})
			.done();
	},

	renderListView () {
		return (
			<ListView contentInset={{top:-20}}
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				style={styles.listView} />
		);
	},

	renderRow(item) {
		return (
			<View style={{flex:1,paddingTop:10,backgroundColor:'#f3f3f3'}}>
				<TouchableHighlight onPress={this.props.onSelect}>
					<Image style={{height:120,resizeMode: Image.resizeMode.cover,backgroundColor:'#cccccc'}} source={{uri:item.img}} />
				</TouchableHighlight>	
				<View style={{position:'absolute',justifyContent :'center',right:0,top:20,width:50,height:20,backgroundColor:'rgba(255,0,0,0.5)'}}>
					<Text style={{textAlign:'center',fontSize:12,color:'#ffffff'}}>还剩3天</Text>
				</View>
				
			</View>
		)
	},

	render() {
		return (
			this.renderListView()
		)
	}
});

var styles = StyleSheet.create({
	listView : {

	}
});













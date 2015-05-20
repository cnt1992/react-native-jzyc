'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var REQUEST_URL = 'http://wq.jd.com/mcoss/focusbi/show?gids=2530&pc=3&callback=bannerAd&r=1431958086950&g_ty=ls';


module.exports = React.createClass({
	fetchBanner : function () {
		fetch(REQUEST_URL,{mode : 'cors'})
			.then( (response)=> response.json() )
			.then((responseData)=> {
				this.setState({
					bannerURL : responseData
				});
			})
			.catch((error)=>{
				console.warn(error);
			})
			.done();
	},

	getInitialState : function () {
		return {
			bannerURL : 'http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg',
		}
	},

	componentDidMount: function(){
        this.fetchBanner();
    },

	render () {
		return (
			<View style={{flex:1,height:145,backgroundColor:'#000000'}}>
				<Image style={{height:145,resizeMode: Image.resizeMode.cover}} source={{ uri : this.state.bannerURL }} />
			</View>
		);
	}
});
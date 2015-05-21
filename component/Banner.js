'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');

var {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} = React;

var REQUEST_URL = 'http://wq.jd.com/mcoss/focusbi/show?gids=2530&pc=3&callback=bannerAd&r=1431958086950&g_ty=ls';
var {width, height, scale} = Dimensions.get('window');

module.exports = React.createClass({
	mixins : [TimerMixin],

	//默认值
	getDefaultProps() {
		return {
			width: width,
			timer: 5000,
			indicatorColor : '#f00'
		}
	},

	fetchBanner : function () {
		var _this = this;
		fetch(REQUEST_URL,{mode : 'cors'})
			.then( (response)=> response.json() )
			.then((responseData)=> {
				this.setState({
					
				});
			})
			.catch((error)=>{
				console.warn(error);
			})
			.done(function () {
				_this.start();
			});
	},

	getInitialState : function () {
		return {
			currentX : 0,
			activePage : 0,
			bannerURL : ['http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg','http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg','http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg'],
		}
	},

	componentDidMount: function(){
        this.fetchBanner();
    },

    start() {
    	var scrollView = this.refs.scrollView;
    	var len = this.state.bannerURL.length;
    	//console.log(len,'len');

    	this.timer = this.setInterval(function () {
    		var activePage;

    		if ( (this.state.activePage + 1) >= len ) {
    			activePage = 0;
    		} else {
    			activePage = this.state.activePage + 1;
    		}

    		var currentX = this.props.width * activePage;
    		scrollView.scrollResponderScrollTo(currentX,0);

    		this.setState({
    			currentX : currentX,
    			activePage : activePage
    		});
    	}, this.props.timer);
    },

    renderItem(data) {
    	return data.map(function (item, i) {
    		return (
				<Image key={i} style={{height:145,width:width,resizeMode: Image.resizeMode.cover}} source={{ uri : item }} />
    		);
    	});
    },

	render () {
		var data = this.state.bannerURL;

		return (
			<View style={styles.container}>
				<ScrollView
					ref='scrollView'
					contentContainerStyle={styles.container}
					automaticallyAdjustContentInsets={false}
					horizontal={true}
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					onMomentumScrollEnd={this.onAnimationEnd}
				>
					{this.renderItem(data)}
				</ScrollView>
				{this.renderPageInicator()}
			</View>
		)
	},

	renderPageInicator : function () {
		var indicators = [],
			len = this.state.bannerURL.length,
			activePage = this.state.activePage,
			style;

		for ( var i = 0; i < len; i++ ) {
			style = i === activePage ? {color: this.props.indicatorColor,opacity:1} : {color: this.props.indicatorColor,opacity:0.2};
			indicators.push(<Text key={i} style={[style,{fontSize:30}]}>&bull;</Text>);
		}

		return (
			<View style={styles.pageIndicator}>
				{indicators}
			</View>
		)
	},

	onAnimationEnd(e) {
		var activePage = e.nativeEvent.contentOffset.x / this.props.width;
		 this.setState({
		 	currentX : e.nativeEvent.contentOffset.x,
		 	activePage : activePage
		 });
	}
});

var styles = StyleSheet.create({
	container : {
		flex : 1
	},
	pageIndicator : {
		position : 'absolute',
		backgroundColor : 'transparent',
		right : 10,
		bottom : -10,
		flexDirection : 'row'
	}
});
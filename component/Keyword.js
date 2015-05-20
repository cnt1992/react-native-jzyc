'use strict';

var React = require('react-native');

var _keyword = ['全部','女装','男装','女鞋','男鞋','奢侈品','箱包','运动','配饰','童装'];

var {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  AlertIOS,
  Text,
  Image
} = React;
                
//var renderKeyword = (item,i) => <TouchableWithoutFeedback onPress={() => this.handleOpenTabs()}><View key={i} style={styles.keyword}><Text style={styles.keyword_txt}>{item}</Text></View></TouchableWithoutFeedback>;

module.exports = React.createClass({
	handleOpenTabs() {
        AlertIOS.alert(
            '提示',
            '别乱点年轻人！！',
            [
              {text: '确定'}
            ]
          )
    },
    renderItems (data) {
    	var _this = this;
    	return data.map(function (item ,i) {
    		return(
    			<TouchableWithoutFeedback onPress={() => _this.handleOpenTabs()}>
    				<View key={i} style={styles.keyword}>
    					<Text style={styles.keyword_txt}>{item}</Text>
    				</View>
    			</TouchableWithoutFeedback>
    		);
    	});
    },
	render () {
		return (
			<View style={{flex:1,flexDirection:'row'}}>
				<ScrollView
					horizontal={true}
					contentInset={{top:-10}}
					removeClippedSubviews={true}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					centerContent={true}
					style={styles.keyword_wrap}
					contentContainerStyle={styles.contentStyle}>
					{this.renderItems(_keyword)}
				</ScrollView>
				<TouchableOpacity  onPress={() => this.handleOpenTabs()}>
            <View style={styles.tabBtn}>
                <Image style={styles.tabBtnIcon} source={{uri : 'http://gtms04.alicdn.com/tps/i4/TB1TlZwHpXXXXcXXpXXEDhGGXXX-32-32.png'}} />
            </View>
        </TouchableOpacity>
      </View>
		);
	}
});

var styles = StyleSheet.create({
  keyword_wrap: {
    flex : 1,
    height : 40,
    borderBottomColor : '#eeeeee',
    borderBottomWidth : 1,
    borderTopColor : '#eeeeee',
    borderTopWidth : 1,
    backgroundColor: '#FAFAFA',
  },
  contentStyle : {
    flex : 1,
    flexDirection : 'row', 
    //justifyContent: 'center',
  },
  keyword : {
  	height : 40,
  	marginRight : 20,
  	paddingLeft : 20,
  },
  keyword_txt : {
  	justifyContent : 'center',
  	lineHeight : 25,
  	fontSize : 12,
  	color : '#333333'
  },
  tabBtn : {
    width : 40,
    height : 40,
    backgroundColor : '#FAFAFA',
    borderLeftWidth : 1,
    borderLeftColor : '#eeeeee',
    borderTopColor : '#eeeeee',
    borderTopWidth : 1,
    justifyContent: 'center', alignItems: 'center',
  },
  tabBtnIcon:{
    width : 16,
    height : 16
  }
});
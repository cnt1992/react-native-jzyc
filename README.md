# react-native-jdyc

## 运行
1. 已经安装了React Native所需的依赖环境
2. 在工程目录下启动终端执行 `npm install`，若提示权限不足，可执行 `sudo npm install`
3. 执行 `npm start`
4. 在`Xcode`中点击`run`或者`command + R`运行程序

## 小总结

### 图片响应式

react native中，图片必须写大小值，不然默认宽高都是0,而且react native的flex不支持`width:100%`这种写法。

如果需要响应式的图片，有两种方法：

1. 图片只写高度值，不写宽度值，外层容器使用`flex`来做布局，再配合`resizeMode`:`cover`/`contain`/`stretch`实现图片响应式:

    ```
        <View style={{flex:1,height:145,backgroundColor:'#000000'}}>
            <Image style={{height:145,resizeMode: Image.resizeMode.cover}} source={{ uri : this.state.bannerURL }} />
        </View>
    ```

2. 获取设备viewport的宽高直接计算，直接看栗子：

    ```
        var Demensions = require('Demensions');
        var {width,height,scale} = Dimensions.get('window');
        <Image style={{height:145,width:width}} source={{ uri : 'http://img13.360buyimg.com/focus/jfs/t1072/46/892897949/46190/f5f6dd2a/5555cdd8Nec178815.jpg' }} />
    ```

### layout-css

react-native采用`flex`布局，经过这次的实践，还是能够满足基本页面布局。虽然没有`position:fixed`来固定定位，但是可以利用原生组件或者其它比较麻烦的手段实现。

react-native目前实现了50多种样式，跟`css`相比还有很多属性没有实现，写法也相对比较麻烦，如`web`中的`margin:3px 4px 5px 6px`在react-native中必须写成`marginTop:3,marginRight:4,marginBottom:5,marginLeft:6`。

值得注意的是`position:'absolute'`定位是相对父级，不论父级是否写了定位方式。

### es6

react-native用到了`ecmascript6`的语法，举例：

* 数组析构

    ```
        var {
            StyleSheet,
            View,
            Text,
        } = React;
    ```

    其实就相当于:
    ```
        var StyleSheet = React.Stylesheet;
        var View = React.View;
        var Text = React.Text;
    ```

* 箭头函数

    ```
        AppRegistry.registerComponent('jzyc', () => jzyc);
    ```

    箭头函数采用`input`=>`output`这种形式，上面语句等同于:
    ```
       AppRegistry.registerComponent('jzyc', function () { return jzyc; });
    ```

## 效果图

![image](http://cnt1992.sinaapp.com/static_img/home.jpg)
![image](http://cnt1992.sinaapp.com/static_img/list.png) 
    

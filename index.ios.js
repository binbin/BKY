/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import  {
  AppRegistry,
    tabBarStylesheet,
    TabBarIOS,
    Text,
    View,
    StyleSheet
    } from 'react-native';

import copyKeys from './components/utils/copyKeys.js'
import NavigationBar from './components/react-native-navigationbar/lib/index.js';//引入头部导航条

class BKY extends React.Component{
    constructor(props){
        super();
        this.state = {
         selectedTab: '自定义',
         notifCount: 0,
         presses: 0
        };
        /**
         * 系统自带的icon
         */
        this.tabIndicator = copyKeys([
            'bookmarks',
            'contacts',
            'downloads',
            'favorites',
            'featured',
            'history',
            'more',
            'most-recent',
            'most-viewed',
            'recents',
            'search',
            'top-rated']);
        this._renderContent = this._renderContent.bind(this);
    }
    _renderContent(color, pageText,num) {
        return (
            <View style={{flex:1}}>
              <NavigationBar
                    title={this.props.title}
                    IsBackText={true}
                    backName={`组件列表`}
                    backFunc={()=>{
                    this.props.navigator.pop()
                }}
                    />
                <View style={[tabBarStyles.tabContent,{backgroundColor: color}]}>
                    <Text style={tabBarStyles.tabText}>{pageText}</Text>
                    <Text style={tabBarStyles.tabText}>{num} re-renders of the {pageText}</Text>
                </View>
            </View>

        )}
    _renderProps(type,otherState={}){
        let tabIndicator = this.tabIndicator;
        let sysBool = tabIndicator.hasOwnProperty(type);
        let iconSet = sysBool?{systemIcon:type}:{};
        return {
            title: type,
            ...iconSet,
            selected: this.state.selectedTab === type,
            onPress: () => {
                this.setState({
                    selectedTab: type,
                    ...otherState
                });
            }
        }
    }
    render() {
    return (
        <TabBarIOS
            tintColor="darkorange"
            barTintColor="white">

            <TabBarIOS.Item
                {...this._renderProps.call(this,'自定义')}
                icon={require('./Assets/starIcon.png') }
               >
               {this._renderContent('azure', '使用azure背景色，自定义icon')}
            </TabBarIOS.Item>

            <TabBarIOS.Item
                {...this._renderProps.call(this,this.tabIndicator['downloads'])}>
                {this._renderContent('sandybrown', '使用sandybrown作为背景色')}
            </TabBarIOS.Item>

            <TabBarIOS.Item
                {...this._renderProps.call(this,this.tabIndicator['more'])}>
                {this._renderContent('mintcream', '使用mintcream作为背景色')}
            </TabBarIOS.Item>

            <TabBarIOS.Item
                {...this._renderProps.call(this,this.tabIndicator['history'],{notifCount: this.state.notifCount + 1})}
                badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}>
                {this._renderContent('cornsilk', '使用cornsilk作为背景色', this.state.notifCount)}
            </TabBarIOS.Item>

            <TabBarIOS.Item
                {...this._renderProps.call(this,this.tabIndicator['contacts'],{ presses: this.state.presses + 1})}>
                {this._renderContent('lavender', '使用lavender作为背景色', this.state.presses)}
            </TabBarIOS.Item>

        </TabBarIOS>
    )}
};

var tabBarStyles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center'
    },
    tabText: {
        color: '#111',
        margin: 50,
        fontSize:17
    }
});

AppRegistry.registerComponent('BKY', ()=>BKY);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   SegmentedControlIOS,
// } from 'react-native'

// class BKY extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//           <SegmentedControlIOS 
//             values={['A', 'B', 'C']}
//             momentary={true}
//             tintColor={'black'}
//             style={{
//               width: 100,
//             }}
//             selectedIndex={(this.state && this.state.scIndex) || 0}
//             onValueChange={(value) => {}}
//             onChange={(event) => {
//               this.setState({
//                 scIndex: event.nativeEvent.selectedSegmentIndex
//               })
//             }}
//           />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('BKY', () => BKY);

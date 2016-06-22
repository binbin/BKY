import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Picker from 'react-native-picker'

export default class SchoolList extends Component{
	constructor(props){
	        super(props);
	    }
	 _onPressHandle(){
		this.picker.toggle();
	}
	render(){

		return (<View>
			<TouchableOpacity style={{marginTop: 20}} onPress={this._onPressHandle.bind(this)}>
					<Text>点我</Text>
			</TouchableOpacity>
			<Picker
			        ref={picker => this.picker = picker}
			        style={{
			            height: 300
			        }}
			        showDuration={300}
			        showMask={true}
			        pickerData={[1,2,3,4]}//picker`s value List
			        selectedValue={3}//default to be selected value
			    />
		</View>)
	}
}
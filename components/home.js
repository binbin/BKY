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
} from 'react-native';


export default class Home extends Component{
	 constructor(props){
	        super(props);
	    }
	 render(){
	 	return (<View style={styles.box}>
	 		           <Text>2016内蒙古分数线:</Text>
		 		<View style={styles.brandbox_box}>
		 			<View style={styles.brandbox}>
		 			    <Text style={styles.brandbox_text}>理科</Text>
		 			    <Text style={styles.brandbox_text}>本科一批:</Text>
		 			    <Text style={styles.brandbox_text}>本科二批:</Text>
			 		</View>
			 		<View style={styles.brandbox}>
			 		    <Text style={styles.brandbox_text}>文科</Text>
		 			    <Text style={styles.brandbox_text}>本科一批:</Text>
		 			    <Text style={styles.brandbox_text}>本科二批:</Text>	
			 		</View>
		 		</View>

		 	</View>)
	 }
}

var styles={
    box:{
    	 marginTop: 100,
	    padding: 8,
	    backgroundColor: 'white',
    	},
    brandbox_box:{
         flexDirection: 'row'
    },	
    brandbox:{
    	flex:1
    },
    brandbox_text:{
        fontSize:16,
        height:30,
        lineHeight:30,
       // textAlign: 'center',
       // justifyContent: 'center',
        backgroundColor:'oldlace'
    }
}
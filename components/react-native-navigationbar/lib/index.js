'use strict'

// Module dependencies

import React, { Component } from 'react';

import  {
  Text,
  View,
  Image,
  TouchableOpacity
}  from 'react-native';

import styles from './styles.js'

let PropTypes = React.PropTypes



const STATUS_BAR_HEIGHT = 20
const NAV_BAR_HEIGHT = 44

module.exports = React.createClass({

  propTypes: {
    title: PropTypes.string,
    backFunc: PropTypes.func,
    tintColor: PropTypes.string,
    titleTextColor: PropTypes.string,
    barTintColor: PropTypes.string,
    actionIcon: PropTypes.bool,
    actionName: PropTypes.string,
    actionFunc: PropTypes.func,
    actionTextColor: PropTypes.string,
    backHidden: PropTypes.bool,
    statusbarPadding: PropTypes.bool,
    backColor: PropTypes.string,
    barBottomColor: PropTypes.string,
    barBottomThickness: PropTypes.number,
    /**
     * 是否显示上个层级的名字
     */
    IsBackText: PropTypes.bool,
    /**
     * 自定义上个层级的名字
     */
    backName: PropTypes.string,
    barOpacity: PropTypes.number,
    barStyle: PropTypes.number // add extended style for navigationBar
  },

  getDefaultProps () { // 返回默认的一些属性值
    return {
      title: 'title',
      backFunc () {},
      tintColor: '#777',
      backColor: '#777',
      titleTextColor: '#333',
      barTintColor: 'white',
      actionIcon: false,
      actionName: '',
      actionFunc () {},
      actionTextColor: '#666',
      backHidden: false, // 控制是否出现左侧菜单
      IsBackText: false, // 控制是选择icon还是text
      backName: 'back',
      backTextColor: '#666',
      statusbarPadding: true,
      barBottomColor: '#d4d4d4',
      barBottomThickness: 0.5,
      barOpacity: 1,
      barStyle: 0
    }
  },

  render () {
    return (
      <View style={
          [styles.navbar,
            {
              backgroundColor: this.props.barTintColor,
              height: this.props.statusbarPadding ? NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT : NAV_BAR_HEIGHT,
              borderColor: this.props.barBottomColor,
              borderBottomWidth: this.props.barBottomThickness,
              opacity: this.props.barOpacity
            },
            this.props.statusbarPadding ? { paddingTop: STATUS_BAR_HEIGHT } : {}, this.props.barStyle]}>
        {
          !this.props.backHidden
          ? <TouchableOpacity
              style={styles.backWrapper}
              onPress={this.props.backFunc}>

               <View style={[styles.icon, {borderColor: this.props.backColor}]}></View>
                  { this.props.IsBackText?
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={[styles.actionName, {color: this.props.backColor}]} numberOfLines={1}>
                        {this.props.backName}
                        </Text>
                      </View>:null

              }
            </TouchableOpacity> : null
        }
        <Text style={[styles.title, {color: this.props.titleTextColor}]} numberOfLines={1}>{this.props.title}</Text>
        {
          this.props.actionName
          ? <TouchableOpacity style={[styles.actionBtn, {bottom: (NAV_BAR_HEIGHT - 20 )/ 2}]} onPress={this.props.actionFunc.bind(this)}>
            <Text style={[styles.actionName, { color: this.props.actionTextColor }]}>{this.props.actionName}</Text>
          </TouchableOpacity> : null
        }
        {
          this.props.actionIcon
          ? <TouchableOpacity style={[styles.actionIcon, {bottom: (NAV_BAR_HEIGHT - 40 )/ 2}]} onPress={this.props.actionFunc.bind(this)}>
              <Image source={require('./add.png')}/>
          </TouchableOpacity> : null
        }
      </View>
    )
  }
})

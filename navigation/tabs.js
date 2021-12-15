import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image} from 'react-native';

import ImportScreen from '../screens/ImportScreen';
import FolderScreen from '../screens/FolderScreen';
import EventScreen from '../screens/EventScreen';
import VideoScreen from '../screens/VideoScreen';
import SearchScreen from '../screens/SearchScreen';
import DeleteScreen from '../screens/DeleteScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: 'black',
          borderRadius: 35,
          borderBottomEndRadius: 0,
          borderBottomStartRadius: 0,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Import"
        component={ImportScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.naviBarIconView}>
              <Image
                source={require('../assets/icons/import.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#54d3c2' : '#d5dbdb',
                }}
              />
              <Text
                style={{color: focused ? '#54d3c2' : '#d5dbdb', fontSize: 12}}>
                Import
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Folders"
        component={FolderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.naviBarIconView}>
              <Image
                source={require('../assets/icons/folder.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#54d3c2' : '#d5dbdb',
                }}
              />
              <Text
                style={{color: focused ? '#54d3c2' : '#d5dbdb', fontSize: 12}}>
                Folders
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.naviBarIconView}>
              <Image
                source={require('../assets/icons/event.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#54d3c2' : '#d5dbdb',
                }}
              />
              <Text
                style={{color: focused ? '#54d3c2' : '#d5dbdb', fontSize: 12}}>
                Events
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={VideoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.naviBarIconView}>
              <Image
                source={require('../assets/icons/video.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#54d3c2' : '#d5dbdb',
                }}
              />
              <Text
                style={{color: focused ? '#54d3c2' : '#d5dbdb', fontSize: 12}}>
                Videos
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.naviBarIconView}>
              <Image
                source={require('../assets/icons/magnifier.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#54d3c2' : '#d5dbdb',
                }}
              />
              <Text
                style={{color: focused ? '#54d3c2' : '#d5dbdb', fontSize: 12}}>
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Delete"
        component={DeleteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.naviBarIconView}>
              <Image
                source={require('../assets/icons/delete.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#54d3c2' : '#d5dbdb',
                }}
              />
              <Text
                style={{color: focused ? '#54d3c2' : '#d5dbdb', fontSize: 12}}>
                Delete
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  naviBarIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
});

export default Tabs;

import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const SearchScreen = ({}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textStyle}
        placeholder="Enter Here..."></TextInput>
      <TouchableOpacity style={styles.icon}>
        <Image
          source={require('../assets/icons/image.png')}
          resizeMode="contain"
          style={{
            width: 35,
            height: 35,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Image
          source={require('../assets/icons/magnifier.png')}
          resizeMode="contain"
          style={{
            width: 35,
            height: 35,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'pink',
  },
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
    margin: 10,
    padding: 2,
    height: 60,
  },
  textStyle: {
    flex: 1,
    backgroundColor: '#a8adb5',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 20,
    color: '#ffffff',
  },
  icon: {
    margin: 5,
  },
});

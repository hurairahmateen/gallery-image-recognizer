import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FolderScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Folder Screen</Text>
    </View>
  );
};

export default FolderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5dbdb',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});

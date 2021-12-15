import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
const RNFS = require('react-native-fs');

/**
 * This Screen displays the Import Screen
 * @param {*} param0
 * @returns
 */
const ImportScreen = ({}) => {
  const [imageFiles, setimageFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * This function reads directory and iterates over the files.
   * @param {*} path
   */
  const processDir = async (path, loadedFiles) => {
    const dirItems = await RNFS.readDir(path);

    for (const item of dirItems) {
      if (
        item.isFile() &&
        (item.name.endsWith('.png') ||
          item.name.endsWith('.jpg') ||
          item.name.endsWith('.jpeg'))
      ) {
        loadedFiles.push(item);
        // console.log('Name', item.name);
        // console.log('Path', item.path);
      } else if (item.isDirectory()) {
        await processDir(item.path, loadedFiles);
      }
    }
  };

  if (imageFiles.length === 0) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={async () => {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                  title: 'Permission',
                  message: 'Gallery Image Recognizer needs to read storage ',
                },
              );

              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setIsLoading(true);

                const dirItems = await RNFS.readDir(
                  RNFS.ExternalStorageDirectoryPath,
                ); // https://stackoverflow.com/a/47377846

                const allowedFolders = ['dcim', 'pictures'];

                const loadedFiles = [];

                for (const item of dirItems) {
                  if (
                    item.isDirectory() &&
                    allowedFolders.includes(item.name.toLowerCase())
                  ) {
                    await processDir(item.path, loadedFiles);
                  }
                }

                setimageFiles(loadedFiles);
              } else {
                console.log(
                  'Permission Denied!',
                  'You need to give permission',
                );
              }
            } catch (err) {
              console.log(err.message, err.code);
            }

            setIsLoading(false);
          }}>
          <View style={styles.buttonStyle}>
            <Image
              source={require('../assets/icons/import.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
            <Text style={styles.textStyle}>Import</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  if (isLoading) {
    <Text style={styles.textStyle}>Loading Files...</Text>;
  }

  return (
    <View>
      <FlatList
        data={imageFiles}
        renderItem={({item}) => (
          <View>
            <Image
              style={styles.imageSize}
              source={{
                uri: `file://${item.path}`,
              }}
            />
            <Text style={styles.textStyle}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.path}
      />
      <Text style={styles.textStyle}>{imageFiles.length}</Text>
    </View>
  );
};

export default ImportScreen;

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
    textAlign: 'center',
    color: 'black',
  },
  buttonStyle: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#54d3c2',
    borderRadius: 20,
    width: 150,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 90,
    height: 90,
  },
});

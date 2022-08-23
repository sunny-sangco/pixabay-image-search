import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import ImageTag from '../../components/ImageTag';

const ImageItem = ({disabled, onPress, item}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.itemRow}
        disabled={disabled}
        onPress={onPress}>
        <Image style={styles.image} source={{uri: item.webformatURL}} />
      </TouchableOpacity>
      {disabled ? (
        <>
          <ImageTag tags={item.tags} />
          <Text style={styles.text}>Author: {item.user}</Text>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});

export default ImageItem;

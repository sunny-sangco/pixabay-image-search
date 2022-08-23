import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import ImageItem from '../../components/ImageItem';

const DetailScreen = () => {
  const {imageDetails} = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <ImageItem disabled={true} item={imageDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default DetailScreen;

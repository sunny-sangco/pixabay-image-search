import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../../context/GlobalContext';

const ImageTag = ({tags}) => {
  const navigation = useNavigation();

  const {
    setSearchKey,
    setSearchResult,
    setCurrentPage,
  } = useContext(GlobalContext);

  const onTagPressed = (tag) => {
    setSearchResult([]);
    setCurrentPage(1);
    setSearchKey(tag);
    navigation.push('Result');
  };

  return (
    <View
      style={styles.container}>
      {tags.split(', ').map((tag, i) => (
        <View>
          <TouchableOpacity onPress={() => onTagPressed(tag.split(' ').shift())}>
            <View>
              <Text style={styles.tag}>
                {i > 0}
                {tag.split(' ').shift()}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    padding: 10
  },
  tag: {
    backgroundColor: '#3B71F3',
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    marginRight: 5,
    borderRadius: 10,
  },
});

export default ImageTag;

import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const CustomLoader = ({isLoading}) => {
  return isLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
  },
});

export default CustomLoader;

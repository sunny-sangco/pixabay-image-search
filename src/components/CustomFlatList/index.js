import {FlatList} from 'react-native';
import React from 'react';

const CustomFlatList = ({
  data,
  renderItem,
  ListFooterComponent,
  onEndReached,
}) => {
  return (
    <FlatList
      data={data}
      extraData={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={ListFooterComponent}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
    />
  );
};

export default CustomFlatList;

import {StyleSheet, View} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getImages} from '../../services/PixabayApiService';
import {GlobalContext} from '../../context/GlobalContext';
import ImageItem from '../../components/ImageItem';
import CustomFlatList from '../../components/CustomFlatList';
import CustomLoader from '../../components/CustomLoader';

const ResultScreen = () => {
  const navigation = useNavigation();

  const {
    searchKey,
    searchResult,
    setSearchResult,
    isLoading,
    setIsLoading,
    currentPage,
    setCurrentPage,
    setImageDetails,
    setRefresh
  } = useContext(GlobalContext);

  const onImagePressed = data => {
    setImageDetails(data);
    navigation.navigate('Detail');
  };

  useEffect(() => {
    let timeoutVariable;

    timeoutVariable = setTimeout(() => setRefresh(false), 1000);

    setIsLoading(true);
    getImages(searchKey, currentPage).then(images => {
      setSearchResult(searchResult.concat(images));
      setIsLoading(true);
      console.log(currentPage)
    });

    return () => {
      clearTimeout(timeoutVariable);
    };
  }, [currentPage]);

  const loadMoreResult = () => {
    setCurrentPage(currentPage + 1);
    setIsLoading(true);
  };

  return (
    <View style={styles.container}>
      <CustomFlatList
        data={searchResult}
        renderItem={({item}) => (
          <ImageItem
            disabled={false}
            item={item}
            onPress={() => onImagePressed(item)}
          />
        )}
        ListFooterComponent={<CustomLoader isLoading={isLoading} />}
        onEndReached={() => {
          loadMoreResult();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ResultScreen;

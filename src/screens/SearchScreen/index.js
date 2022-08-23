import {View, StyleSheet, Alert} from 'react-native';
import React, {useContext} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../../context/GlobalContext';

const SearchScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  value = {searchKey, setSearchKey, setSearchResult, setCurrentPage} =
    useContext(GlobalContext);

  const onSearchPressed = data => {
    setSearchResult([]);
    setCurrentPage(1);
    setSearchKey(data.search);
    !searchKey
      ? Alert.alert('please enter search key words')
      : navigation.navigate('Result');
  };

  return (
    <View style={styles.container}>
      <CustomInput
        name="search"
        placeholder="Search Anything......"
        control={control}
      />
      <CustomButton
        onPress={handleSubmit(onSearchPressed)}
        text="Search Image"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default SearchScreen;

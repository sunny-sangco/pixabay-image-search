import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {Controller} from 'react-hook-form';

const CustomInput = (
{  control,
  name,
  placeholder,}
) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange, onBlur}}) => (
        <>
        <View style={styles.container}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onblur={onBlur}
            placeholder={placeholder}
            style={styles.input}
          />
        </View>
       
        </>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 18,
    marginVertical: 5,
  }
});

export default CustomInput
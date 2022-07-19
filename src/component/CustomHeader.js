import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'red',
        marginBottom: 20,
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity onPress={props.onPressBack}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View></View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});

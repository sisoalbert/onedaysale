import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Banner = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 20,
      }}>
      <Image
        source={{
          uri: props.url,
        }}
        style={{
          height: 120,
          width: '100%',
          // backgroundColor: 'coral',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  banner: {
    height: 120,
    width: '100%',
    // backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

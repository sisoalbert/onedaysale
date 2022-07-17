import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text>Banner</Text>
        <Text>Banner</Text>
      </View>
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
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

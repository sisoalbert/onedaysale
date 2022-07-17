import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from './CustomStatusBar';

const RNview = ({children}) => {
  return (
    //   <View style={[{ backgroundColor: 'red', height: '50%' }, ...props.style]}>

    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#0193CF', '#1D63A1']}
      style={styles.linearGradient}>
      <CustomStatusBar />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default RNview;

const styles = StyleSheet.create({
  linearGradient: {
    // height: '100%',
    flex: 1,
  },
  container: {
    // backgroundColor: 'white',
    height: '200%',
    // flex: 1,
  },

  input: {
    backgroundColor: 'coral',
    height: '50%',
  },
});

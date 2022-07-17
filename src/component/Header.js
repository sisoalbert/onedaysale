import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = () => {
  // console.log('statusBarHeight: ', StatusBar.currentHeight);
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0193CF', '#1D63A1']}
        style={styles.linearGradient}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 100,
            //   backgroundColor: '#f8f8f8',
            alignItems: 'center',
            paddingHorizontal: 20,
            // marginVertical: 10,
          }}>
          <Text style={styles.buttonText}>onedaysale</Text>
          <Text style={styles.buttonText}>08:01:00</Text>
        </View>
      </LinearGradient>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  linearGradient: {
    height: 60,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    // margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

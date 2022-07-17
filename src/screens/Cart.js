import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../component/Header';
import RNview from '../component/RNview';

const Cart = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* <Header /> */}
      <View style={styles.body}>
        <Text>Cart</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
});

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../component/Header';
import RNview from '../component/RNview';
import Banner from '../component/Banner';
import CardLarge from '../component/CardLarge';
import CardMedium from '../component/CardMedium';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useHeaderHeight} from '@react-navigation/elements';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* <Header /> */}
      <View style={styles.body}>
        <ScrollView
        // showsVerticalScrollIndicator="false"
        >
          <Banner />
          <CardLarge />
          <ScrollView
            // showsHorizontalScrollIndicator="false"
            horizontal>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <CardMedium onPress={() => navigation.navigate('Details')} />
            </TouchableOpacity>
            <CardMedium />
            <CardMedium />
          </ScrollView>
          <Button
            title="Go to Cart"
            onPress={() => navigation.navigate('Cart')}
          />
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
          <CardLarge />

          <View style={styles.scroll} />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  body: {
    backgroundColor: 'yellow',
    height: '100%',
  },
  scroll: {
    height: 1000,
  },
});

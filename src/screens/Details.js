import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import RNview from '../component/RNview';

const Details = () => {
  const navigation = useNavigation();
  return (
    <RNview>
      <View style={styles.body}>
        <Text>Details</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </RNview>
  );
};

export default Details;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
});

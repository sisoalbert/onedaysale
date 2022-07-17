import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardLarge = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 30,
              height: 40,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomStartRadius: 5,
              borderTopStartRadius: 5,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                paddingVertical: 5,
              }}>
              -1150%
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 20,
              bottom: 30,
              height: 40,
              //   width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadiusColor: 'black',
              }}>
              500-items
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              paddingVertical: 5,
            }}>
            Arragon Leather
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'grey',
              paddingVertical: 5,
            }}>
            Leather Handmade with many cows
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: 'black',
                paddingVertical: 5,
                paddingRight: 5,
              }}>
              R349
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'grey',
                paddingVertical: 5,
                textDecorationLine: 'line-through',
              }}>
              R700
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,

              backgroundColor: 'coral',
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default CardLarge;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageContainer: {
    height: 300,
    width: '100%',
    borderRadius: 10,

    backgroundColor: 'coral',
  },
});

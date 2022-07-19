import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CardLarge = props => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={props.goToDetails}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: props.url,
              }}
              style={styles.imageContainer}
              resizeMode="contain"
            />

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
                backgroundColor: '#E70D63',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingVertical: 5,
                }}>
                {(
                  (1 - (props.price * 15) / (props.price * 15 + 45)) *
                  100
                ).toFixed(2)}
                %
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
                {props.count}-items
              </Text>
            </View>
          </View>
          <View>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                paddingVertical: 5,
              }}>
              {props.title}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'grey',
                paddingVertical: 5,
              }}>
              {props.description}
            </Text>
          </View>
        </TouchableOpacity>
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
              R{props.price * 15}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'grey',
                paddingVertical: 5,
                textDecorationLine: 'line-through',
              }}>
              R{(props.price * 15 + 45).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={props.addToCart}
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: 'white',
            }}>
            <Text style={{fontSize: 24}}>+</Text>
          </TouchableOpacity>
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

    backgroundColor: 'white',
  },
});

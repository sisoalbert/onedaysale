import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../component/CustomHeader';

//import Header from component folder- this takes props
// import Header from '../components/Header';

//carouselDataIndex
// import Carousel, { Pagination } from "react-native-snap-carousel";

//redux
import {addToCart} from '../redux/features/cart/cartSlice';
import {useDispatch, useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

const DetailsScreen = ({route, navigation, navigation: {goBack}}) => {
  /* 2. Get the param */
  const {
    itemId,
    itemTitle,
    itemPrice,
    itemImage,
    itemDescription,
    carouselDataIndex,
    itemOtherImages,
    data,
  } = route.params;
  // console.log("====================================");
  // console.log(data[carouselDataIndex].other_images);
  // console.log(itemOtherImages);
  // console.log(data);

  // console.log("====================================");

  //carouse imports
  const [index, setIndex] = React.useState(0);
  const [seeMore, setSeeMore] = React.useState(false);
  const isCarousel = React.useRef(null);
  const dispatch = useDispatch();

  // console.log(seeMore);

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 0,
          width: '100%',
          paddingBottom: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
        }}
        key={index}>
        <Image
          source={{uri: item}}
          style={{
            width: 300,
            height: 300,
          }}
          resizeMode={'contain'}
        />
      </View>
    );
  };

  const ScreenButtons = ({CartScreenName}) => {
    //Using this approach, you can render GoToButton anywhere in your app without passing in a navigation prop explicitly and it will work as expected.
    const navigation = useNavigation();

    return (
      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderRadius: 5,
            backgroundColor: '#009ACF',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          // onPress={() => navigation.navigate(CheckoutScreenName)}
          onPress={() => dispatch(addToCart(data))}

          // onPress={() =>
          //   navigation.navigate("Cart", {
          //     itemId: itemId,
          //     itemTitle: itemTitle,
          //     itemPrice: itemPrice,
          //     itemImage: itemImage,
          //     carouselDataIndex: carouselDataIndex,
          //   })
          // }
        >
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderRadius: 5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderWidth: 3,
            borderColor: '#009ACF',
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Cart')}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Go to cart
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <CustomHeader onPressBack={() => goBack()} />
      {/* <Header
        HeaderIconName="arrow-back"
        onPressMenu={() => goBack()}
        onPressCart={() => navigation.navigate('Cart')}
      /> */}

      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 0,
          }}>
          <View style={{width: '100%'}}>
            <_renderItem item={itemImage} index={0} />

            {/* <Carousel
              layout="default"
              layoutCardOffset={0}
              ref={isCarousel}
              data={itemOtherImages}
              renderItem={_renderItem}
              sliderWidth={windowWidth}
              itemWidth={windowWidth}
              onSnapToItem={(index) => setIndex(index)}
              useScrollView={true}
            /> */}
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Pagination
              dotsLength={itemOtherImages.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                marginTop: 0,
                backgroundColor: "rgba(0, 0, 0, 0.92)",
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            /> */}
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{itemTitle}</Text>
        </View>
        {/* set the number of lines to four but with a see more button*/}
        <View style={{paddingHorizontal: 20}}>
          <Text
            numberOfLines={seeMore ? null : 4}
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginTop: 10,
            }}>
            {itemDescription}
          </Text>
          <TouchableOpacity
            onPress={() => {
              //see more functionality
              setSeeMore(!seeMore);
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                marginBottom: 10,
                color: 'blue',
              }}>
              See more
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            R{JSON.stringify(itemPrice * 15)}
          </Text>
        </View>

        <View style={{padding: 20}}>
          <ScreenButtons CartScreenName="Cart" />
        </View>
        <View style={{height: 300}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});

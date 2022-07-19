// import {StyleSheet, Text, View, Button} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import Header from '../component/Header';
// import RNview from '../component/RNview';

// const Cart = () => {
//   const navigation = useNavigation();
//   return (
//     <>
//       {/* <Header /> */}
//       <View style={styles.body}>
//         <Text>Cart</Text>
//         <Button
//           title="Go to Details"
// onPress={() => navigation.navigate('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => navigation.navigate('Home')}
//         />
//       </View>
//     </>
//   );
// };

// export default Cart;

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: 'white',
//     height: '100%',
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
//you can use the useNavigation to provide the navigation prop automatically (through React context, if you're curious).
import {useNavigation} from '@react-navigation/native';
import {
  increment,
  decrement,
  clear,
  removeItem,
} from '../redux/features/cart/cartSlice';
import {cartTotalPriceSelector} from '../redux/selectors';

const amount = 0;

// import CartContainer from "../components/CartContainer";

const CartContainer = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      'Are you sure you want to clear the cart?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => dispatch(clear())},
      ],
      {cancelable: false},
    );
  };

  const renderStoreItems = ({item}) => {
    return (
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image
            style={styles.storeItemImage}
            source={{uri: item.image}}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.title}</Text>
          <Text style={styles.storeItemPrice}>
            R{item.quantity * item.price}
          </Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    // console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}>
                <Text style={styles.cartItemAmountText}>-</Text>

                {/* <Ionicons name="md-remove" size={24} color="black" /> */}
              </TouchableOpacity>
              <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}>
                <Text style={styles.cartItemAmountText}>+</Text>
                {/* <Ionicons name="md-add" size={24} color="black" /> */}
              </TouchableOpacity>
            </View>
            <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}>
                {/* <Ionicons name="md-trash" size={15} color="black" /> */}
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ScreenButtons = ({HomeScreenName, CheckoutScreenName}) => {
    //Using this approach, you can render GoToButton anywhere in your app without passing in a navigation prop explicitly and it will work as expected.
    const navigation = useNavigation();

    return (
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderRadius: 5,
            backgroundColor: '#009ACF',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate(CheckoutScreenName)}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Go to Checkout
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
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: '#009ACF',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={item => item.uid}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Text style={styles.storeItemTitle}>My Cart</Text>
            <TouchableOpacity onPress={AlertItem}>
              <Text style={styles.storeItemPrice}>Clear cart</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.cartFooter}>
              <View style={styles.checkout}>
                {cart.length === 0 ? (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '80%',
                    }}>
                    {/* <Ionicons
                      name="ios-leaf-outline"
                      size={100}
                      color="#e9e9e9"
                    /> */}
                    <Text style={styles.emptyCart}>Your cart is empty</Text>
                  </View>
                ) : (
                  <View>
                    <View style={styles.cartTotal}>
                      <Text style={styles.cartTotalTitle}>Total</Text>
                      <Text style={styles.cartTotalPrice}>
                        R{totalPrice.toFixed(2)}
                      </Text>
                    </View>
                    {/* <Button
                      title="Go to Checkout"
                      onPress={() => navigation.navigate("Home")}
                    /> */}
                    <ScreenButtons
                      HomeScreenName="Home"
                      CheckoutScreenName="Address"
                    />
                  </View>
                )}
              </View>
              {/* <Button title="Go to Home" onPress={props.onPress} /> */}

              <View style={{height: 200}} />
            </View>
          );
        }}
      />
    </View>
  );
};

const Cart = ({navigation, navigation: {goBack}}) => {
  return (
    <>
      <CartContainer />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  storeItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: '#e9e9e9',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeItemImg: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
  },
  storeItemImage: {
    width: '100%',
    height: '100%',
  },
  storeItemInfo: {
    width: '70%',
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  storeItemPrice: {
    fontSize: 16,
    color: 'red',
  },
  addToCart: {
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemRemove: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartFooter: {
    justifyContent: 'space-between',
  },
  cartTotal: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  clearCart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'coral',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

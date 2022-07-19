import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {addToCart} from '../redux/features/cart/cartSlice';
// import {useDispatch, useSelector} from 'react-redux';

// import Data from '../../assets/cartItems';

import Banner from '../component/Banner';
import CardLarge from '../component/CardLarge';

const url = 'https://course-api.com/react-useReducer-cart-project';

const Clearance = props => {
  //   const dispatch = useDispatch();
  const [Data, setData] = useState();

  useEffect(() => {
    // console.log("cart", cart);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  //   console.log(Data);

  const StoreItems = () => {
    const renderStoreItems = ({item}) => {
      const OldLayout = item => {
        return (
          <>
            <View style={styles.storeItem}>
              <View style={styles.storeItemImg}>
                <Image
                  style={styles.storeItemImage}
                  source={{uri: item.image}}
                />
              </View>
              <View style={styles.storeItemInfo}>
                <Text style={styles.storeItemTitle}>{item.title}</Text>
                <Text style={styles.storeItemPrice}>R{item.price * 12} </Text>
                <TouchableOpacity
                  onPress={() => {
                    // dispatch(addToCart(item));
                  }}
                  style={styles.addToCart}>
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        );
      };

      return (
        <>
          <CardLarge
            url={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            count={item.rating.count}
          />
        </>
      );
    };

    const Header = () => {
      return (
        <>
          <Banner
            url={
              'https://images.unsplash.com/photo-1658056060023-be29e72004fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1818&q=80'
            }
          />
        </>
      );
    };

    return (
      <View>
        <FlatList
          ListHeaderComponent={Header}
          data={Data}
          renderItem={renderStoreItems}
          keyExtractor={item => item.id}
          ListFooterComponent={() => <View style={{height: 200}} />}
        />
      </View>
    );
  };
  return (
    <View>
      <StoreItems />
    </View>
  );
};

export default Clearance;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 0,
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
    backgroundColor: 'black',
    padding: 10,
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
});

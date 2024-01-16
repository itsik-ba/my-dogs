import React from 'react';
import { View, Text, Image, Button } from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { globalStyle } from './style/Style';


type RootStackParamList = {
  Cart: { name: string; url: any; price: string};
};

type CartScreenRouteProp = RouteProp<RootStackParamList, 'Cart'>;

const Cart: React.FC<{
  route: CartScreenRouteProp;
}> = ({ route }) => {
  const { name, url, price } = route.params;

  return (
    <View style={globalStyle.card2}>
       <Text style={globalStyle.cardText}>{name}</Text>
       <Image source={url} style={globalStyle.imageStyle} />
       <Text style={globalStyle.cardText}>{price}</Text>
      
      <Button title='Buy' />
      
    </View>
  );
};


export default Cart
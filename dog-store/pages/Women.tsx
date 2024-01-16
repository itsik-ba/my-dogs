import React from 'react';
import { Image, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from './style/Style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { womenShoesData } from './data/Data';

type RootStackParamList = {
  Cart: { name: string; url: any; price: string };
};

type WomenShoe = {
  name: string;
  url: any;
  price: string;
};

type ProfileScreenNavigationProp = NavigationProp<RootStackParamList, 'Cart'>;

const Women = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleClick = (data: WomenShoe) => {
    console.log(data);
    navigation.navigate('Cart', { name: data.name, url: data.url, price: data.price });
  };

  return (
    <ScrollView>
      <View style={globalStyle.container}>
        {womenShoesData.map((data: { name: any; url: any; price: any; }, index: React.Key | null | undefined) => (
          <TouchableOpacity
            style={globalStyle.card}
            key={index}
            onPress={() => handleClick(data)}
          >
            <Text style={globalStyle.cardText}>{data.name}</Text>
            <Image
              key={index}
              source={data.url}
              style={globalStyle.imageStyle}
            />
            <Text style={globalStyle.cardText}>{data.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Women;
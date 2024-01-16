import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { womenShoesData } from './data/Data';
import { styleAdmin } from './style/StyleAdmin';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';

const Admin = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [showAllItems, setShowAllItems] = useState(true);
  const [shoesData, setShoesData] = useState(womenShoesData);
  // const baseImagePath = '/path/to/images/';

  const handleAddItem = () => {
    if (name.trim() !== '' && url.trim() !== '' && price.trim() !== '') {
      const newItem = { name, url, price };
      setShoesData((prevData) => [...prevData, newItem]);
      setName('');
      setUrl('');
      setPrice('');
      setShowAllItems(true);
    } else {
      Alert.alert('Input Error', 'Please fill in all fields before adding an item.');
    }
  };

  const handleDeleteItem = (index: number) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setShoesData((prevData) => {
              const newData = [...prevData];
              newData.splice(index, 1);
              return newData;
            });
            // Set showAllItems to true after deletion
            setShowAllItems(true);
            setSelectedItemIndex(null);
          },
          style: "destructive",
        },
      ]
    );
  };
  
  const handleUpdateItem = (index: number) => {
    const selectedItem = shoesData[index];
    setName(selectedItem.name);
    setUrl(selectedItem.url);
    setPrice(selectedItem.price);
    setSelectedItemIndex(index);
    setShowAllItems(false);
  };

  const handleConfirmUpdate = () => {
    if (selectedItemIndex !== null) {
      const updatedItem = { name, url, price };
      setShoesData((prevData) => {
        const newData = [...prevData];
        newData[selectedItemIndex] = updatedItem;
        return newData;
      });
      setName('');
      setUrl('');
      setPrice('');
      setSelectedItemIndex(null);
      setShowAllItems(true);
    }
  };

  const handlePickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response: any) => {
        if (!response.error && response.uri) {
          setUrl(response.uri);
        } else if (response.error) {
          console.error(response.error);
        }
      }
    );
  };

  return (
    <View style={styleAdmin.container}>
      <Text style={styleAdmin.header}>Admin Panel</Text>
      <TextInput
        style={styleAdmin.inputText}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styleAdmin.inputText}
        placeholder="Image URL"
        value={url}
        onChangeText={(text) => setUrl(text)}
      />
      <TouchableOpacity onPress={handlePickImage} style={styleAdmin.button}>
        <Text style={styleAdmin.textButton}>Pick Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styleAdmin.inputText}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <View style={styleAdmin.buttonContainer}>
        <TouchableOpacity onPress={handleAddItem} style={styleAdmin.button}>
          <Text style={styleAdmin.textButton}>Add</Text>
        </TouchableOpacity>
        {selectedItemIndex !== null && (
          <TouchableOpacity
            onPress={handleConfirmUpdate}
            style={styleAdmin.button}
          >
            <Text style={styleAdmin.textButton}>Confirm Update</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
          data={showAllItems ? shoesData : []}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
          
            if (!item) {
              return null; // Skip rendering if the item is undefined
            }

            console.log("Item URL:", item.url);

            return (
              <View style={styleAdmin.listContainer}>
                <Text style={styleAdmin.listFonts}>{item.name}</Text>
                {item.url && (
                  <Image source={typeof item.url === 'string' ? { uri: item.url } : item.url} style={styleAdmin.image} />
                )}
                <Text style={styleAdmin.listFonts}>{item.price}</Text>
                <View style={styleAdmin.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => handleDeleteItem(index)}
                    style={styleAdmin.icons}
                  >
                    <Icon name="delete" size={24} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleUpdateItem(index)}
                    style={styleAdmin.icons}
                  >
                    <Icon name="update" size={24} color="blue" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
    </View>
  );
};

export default Admin;

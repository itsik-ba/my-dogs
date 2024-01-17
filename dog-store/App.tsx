import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image} from 'react-native';
import { globalStyle } from './pages/style/Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator()

import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Dogs from './pages/Dogs';


const SCREENS = {
  DOGS: 'Dogs',
  CART: 'Cart',
  ADMIN: 'Admin',
};


const AdminButton = () => {
  const navigation = useNavigation();


  const handleAdmin = () => {
    try {
      const screenName = 'Admin' as 'Admin';
      navigation.navigate(screenName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={handleAdmin}>
      <Image source={require("./assets/admin-64.png")} />
    </TouchableOpacity>
  );
};


export default function App() {
  return (
<>
<NavigationContainer>
     <SafeAreaView style={globalStyle.container}>
     <Text style={globalStyle.logo}>
           Dogs
         </Text>
         <GestureHandlerRootView>
          <AdminButton />
          </GestureHandlerRootView>

       <Stack.Navigator>
         <Stack.Screen name="Dogs" component={Dogs} />
         <Stack.Screen name="Cart" component={Cart} />
         <Stack.Screen name="Admin" component={Admin} />
       </Stack.Navigator>

       <StatusBar style="auto" />
      </SafeAreaView>
  </NavigationContainer>
  </>
  );
}
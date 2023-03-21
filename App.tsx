import 'react-native-gesture-handler'; //dont remove used for drawer navigation

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Logs } from 'expo'
import { ImageBackground, SafeAreaView, useColorScheme, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Text,
} from "react-native";

Logs.enableExpoCliLogging()


const Drawer = createDrawerNavigator();

function DevComingSoon(props: any) {
  const navigation = props.navigation;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <View >
        <Text>coming soon...</Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "home",
            title: "home",
          }}
          component={DevComingSoon}
        />
        <Drawer.Screen
          name="other"
          options={{
            drawerLabel: "other",
            title: "other",
          }}
          component={DevComingSoon}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
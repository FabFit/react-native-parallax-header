import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageScreen from './screens/image';
import ImageWithOverlayScreen from './screens/imageWithOverlay';
import CustomHeaderMap from './screens/customHeaderMap';

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="with Image" onPress={() => navigation.navigate('Image')} />
      <Button
        title="with Image and Overlay"
        onPress={() => navigation.navigate('ImageWithOverlay')}
      />
      <Button
        title="with Map Header"
        onPress={() => navigation.navigate('Maps')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen
          name="ImageWithOverlay"
          component={ImageWithOverlayScreen}
        />
        <Stack.Screen name="Maps" component={CustomHeaderMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

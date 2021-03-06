import * as React from 'react';
import { View, Button, Alert } from 'react-native';
import ParallaxHeader from '@fabfit/react-native-parallax-header';
import Content from './content';

export default function ImageWithOverlayScreen() {
  return (
    <ParallaxHeader
      maxHeight={300}
      minHeight={100}
      heroImage={{ uri: 'https://source.unsplash.com/user/erondu/600x300' }}
      renderOverlay={() => (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            title="I'm in the overlay"
            onPress={() => Alert.alert('Hey!')}
          />
        </View>
      )}
    >
      <Content title="This is an example of a ParallaxHeader with a standard image and an overlay" />
    </ParallaxHeader>
  );
}

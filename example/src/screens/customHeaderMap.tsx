import * as React from 'react';
import MapView from 'react-native-maps';
import ParallaxHeader from '@fabfit/react-native-parallax-header';
import Content from './content';

export default function CustomHeaderMap() {
  return (
    <ParallaxHeader
      maxHeight={300}
      minHeight={100}
      renderHeader={() => (
        <MapView
          initialRegion={{
            latitude: 51.5074,
            longitude: 0.1278,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      )}
    >
      <Content title="This is an example of a ParallaxHeader with a standard image and an overlay" />
    </ParallaxHeader>
  );
}

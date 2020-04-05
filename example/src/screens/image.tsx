import * as React from 'react';
import ParallaxHeader from '@fabfit/react-native-parallax-header';
import Content from './content';

export default function ImageScreen() {
  return (
    <ParallaxHeader
      maxHeight={300}
      minHeight={100}
      heroImage={{ uri: 'https://source.unsplash.com/user/erondu/600x300' }}
    >
      <Content title="This is an example of a ParallaxHeader with a standard image" />
    </ParallaxHeader>
  );
}

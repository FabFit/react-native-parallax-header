import React from 'react';
import { render } from '@testing-library/react-native';
import ParallaxHeader from './index';

test('[default] ParallaxHeader matches the snapshot', () => {
  const { baseElement, queryByTestId } = render(<ParallaxHeader />);

  expect(queryByTestId('hero-image')).toBeNull();
  expect(baseElement).toMatchSnapshot();
});

test('[custom height] ParallaxHeader matches the snapshot', () => {
  const { baseElement, queryByTestId } = render(
    <ParallaxHeader maxHeight={700} minHeight={300} />
  );

  expect(queryByTestId('hero-image')).toBeNull();
  expect(baseElement).toMatchSnapshot();
});

test('[heroImage] ParallaxHeader matches the snapshot', () => {
  const { baseElement, getByTestId } = render(
    <ParallaxHeader
      heroImage={{ uri: 'https://source.unsplash.com/300x500/?pilates,yoga' }}
    />
  );

  expect(getByTestId('hero-image')).toBeTruthy();
  expect(baseElement).toMatchSnapshot();
});

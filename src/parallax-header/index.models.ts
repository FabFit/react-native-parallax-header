import { ReactElement } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface RenderOverlayParameters {
  scrollPositionY?: any;
  scrollDistance?: number;
  maxHeight?: number;
}

export interface IParallaxHeaderProps {
  maxHeight?: number;
  minHeight?: number;
  heroImage?: ImageSourcePropType;
  renderOverlay?: ({
    scrollPositionY,
    scrollDistance,
    maxHeight,
  }: RenderOverlayParameters) => ReactElement;
  renderHeader?: () => ReactElement;
}

import { ReactElement } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface RenderOverlayParameters {
  scrollPositionY?: any;
  scrollDistance?: number;
  maxHeight?: number;
}

export interface IParallaxHeaderProps {
  children?: ReactElement;
  maxHeight?: number;
  minHeight?: number;
  heroImage?: ImageSourcePropType;
  showsVerticalScrollIndicator?: boolean;
  renderOverlay?: ({
    scrollPositionY,
    scrollDistance,
    maxHeight,
  }: RenderOverlayParameters) => ReactElement;
  renderHeader?: () => ReactElement;
}

import { ReactElement } from 'react';

export interface RenderOverlayParameters {
  scrollPositionY: any;
  scrollDistance: number;
  maxHeight: number;
}

export interface IParallaxHeaderProps {
  maxHeight?: number;
  minHeight?: number;
  heroImageUrl?: string;
  renderOverlay?: ({
    scrollPositionY,
    scrollDistance,
    maxHeight,
  }: RenderOverlayParameters) => ReactElement;
  renderHeader?: () => ReactElement;
}

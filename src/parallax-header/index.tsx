import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { IParallaxHeaderProps } from './index.models';

const ParallaxHeader: React.FunctionComponent<IParallaxHeaderProps> = ({
  maxHeight,
  minHeight,
  children,
  renderOverlay,
  renderHeader,
  heroImage,
}) => {
  const scrollPositionY = new Animated.Value(0);

  const HEADER_MAX_HEIGHT = maxHeight ? maxHeight : 550;
  const HEADER_MIN_HEIGHT = minHeight ? minHeight : 170;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const headerTranslate = scrollPositionY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollPositionY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.7],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollPositionY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  return (
    <View>
      <Animated.ScrollView
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollPositionY } },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}
      >
        <View style={{ marginTop: HEADER_MAX_HEIGHT }}>{children}</View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          { height: HEADER_MAX_HEIGHT },
          { transform: [{ translateY: headerTranslate }] },
        ]}
      >
        {!!heroImage && (
          <>
            <Animated.Image
              style={[
                styles.backgroundImage,
                {
                  opacity: imageOpacity,
                  height: HEADER_MAX_HEIGHT,
                  transform: [{ translateY: imageTranslate }],
                },
              ]}
              source={heroImage}
            />
            {/* <Overlay /> */}
          </>
        )}
        {renderHeader?.()}
      </Animated.View>
      {renderOverlay?.({
        scrollPositionY,
        scrollDistance: HEADER_SCROLL_DISTANCE,
        maxHeight: HEADER_MAX_HEIGHT,
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(45, 51, 59, 1)',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});

export default ParallaxHeader;

# React Native Parallax Header

Animated parallax headers for React Native as seen in our FabFit Studio App.

## Installation

```sh
npm install @fabfit/react-native-parallax-header
```

or

```sh
yard add @fabfit/react-native-parallax-header
```

## Usage

```tsx
import ParallaxHeader from '@fabfit/react-native-parallax-header';

<ParallaxHeader
  maxHeight={300}
  minHeight={100}
  heroImage={{ uri: 'https://source.unsplash.com/user/erondu/600x300' }}
>
  <Text>All children will render below the parallax header</Text>
</ParallaxHeader>;
```

## Props

| Name                 | Description                                           | Default |
| -------------------- | ----------------------------------------------------- | ------- |
| maxHeight (optional) | Sets the maximum height of the header                 | 550     |
| minHeight (optional) | Sets the minimum height of the header                 | 170     |
| children             | React children                                        | -       |
| renderOverlay        | Renders an overlay over the parallax header, e.g text | -       |
| renderHeader         |                                                       | -       |
| heroImage            | React Native image props for display default image    | -       |

## Examples

There are a number of examples that can be found in the `/examples` directory. If you'd like to run the examples you will need to:

1. checkout this repository
2. run `yarn ; yarn bootstrap` in the root
3. run `yarn example:ios` which will run the example directory in a simulator

<div align="center">
<h1>React Native Parallax Header</h1>
<img style="padding-right: 10px" src="https://img.shields.io/npm/v/@fabfit/react-native-parallax-header?style=flat-square" />
<img src="https://img.shields.io/bundlephobia/min/@fabfit/react-native-parallax-header?style=flat-square" />

Animated parallax headers for React Native as seen in our FabFit Studio App.

</div>

---

This component currently only supports **iOS**. It has not been tested in a production environment on Android.

| Basic example (`examples/src/screens/image`)                                                                | Overlay example (FabFit Studio iOS App)                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <img src="https://fabfit-github.now.sh/parallax/parallax-one.gif" width="250px" style="max-width: 250px" /> | <img src="https://fabfit-github.now.sh/parallax/parallax-two.gif" width="250px" style="max-width: 250px"  /> |

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

const MyScreen = () => (
  <ParallaxHeader
    maxHeight={300}
    minHeight={100}
    heroImage={{ uri: 'https://source.unsplash.com/user/erondu/600x300' }}
  >
    <Text>All children will render below the parallax header</Text>
  </ParallaxHeader>
);
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

## License

[MIT](https://choosealicense.com/licenses/mit/) © [FabFit](https://fab.fitness)

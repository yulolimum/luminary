import type { ConfigContext, ExpoConfig } from 'expo/config'

module.exports = (_props: ConfigContext): Partial<ExpoConfig> => {
  return {
    owner: 'yulolimum',
    name: 'Luminary',
    slug: 'luminary',
    scheme: 'luminary',
    orientation: 'portrait',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    icon: './assets/images/icon.png',
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      // [
      //   'expo-splash-screen',
      //   {
      //     image: './assets/images/splash-icon.png',
      //     imageWidth: 200,
      //     resizeMode: 'contain',
      //     backgroundColor: '#ffffff',
      //   },
      // ],
    ],
    experiments: {
      typedRoutes: true,
    },
  }
}

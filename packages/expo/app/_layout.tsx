import 'react-native-reanimated'

import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // // const colorScheme = useColorScheme()
  // // const [loaded] = useFonts({
  // //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // // })

  // useEffect(() => {
  //   SplashScreen.hideAsync()
  // }, [])

  // if (!loaded) {
  //   return null
  // }

  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style="auto" />
      <Slot />
    </ThemeProvider>
  )
}

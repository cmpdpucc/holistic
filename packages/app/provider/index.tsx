import { useColorScheme } from 'react-native'
import {
  CustomToast,
  TamaguiProvider,
  type TamaguiProviderProps,
  ToastProvider,
  config,
  isWeb,
  YStack,
} from '@my/ui'
import { ToastViewport } from './ToastViewport'
import { Navbar } from '../features/NavBar'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      <ToastProvider
        swipeDirection={isWeb ? 'horizontal' : 'up'}
        duration={3500}
        native={isWeb ? [] : ['web']}
      >
        <Navbar />

        {/* <YStack flex={1} py="$12" bg="$background">
          {children}
        </YStack> */}
        {children}
        <CustomToast />
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}

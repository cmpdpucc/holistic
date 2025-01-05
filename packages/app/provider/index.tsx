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

import { AuthProvider } from 'api/src/auth/AuthContext'

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
        <AuthProvider>
        <Navbar />

        {children}

        <CustomToast />
        <ToastViewport />
        </AuthProvider>
      </ToastProvider>
    </TamaguiProvider>
  )
}

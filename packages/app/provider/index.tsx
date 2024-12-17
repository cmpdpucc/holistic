import { useColorScheme } from 'react-native'
import {
  CustomToast,
  TamaguiProvider,
  type TamaguiProviderProps,
  ToastProvider,
  config,
  isWeb,
  AnimatePresence,
} from '@my/ui'
import { ToastViewport } from './ToastViewport'
import { Navbar } from 'app/features/NavBar'
import { AnimatedNavbar } from 'app/features/NavBar/AnimatedNavbar'

import { useMediaLoading } from './useMediaLoading'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme()
  const { isMediaLoaded } = useMediaLoading()

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
        <AnimatePresence>
          {console.log('N1 isMediaLoaded', isMediaLoaded)}
          {isMediaLoaded && (
            <AnimatedNavbar>
              {console.log('N2 isMediaLoaded', isMediaLoaded)}
              <Navbar />
            </AnimatedNavbar>
          )}
        </AnimatePresence>

        {children}

        <CustomToast />
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}

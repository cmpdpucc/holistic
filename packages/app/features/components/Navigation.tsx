import { XStack } from '@my/ui'
import { Platform } from 'react-native'
import { SwitchRouterButton, SwitchThemeButton } from '@my/ui'

export function Navigation() {
  return (
    <XStack
      pos="absolute"
      w="100%"
      t="$4"
      gap="$4"
      jc="center"
      fw="wrap"
      $sm={{ pos: 'relative', t: 0 }}
    >
      {Platform.OS === 'web' && (
        <>
          <SwitchRouterButton />
          <SwitchThemeButton />
        </>
      )}
    </XStack>
  )
}

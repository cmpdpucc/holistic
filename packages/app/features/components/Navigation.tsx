// packages/app/features/components/Navigation.tsx
'use client'

import { useState } from 'react'
import { Platform } from 'react-native'
import { XStack, YStack, Sheet, Button, Text } from '@my/ui'
import { useLink } from 'solito/navigation'
import { Menu } from '@tamagui/lucide-icons'
import { SwitchRouterButton, SwitchThemeButton } from '@my/ui'

const MENU_ITEMS = [
  { name: 'Products', href: '/products' },
  { name: 'People', href: '/people' },
  { name: 'Company', href: '/company' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

// Separate NavLink into its own component file to avoid hook inconsistencies
const NavLink = ({ name, href, onPress }: { name: string; href: string; onPress?: () => void }) => {
  // Always declare hooks, even if we might not use them
  const [mounted] = useState(true)
  const linkProps = useLink({ href })

  return (
    <Button
      {...linkProps}
      onPress={(e) => {
        linkProps.onPress(e)
        onPress?.()
      }}
      transparent
    >
      <Text>{name}</Text>
    </Button>
  )
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const isWeb = Platform.OS === 'web'

  return (
    <XStack
      pos="relative"
      w="100%"
      t="$-4"
      gap="$4"
      jc="flex-end"
      fw="wrap"
      $sm={{ pos: 'relative', t: 0 }}
    >
      {isWeb ? (
        <>
          <XStack
            bg="$backgroundFocus"
            padding="$4"
            gap="$4"
            alignItems="center"
            justifyContent="center"
            width="120%"
          >
            {/* Left-aligned items */}
            <XStack gap="$4" alignItems="flex-start">
              <SwitchRouterButton />
              <SwitchThemeButton />
            </XStack>
            {/* Right-aligned items */}
            <XStack ai="flex-start" gap="$4">
              {MENU_ITEMS.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </XStack>
                
          </XStack>
        </>
      ) : (
        <>
          <XStack position="absolute">
            <Button scaleIcon={2} icon={Menu} onPress={() => setOpen(true)} transparent />
            <Sheet modal open={open} onOpenChange={setOpen} snapPoints={[80]} dismissOnSnapToBottom>
              <Sheet.Overlay />
              <Sheet.Frame padding="$1">
                <YStack gap="$2.5">
                  {MENU_ITEMS.map((item) => (
                    <NavLink key={item.href} {...item} onPress={() => setOpen(false)} />
                  ))}
                </YStack>
              </Sheet.Frame>
            </Sheet>
          </XStack>
        </>
      )}
    </XStack>
  )
}

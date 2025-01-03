import { XStack, Text, YStack, Button, useMedia } from 'tamagui'
import { useState } from 'react'
import { TAB_ITEMS } from '../../constants/tabs'
import { NavLink } from './NavLink'

import { AuthButton } from 'app/features/components/auth/AuthButton'

import { Menu } from '@tamagui/lucide-icons'

export function WebNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const media = useMedia() // Tamagui's media query hook

  const isLargeScreen = media.webNav // Adjust based on your breakpoints

  return (
    <YStack
      f={1}
      p="$1"
      // gap="$6"
      display="flex"
      width="100%"
      ai="center"
      shadowColor={'$shadowColor'}
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.25}
      shadowRadius={3}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <XStack
        ai="center"
        jc="space-between"
        top="$3"
        bg="$backgroundFocus"
        borderWidth="$1"
        borderColor="$borderColor"
        borderRadius="$4"
        width={'80%'}
        h="70%"
      >
        <Text pl="$6" pr="$4" fontSize="$6" fontWeight="bold">
          MYLOGO
        </Text>
        <XStack jc="center" ai="center" position="relative">
          {/* Render buttons or a menu icon based on screen size */}
          {!isLargeScreen ? (
            <Button
              bg="$backgroundFocus"
              borderRadius="$10"
              p="$1"
              w="$8"
              onPress={() => setMenuOpen(!menuOpen)}
            >
              <Menu />
            </Button>
          ) : (
            <XStack gap="$1">
              {TAB_ITEMS.map((item) => (
                <NavLink key={item.href} {...item} closeMenu={() => setMenuOpen(false)} />
              ))}
            </XStack>
          )}
          <AuthButton />
        </XStack>
      </XStack>

      {/* Dropdown menu for small screens */}
      {menuOpen && !isLargeScreen && (
        <YStack
          bg="$backgroundFocus"
          borderWidth="$1"
          borderColor="$borderColor"
          borderRadius="$4"
          p="$2"
          mt="$4"
          width="80%"
        >
          {TAB_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} closeMenu={() => setMenuOpen(false)} />
          ))}
        </YStack>
      )}
    </YStack>
  )
}

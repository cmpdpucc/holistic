import { XStack, Text, YStack } from 'tamagui'

import { TAB_ITEMS } from '../../constants/tabs'
import { NavLink } from './NavLink'

export function WebNavbar() {
  return (
    <YStack
      zIndex={1}
      f={1}
      p="$6"
      gap="$6"
      display="flex"
      width="100%"
      ai="center"
      position="absolute"
      elevation={1}
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
        <Text pl="$6" fontSize="$6" fontWeight="bold">
          MYLOGO
        </Text>
        <XStack gap="$4" pr="$6">
          {TAB_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
          <Text bg="$accentColor">USER LOGO</Text>
        </XStack>
      </XStack>
    </YStack>
  )
}

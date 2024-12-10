import { XStack, Text } from 'tamagui'

import { TAB_ITEMS } from '../../constants/tabs'
import { NavLink } from './NavLink'

export function WebNavbar() {
  return (
    <XStack
      position="absolute"
      width="100%"
      zIndex={1}
      ai="center"
      jc="space-between"
      top="$2"
      px="$4"
      py="$2"
      bg="$backgroundFocus"
      borderWidth="$0.5"
      borderColor="$borderColor"
      borderRadius="$4"
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
  )
}

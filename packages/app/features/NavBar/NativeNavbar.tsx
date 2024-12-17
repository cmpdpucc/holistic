import { XStack } from '@my/ui'

import { TAB_ITEMS } from '../../constants/tabs'
import { NavLink } from './NavLink'

export function NativeNavbar() {
  return (
    <XStack
      padding={-10}
      zIndex={1000}
      position="absolute"
      bottom="$4"
      left="$5"
      right="$5"
      bg="$backgroundFocus"
      borderWidth={1}
      borderColor="$borderColor"
      borderRadius="$0"
      jc="space-between"
      ai="center"
      h="$6"
    >
      {TAB_ITEMS.map((item) => (
        <NavLink key={item.href} {...item} />
      ))}
    </XStack>
  )
}

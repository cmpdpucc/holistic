// import { XStack, Text, YStack } from '@my/ui'

// import { TAB_ITEMS } from '../../constants/tabs'
// import { NavLink } from './NavLink'

// export function WebNavbar() {
//   return (
//     <YStack
//       f={1}
//       p="$1"
//       gap="$6"
//       display="flex"
//       width="100%"
//       ai="center"
//       shadowColor={'$shadowColor'}
//       shadowOffset={{ width: 0, height: 2 }}
//       shadowOpacity={0.25}
//       shadowRadius={3}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//       }}
//     >
//       <XStack
//         ai="center"
//         jc="space-between"
//         top="$3"
//         bg="$backgroundFocus"
//         borderWidth="$1"
//         borderColor="$borderColor"
//         borderRadius="$4"
//         width={'80%'}
//         h="70%"
//       >
//         <Text pl="$6" fontSize="$6" fontWeight="bold">
//           MYLOGO
//         </Text>
//         <XStack gap="$4" pr="$6">
//           {TAB_ITEMS.map((item) => (
//             <NavLink key={item.href} {...item} />
//           ))}
//           <Text bg="$accentColor">USER LOGO</Text>
//         </XStack>
//       </XStack>
//     </YStack>
//   )
// }

import { XStack, Text, YStack, Button, useMedia } from 'tamagui'
import { useState } from 'react'
import { TAB_ITEMS } from '../../constants/tabs'
import { NavLink } from './NavLink'

import { Menu } from '@tamagui/lucide-icons'

export function WebNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const media = useMedia() // Tamagui's media query hook

  const isSmallScreen = media.md // Adjust based on your breakpoints

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
        <Text pl="$6" fontSize="$6" fontWeight="bold">
          MYLOGO
        </Text>
        <XStack jc="center" ai="center">
          {/* Render buttons or a menu icon based on screen size */}
          {isSmallScreen ? (
            <Button bg="$backgroundFocus" borderRadius="$10" onPress={() => setMenuOpen(!menuOpen)}>
              {/* Dots icon */}
              <Menu />
            </Button>
          ) : (
            <XStack gap="$4" pr="$6">
              {TAB_ITEMS.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </XStack>
          )}
          <Text style={{ marginLeft: 'auto' }} bg="$accentColor">
            USER LOGO
          </Text>
        </XStack>
      </XStack>

      {/* Dropdown menu for small screens */}
      {menuOpen && isSmallScreen && (
        <YStack
          bg="$backgroundFocus"
          borderWidth="$1"
          borderColor="$borderColor"
          borderRadius="$4"
          p="$4"
          mt="$2"
          width="80%"
        >
          {TAB_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
          <Text bg="$accentColor" mt="$2">
            USER LOGO
          </Text>
        </YStack>
      )}
    </YStack>
  )
}

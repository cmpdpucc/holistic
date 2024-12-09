// import { useState } from 'react'
// import { Platform } from 'react-native'
// import { XStack, YStack, Sheet, Button, Text, useMedia } from '@my/ui'
// import { Menu } from '@tamagui/lucide-icons'
// import { useLink } from 'solito/link'
// import { useSafeArea } from '../../../provider/safe-area/use-safe-area'

// const MENU_ITEMS = [
//   { name: 'Products', href: '/products' },
//   { name: 'People', href: '/people' },
//   { name: 'Company', href: '/company' },
//   { name: 'Blog', href: '/blog' },
//   { name: 'Contact', href: '/contact' },
// ]

// export function Navbar() {
//   const [open, setOpen] = useState(false)
//   const media = useMedia()
//   const safeArea = useSafeArea()
//   const isSmallScreen = media.sm || Platform.OS !== 'web'

//   return (
//     <XStack
//       backgroundColor="$background"
//       borderBottomColor="$borderColor"
//       borderBottomWidth={1}
//       paddingTop={Platform.OS === 'web' ? 20 : safeArea.top}
//     >
//       <XStack
//         flex={1}
//         paddingHorizontal="$4"
//         paddingVertical="$2"
//         // alignItems={Platform.OS === 'web' ? 'center' : 'flex-end'}
//         ai="stretch"
//         justifyContent="space-between"
//         maxWidth={1200}
//         marginHorizontal="auto"
//         width="100%"
//       >
//         {/* Desktop Navigation */}
//         {!isSmallScreen && (
//           <XStack gap="$4" alignItems="center">
//             {MENU_ITEMS.map((item) => (
//               <NavLink key={item.href} {...item} />
//             ))}
//           </XStack>
//         )}

//         {/* Mobile Menu Button */}
//         {isSmallScreen && (
//           <Button icon={Menu} onPress={() => setOpen(true)} backgroundColor="transparent" />
//         )}

//         {/* Mobile Sheet */}
//         {isSmallScreen && (
//           <Sheet modal open={open} onOpenChange={setOpen} snapPoints={[80]} dismissOnSnapToBottom>
//             <Sheet.Overlay />
//             <Sheet.Frame padding="$4">
//               <YStack gap="$4">
//                 {MENU_ITEMS.map((item) => (
//                   <NavLink key={item.href} {...item} onPress={() => setOpen(false)} />
//                 ))}
//               </YStack>
//             </Sheet.Frame>
//           </Sheet>
//         )}
//       </XStack>
//     </XStack>
//   )
// }

// function NavLink({ name, href, onPress }: { name: string; href: string; onPress?: () => void }) {
//   const link = useLink({
//     href,
//   })

//   return (
//     <Button
//       {...link}
//       onPress={(e) => {
//         link.onPress(e)
//         onPress?.()
//       }}
//       backgroundColor="transparent"
//     >
//       <Text>{name}</Text>
//     </Button>
//   )
// }

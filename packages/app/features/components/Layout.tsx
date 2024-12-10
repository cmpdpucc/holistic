// import { YStack } from '@my/ui'
// import { Navbar } from './Navbar'
// import { NAV_ITEMS } from '../../constants/navigation'

// interface LayoutProps {
//   children: React.ReactNode
// }

// export function Layout({ children }: LayoutProps) {
//   return (
//     <YStack flex={1}>
//       <Navbar
//         items={NAV_ITEMS}
//         logo={<YourLogoComponent />} // Replace with your logo
//       />
//       {children}
//     </YStack>
//   )
// }

// packages/app/features/components/Layout.tsx
import { YStack } from '@my/ui'
import { Navbar } from '../NavBar'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <YStack f={1}>
      <Navbar />
      {children}
    </YStack>
  )
}

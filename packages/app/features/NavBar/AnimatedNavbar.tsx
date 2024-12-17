import { YStack } from '@my/ui'
import { useState } from 'react'

export function AnimatedNavbar({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <YStack
      animation="quick"
      enterStyle={{
        opacity: 0,
        scale: 0.98,
        y: -10,
        // blur: '10px',
      }}
      exitStyle={{
        opacity: 0,
        scale: 0.98,
        y: -10,
        // blur: '10px',
      }}
      y={0}
      scale={1}
      opacity={1}
      // blur="0px"
      transformOrigin="top"
      // Add a subtle hover animation
      hoverStyle={{
        scale: 1.002,
        y: -1,
      }}
      // Add smooth transitions
      pressStyle={{
        scale: 0.995,
      }}
    >
      {children}
    </YStack>
  )
}

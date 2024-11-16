// import { Toast, useToastState } from '@tamagui/toast'
// import { YStack } from 'tamagui'

// export const NativeToast = () => {
//   const currentToast = useToastState()

//   if (!currentToast || currentToast.isHandledNatively) {
//     return null
//   }

//   return (
//     <Toast
//       key={currentToast.id}
//       duration={currentToast.duration}
//       viewportName={currentToast.viewportName}
//       enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
//       exitStyle={{ opacity: 0, scale: 1, y: -20 }}
//       y={0}
//       opacity={0.85}
//       scale={1}
//       animation="slowAnimation"
//     >
//       <YStack py="$1.5" px="$2">
//         <Toast.Title lh="$1">{currentToast.title}</Toast.Title>
//         {!!currentToast.message && <Toast.Description>{currentToast.message}</Toast.Description>}
//       </YStack>
//     </Toast>
//   )
// }

// NativeToast.tsx
// import { Toast, useToastState } from '@tamagui/toast'
// import { YStack } from 'tamagui'
// import { useState, useEffect } from 'react'

// const positions = [
//   {
//     y: -100, // Start position (off-screen)
//     opacity: 0,
//     scale: 0.8,
//     rotate: '-3deg',
//   },
//   {
//     y: -80,
//     opacity: 0.2,
//     scale: 0.85,
//     rotate: '-2deg',
//   },
//   {
//     y: -60,
//     opacity: 0.4,
//     scale: 0.9,
//     rotate: '-1deg',
//   },
//   {
//     y: -40,
//     opacity: 0.6,
//     scale: 0.95,
//     rotate: '-0.5deg',
//   },
//   {
//     y: -20,
//     opacity: 0.8,
//     scale: 0.97,
//     rotate: '0deg',
//   },
//   {
//     y: 0, // Final visible position
//     opacity: 1,
//     scale: 1,
//     rotate: '0deg',
//   },
// ]

// export const NativeToast = () => {
//   const currentToast = useToastState()
//   const [positionIndex, setPositionIndex] = useState(0)

//   useEffect(() => {
//     if (currentToast) {
//       // Reset to initial position when new toast appears
//       setPositionIndex(0)

//       // Animate through positions
//       const interval = setInterval(() => {
//         setPositionIndex((prev) => {
//           if (prev >= positions.length - 1) {
//             clearInterval(interval)
//             return prev
//           }
//           return prev + 1
//         })
//       }, 50) // Adjust timing between position changes

//       return () => clearInterval(interval)
//     }
//   }, [currentToast?.id])

//   if (!currentToast || currentToast.isHandledNatively) {
//     return null
//   }

//   const currentPosition = positions[positionIndex]

//   return (
//     <Toast
//       key={currentToast.id}
//       duration={currentToast.duration}
//       viewportName={currentToast.viewportName}
//       animation="slowAnimation"
//       {...currentPosition}
//       enterStyle={{
//         opacity: 0,
//         scale: 0.8,
//         y: -100,
//         rotate: '-3deg',
//       }}
//       exitStyle={{
//         opacity: 0,
//         scale: 0.8,
//         y: -100,
//         rotate: '3deg',
//       }}
//     >
//       <YStack
//         py="$1.5"
//         px="$2"
//         backgroundColor="$background"
//         borderRadius="$4"
//         borderWidth={1}
//         borderColor="$borderColor"
//         shadowColor="$shadowColor"
//         shadowOffset={{ width: 0, height: 2 }}
//         shadowOpacity={0.25}
//         shadowRadius={3}
//         elevation={3}
//       >
//         <Toast.Title lh="$1" color="$color12" fontWeight="bold">
//           {currentToast.title}
//         </Toast.Title>
//         {!!currentToast.message && (
//           <Toast.Description color="$colorFocus" size="$3">
//             {currentToast.message}
//           </Toast.Description>
//         )}
//       </YStack>
//     </Toast>
//   )
// }

// NativeToast.tsx
import { Toast, useToastState } from '@tamagui/toast'
import { Button, YStack } from 'tamagui'
import { useState, useEffect } from 'react'

import { ToastPositions } from './constants/ToastPosition'

export const NativeToast = () => {
  const currentToast = useToastState()
  const [positionIndex, setPositionIndex] = useState(0)

  useEffect(() => {
    if (currentToast) {
      setPositionIndex(0)

      const interval = setInterval(() => {
        setPositionIndex((prev) => {
          if (prev >= ToastPositions.length - 1) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 35)

      return () => clearInterval(interval)
    }
  }, [currentToast?.id])

  if (!currentToast || currentToast.isHandledNatively) {
    return null
  }

  const currentPosition = ToastPositions[positionIndex]
  return (
    <Toast
      //onPress={}

      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      animation="slowAnimation"
      {...currentPosition}
      enterStyle={{
        opacity: 0.8,
        scale: 0.8,
        y: -100,
        rotate: '-3deg',
      }}
      exitStyle={{
        opacity: 0,
        scale: 0.8,
        y: -100,
        rotate: '3deg',
      }}
      style={{
        //position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        //backgroundColor: 'black', // Override background color
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        // borderRadius: 8, // Override border radius

        //shadowColor: 'rgba(0, 0, 0, 0.5)', // Override shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <YStack py="$1.5" px="$2">
        <Toast.Title lh="$1" fontWeight="bold">
          {currentToast.title}
        </Toast.Title>
        {!!currentToast.message && (
          <Toast.Description size="$3">{currentToast.message}</Toast.Description>
        )}
      </YStack>
    </Toast>
  )
}

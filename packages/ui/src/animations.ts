import { createAnimations } from '@tamagui/animations-react-native'

export const animations = createAnimations({
  '100ms': {
    type: 'timing',
    duration: 100,
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 18,
    stiffness: 50,
  },
  medium: {
    damping: 15,
    stiffness: 120,
    mass: 1,
  },
  slow: {
    damping: 15,
    stiffness: 40,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  slowAnimation: {
    type: 'spring',
    damping: 15, // Lower damping for more oscillation
    mass: 1.2, // Higher mass makes it feel heavier
    stiffness: 80, // Lower stiffness for slower movement
    duration: 400, // Longer duration for slower animation
  },
  slideIn: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
    enterStyle: {
      x: 50,
      opacity: 0,
    },
    exitStyle: {
      x: 50,
      opacity: 0,
    },
  },
})

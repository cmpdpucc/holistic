// import { createTamagui } from 'tamagui'
// import { createInterFont } from '@tamagui/font-inter'
// import { shorthands } from '@tamagui/shorthands'
// import { tokens } from '@tamagui/config/v3'
// import { createMedia } from '@tamagui/react-native-media-driver'

// import { animations } from '@my/ui/src/animations'

// const headingFont = createInterFont({
//   size: {
//     6: 15,
//   },
//   transform: {
//     6: 'uppercase',
//     7: 'none',
//   },
//   weight: {
//     6: '400',
//     7: '700',
//   },
//   color: {
//     6: '$colorFocus',
//     7: '$color',
//   },
//   letterSpacing: {
//     5: 2,
//     6: 1,
//     7: 0,
//     8: -1,
//     9: -2,
//     10: -3,
//     12: -4,
//     14: -5,
//     15: -6,
//   },
//   face: {
//     700: { normal: 'InterBold' },
//   },
// })

// const bodyFont = createInterFont(
//   {
//     face: {
//       700: { normal: 'InterBold' },
//     },
//   },
//   {
//     sizeSize: (size) => Math.round(size * 1.1),
//     sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
//   }
// )

// const light = {
//   background: '#FAF7FD',
//   backgroundHover: '#F0EDF6',
//   backgroundPress: '#E6E3EF',
//   backgroundFocus: '#D2CFE1',
//   backgroundStrong: '#C2B7D1',
//   backgroundTransparent: 'rgba(242, 237, 253, 0.5)',

//   color: '#4A2B82',
//   colorHover: '#FFFFFF',
//   colorPress: '#F0EDF6',
//   colorFocus: '#E6E3EF',
//   colorTransparent: 'rgba(74, 43, 130, 0.5)',

//   borderColor: '#8B63DA',
//   borderColorHover: '#6A42A3',
//   borderColorFocus: '#5A3293',
//   borderColorPress: '#4A2183',

//   placeholderColor: '#9973E6',
//   outlineColor: '#A983EE',

//   brandBackground: '#8B63DA',
//   brandColor: '#FFFFFF',
//   accentColor: '#FFD700',
// }

// const dark = {
//   background: '#0F0A1F',
//   backgroundHover: '#1B132D',
//   backgroundPress: '#271C3B',
//   backgroundFocus: '#3F2E57',
//   backgroundStrong: '#4F3E67',
//   backgroundTransparent: 'rgba(15, 10, 31, 0.5)',

//   color: '#F0EDF6',
//   colorHover: '#FFFFFF',
//   colorPress: '#E6E3EF',
//   colorFocus: '#D2CFE1',
//   colorTransparent: 'rgba(240, 237, 246, 0.5)',

//   borderColor: '#8B63DA',
//   borderColorHover: '#A073EA',
//   borderColorFocus: '#B083FA',
//   borderColorPress: '#C093FF',

//   placeholderColor: '#6B43BA',
//   outlineColor: '#5B33AA',

//   brandBackground: '#8B63DA',
//   brandColor: '#FFFFFF',
//   accentColor: '#FFD700',
// }

// const themes = {
//   light,
//   dark,
// }

// export const config = createTamagui({
//   defaultFont: 'body',
//   animations,
//   shouldAddPrefersColorThemes: true,
//   themeClassNameOnRoot: true,

//   onlyAllowShorthands: false,
//   shorthands,

//   fonts: {
//     body: bodyFont,
//     heading: headingFont,
//   },
//   settings: {
//     allowedStyleValues: 'somewhat-strict',
//   },
//   themes,
//   tokens,
//   media: createMedia({
//     xs: { maxWidth: 660 },
//     sm: { maxWidth: 800 },
//     md: { maxWidth: 1020 },
//     lg: { maxWidth: 1280 },
//     xl: { maxWidth: 1420 },
//     xxl: { maxWidth: 1600 },
//     gtXs: { minWidth: 660 + 1 },
//     gtSm: { minWidth: 800 + 1 },
//     gtMd: { minWidth: 1020 + 1 },
//     gtLg: { minWidth: 1280 + 1 },
//     short: { maxHeight: 820 },
//     tall: { minHeight: 820 },
//     hoverNone: { hover: 'none' },
//     pointerCoarse: { pointer: 'coarse' },
//   }),
// })

import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/config/v3'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from '@my/ui/src/animations'

// Add responsive size tokens
const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 16,
  4: 24,
  5: 32,
  6: 40,
  7: 48,
  8: 56,
  9: 64,
  10: 72, // Add responsive sizes
  sm: 300,
  md: 500,
  lg: 700,
  true: 44, // default size
}

const space = {
  ...size,
  '-1': -4,
  '-2': -8,
  '-3': -16,
  '-4': -24,
  '-5': -32,
  '-6': -40,
}

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

const light = {
  background: '#FAF7FD',
  backgroundHover: '#F0EDF6',
  backgroundPress: '#E6E3EF',
  backgroundFocus: '#D2CFE1',
  backgroundStrong: '#C2B7D1',
  backgroundTransparent: 'rgba(242, 237, 253, 0.5)',

  color: '#4A2B82',
  colorHover: '#FFFFFF',
  colorPress: '#F0EDF6',
  colorFocus: '#E6E3EF',
  colorTransparent: 'rgba(74, 43, 130, 0.5)',

  borderColor: '#8B63DA',
  borderColorHover: '#6A42A3',
  borderColorFocus: '#5A3293',
  borderColorPress: '#4A2183',

  placeholderColor: '#9973E6',
  outlineColor: '#A983EE',

  shadowColor: 'rgba(74, 43, 130, 0.15)',

  brandBackground: '#8B63DA',
  brandColor: '#FFFFFF',
  accentColor: '#FFD700',
}

const dark = {
  background: '#0F0A1F',
  backgroundHover: '#1B132D',
  backgroundPress: '#271C3B',
  backgroundFocus: '#3F2E57',
  backgroundStrong: '#4F3E67',
  backgroundTransparent: 'rgba(15, 10, 31, 0.5)',

  color: '#F0EDF6',
  colorHover: '#FFFFFF',
  colorPress: '#E6E3EF',
  colorFocus: '#D2CFE1',
  colorTransparent: 'rgba(240, 237, 246, 0.5)',

  borderColor: '#8B63DA',
  borderColorHover: '#A073EA',
  borderColorFocus: '#B083FA',
  borderColorPress: '#C093FF',

  placeholderColor: '#6B43BA',
  outlineColor: '#5B33AA',

  shadowColor: 'rgba(139, 99, 218, 0.25)',

  brandBackground: '#8B63DA',
  brandColor: '#FFFFFF',
  accentColor: '#FFD700',
}

const themes = {
  light,
  dark,
}

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,

  onlyAllowShorthands: false,
  shorthands,

  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  themes,
  tokens: {
    ...tokens,
    size,
    space,
  },
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },

    webNav: { minWidth: 915 },

    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

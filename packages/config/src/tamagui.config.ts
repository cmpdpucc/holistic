// import { createTamagui } from 'tamagui'
// import { createInterFont } from '@tamagui/font-inter'
// import { shorthands } from '@tamagui/shorthands'
// import { tokens, themes } from '@tamagui/config/v3'
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

// export const config = createTamagui({
//   defaultFont: 'body',
//   animations,
//   shouldAddPrefersColorThemes: true,
//   themeClassNameOnRoot: true,

//   // highly recommended to turn this on if you are using shorthands
//   // to avoid having multiple valid style keys that do the same thing
//   // we leave it off by default because it can be confusing as you onboard.
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
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
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

// for the compiler to find it
export default config

// import { createTamagui } from 'tamagui'
// import { createInterFont } from '@tamagui/font-inter'
// import { shorthands } from '@tamagui/shorthands'
// import { createMedia } from '@tamagui/react-native-media-driver'
// import { createTokens } from '@tamagui/core'

// import { animations } from '@my/ui/src/animations'

// // Create the tokens using createTokens
// const tokens = createTokens({
//   color: {
//     // Primary Blues (Ocean theme)
//     blue1: '#E6F3FF',
//     blue2: '#B3D9FF',
//     blue3: '#80BFFF',
//     blue4: '#4DA6FF',
//     blue5: '#1A8CFF',
//     blue6: '#0073E6',
//     blue7: '#0059B3',
//     blue8: '#004080',
//     blue9: '#00264D',

//     // Secondary Greens (Forest theme)
//     green1: '#E6F9E6',
//     green2: '#B3ECB3',
//     green3: '#80DF80',
//     green4: '#4DD24D',
//     green5: '#1AC61A',
//     green6: '#00B300',
//     green7: '#008C00',
//     green8: '#006600',
//     green9: '#004D00',

//     // Accent Yellows (Sun theme)
//     yellow1: '#FFF9E6',
//     yellow2: '#FFECB3',
//     yellow3: '#FFDF80',
//     yellow4: '#FFD24D',
//     yellow5: '#FFC61A',
//     yellow6: '#FFB300',
//     yellow7: '#CC8F00',
//     yellow8: '#996B00',
//     yellow9: '#664700',

//     // Neutrals
//     gray1: '#FFFFFF',
//     gray2: '#F5F5F5',
//     gray3: '#E0E0E0',
//     gray4: '#BDBDBD',
//     gray5: '#9E9E9E',
//     gray6: '#757575',
//     gray7: '#616161',
//     gray8: '#424242',
//     gray9: '#212121',
//     gray10: '#000000',
//   },
//   space: {
//     0: 0,
//     1: 4,
//     2: 8,
//     3: 16,
//     4: 24,
//     5: 32,
//     6: 40,
//     7: 48,
//     8: 56,
//     9: 64,
//     10: 72,
//     true: 16, // Default space size
//   },
//   size: {
//     0: 0,
//     1: 4,
//     2: 8,
//     3: 16,
//     4: 24,
//     5: 32,
//     6: 40,
//     7: 48,
//     8: 56,
//     9: 64,
//     10: 72,
//     true: 16, // Default size
//   },
//   radius: {
//     0: 0,
//     1: 4,
//     2: 8,
//     3: 16,
//     4: 24,
//     5: 32,
//   },
//   zIndex: {
//     0: 0,
//     1: 100,
//     2: 200,
//     3: 300,
//     4: 400,
//     5: 500,
//   },
// })

// // Create the themes
// const light = {
//   background: tokens.color.gray1,
//   backgroundHover: tokens.color.blue1,
//   backgroundPress: tokens.color.blue2,
//   backgroundFocus: tokens.color.blue1,
//   backgroundStrong: tokens.color.blue6,
//   backgroundTransparent: 'rgba(255, 255, 255, 0.9)',

//   color: tokens.color.gray9,
//   colorHover: tokens.color.blue7,
//   colorPress: tokens.color.blue8,
//   colorFocus: tokens.color.blue7,
//   colorTransparent: 'rgba(0, 0, 0, 0.7)',

//   borderColor: tokens.color.blue3,
//   borderColorHover: tokens.color.blue4,
//   borderColorFocus: tokens.color.blue5,
//   borderColorPress: tokens.color.blue6,

//   placeholderColor: tokens.color.gray5,
//   outlineColor: tokens.color.blue4,

//   // Brand specific colors
//   brandPrimary: tokens.color.blue6,
//   brandSecondary: tokens.color.green6,
//   brandAccent: tokens.color.yellow5,
// }

// const dark = {
//   background: tokens.color.gray9,
//   backgroundHover: tokens.color.blue9,
//   backgroundPress: tokens.color.blue8,
//   backgroundFocus: tokens.color.blue9,
//   backgroundStrong: tokens.color.blue7,
//   backgroundTransparent: 'rgba(0, 0, 0, 0.9)',

//   color: tokens.color.gray1,
//   colorHover: tokens.color.blue2,
//   colorPress: tokens.color.blue3,
//   colorFocus: tokens.color.blue2,
//   colorTransparent: 'rgba(255, 255, 255, 0.7)',

//   borderColor: tokens.color.blue7,
//   borderColorHover: tokens.color.blue6,
//   borderColorFocus: tokens.color.blue5,
//   borderColorPress: tokens.color.blue4,

//   placeholderColor: tokens.color.gray6,
//   outlineColor: tokens.color.blue5,

//   // Brand specific colors
//   brandPrimary: tokens.color.blue5,
//   brandSecondary: tokens.color.green5,
//   brandAccent: tokens.color.yellow4,
// }

// // Font configurations
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

// // Create the final config
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

//   tokens,

//   themes: {
//     light,
//     dark,
//   },

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

//   settings: {
//     allowedStyleValues: 'somewhat-strict',
//   },
// })

// export default config

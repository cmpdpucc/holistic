'use client'

import { isWeb } from '@my/ui'

import { WebNavbar as Web } from './WebNavbar'
import { NativeNavbar as Native } from './NativeNavbar'

export function Navbar() {
  return isWeb ? <Web /> : <Native />
}

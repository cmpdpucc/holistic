// packages/app/provider/useMediaLoading.ts
import { useState, useEffect } from 'react'
import { useMedia } from 'tamagui'

export function useMediaLoading() {
  const [isMediaLoaded, setIsMediaLoaded] = useState(false)
  const media = useMedia()

  useEffect(() => {
    // Short delay to ensure media queries are properly initialized
    const timer = setTimeout(() => {
      setIsMediaLoaded(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  return { isMediaLoaded, media }
}

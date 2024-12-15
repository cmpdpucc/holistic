// packages/app/features/services/screen.tsx
import { Button, Text, YStack } from '@my/ui'

import { useRouter } from 'solito/navigation'

export function ServicesScreen() {
  const router = useRouter()

  return (
    <YStack padding="$5" f={1} jc="center" ai="center">
      <Text>Services Screen</Text>
      <Button onPress={() => router.back()}>Go Home</Button>
    </YStack>
  )
}

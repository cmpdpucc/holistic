import { H1, Paragraph, YStack } from '@my/ui'

export function Header() {
  return (
    <YStack gap="$4" pb="$6" ai="center">
      <H1 ta="center" size="$10">
        Holistic Evolution Coaching
      </H1>
      <Paragraph ta="center" size="$6">
        Discover your true self and evolve into your highest potential
      </Paragraph>
    </YStack>
  )
}

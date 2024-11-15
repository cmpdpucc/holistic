import { H1, Paragraph, YStack } from '@my/ui'

export function Header() {
  return (
    <YStack space="$4" pb="$6" ai="center">
      <H1 ta="center" col="$color12" size="$10">
        Holistic Evolution Coaching
      </H1>
      <Paragraph ta="center" col="$color10" size="$6">
        Discover your true self and evolve into your highest potential
      </Paragraph>
    </YStack>
  )
}

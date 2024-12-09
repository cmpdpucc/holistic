import { Card, H2, Paragraph, YStack } from '@my/ui'
import { Service } from '../../constants/types'

export function ServiceCard({ title, description, price }: Service) {
  return (
    <Card
      elevate
      size="$4"
      w={300}
      h={200}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      animation="bouncy"
      backgroundColor="$backgroundStrong"
    >
      <Card.Header p="$4">
        <H2 size="$6">{title}</H2>
      </Card.Header>
      <Card.Footer p="$4">
        <YStack space="$2">
          <Paragraph size="$3">{description}</Paragraph>
          <Paragraph size="$4" col="$color">
            {price}
          </Paragraph>
        </YStack>
      </Card.Footer>
    </Card>
  )
}

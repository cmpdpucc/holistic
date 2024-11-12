import {
  Anchor,
  Button,
  H1,
  H2,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
  Input,
  Card,
  ScrollView,
  SwitchThemeButton,
  SwitchRouterButton,
} from '@my/ui'
import { Calendar, Clock, User, Mail, Phone } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export function HomeScreen() {
  const [openBooking, setOpenBooking] = useState(false)
  const toast = useToastController()
  const linkProps = useLink({ href: '/user' })

  return (
    <ScrollView>
      <YStack f={1} p="$6" space="$6" bg="$background">
        {/* Navigation */}
        <XStack
          pos="absolute"
          w="100%"
          t="$4"
          gap="$4"
          jc="center"
          fw="wrap"
          $sm={{ pos: 'relative', t: 0 }}
        >
          {Platform.OS === 'web' && (
            <>
              <SwitchRouterButton />
              <SwitchThemeButton />
            </>
          )}
        </XStack>

        {/* Hero Section */}
        <YStack space="$4" pb="$6" ai="center">
          <H1 ta="center" col="$color12" size="$10">
            Holistic Evolution Coaching
          </H1>
          <Paragraph ta="center" col="$color10" size="$6">
            Discover your true self and evolve into your highest potential
          </Paragraph>
        </YStack>

        {/* Services Cards */}
        <YStack space="$4" pb="$6">
          <H2 ta="left" col="$color11">
            Our Services
          </H2>
          <XStack flexWrap="wrap" gap="$4" jc="center">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </XStack>
        </YStack>

        {/* Booking CTA */}
        <YStack ai="center" space="$4" py="$6">
          <Button size="$6" theme="active" onPress={() => setOpenBooking(true)}>
            Book Your Session
          </Button>
        </YStack>

        {/* Booking Sheet */}
        <BookingSheet
          open={openBooking}
          onOpenChange={setOpenBooking}
          onSubmit={() => {
            setOpenBooking(false)
            toast.show('Booking Request Sent!', {
              message: "We'll contact you shortly to confirm your appointment.",
            })
          }}
        />
      </YStack>
    </ScrollView>
  )
}

// Service Card Component
function ServiceCard({
  title,
  description,
  price,
}: {
  title: string
  description: string
  price: string
}) {
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
    >
      <Card.Header p="$4">
        <H2 size="$6">{title}</H2>
      </Card.Header>
      <Card.Footer p="$4">
        <YStack space="$2">
          <Paragraph size="$3" col="$color10">
            {description}
          </Paragraph>
          <Paragraph size="$4" col="$color12">
            {price}
          </Paragraph>
        </YStack>
      </Card.Footer>
    </Card>
  )
}

// Booking Sheet Component
function BookingSheet({
  open,
  onOpenChange,
  onSubmit,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: () => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  })

  return (
    <Sheet
      modal
      animation="medium"
      open={open}
      onOpenChange={onOpenChange}
      snapPoints={[80]}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Frame p="$4" space="$4" bg="$background">
        <H2 ta="center">Book Your Session</H2>
        <YStack gap="$3">
          <XStack ai="center" space="$2">
            <User />
            <Input
              flex={1}
              placeholder="Your Name"
              value={formData.name}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, name: text }))}
            />
          </XStack>

          <XStack ai="center" space="$2">
            <Mail />
            <Input
              flex={1}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, email: text }))}
            />
          </XStack>

          <XStack ai="center" space="$2">
            <Phone />
            <Input
              flex={1}
              placeholder="Phone Number"
              value={formData.phone}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, phone: text }))}
            />
          </XStack>

          <XStack ai="center" space="$2">
            <Calendar />
            <Input
              flex={1}
              placeholder="Preferred Date"
              value={formData.date}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, date: text }))}
            />
          </XStack>

          <XStack ai="center" space="$2">
            <Clock />
            <Input
              flex={1}
              placeholder="Preferred Time"
              value={formData.time}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, time: text }))}
            />
          </XStack>

          <Button theme="active" onPress={onSubmit} mt="$4">
            Submit Booking Request
          </Button>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}

const services = [
  {
    title: 'Human Design Reading',
    description:
      'Discover your unique energy blueprint and learn how to align with your true nature',
    price: 'Single Session',
  },
  {
    title: '6-Session Program',
    description: 'Deep dive into personal growth with targeted exercises and energy healing',
    price: 'Transformation Package',
  },
  {
    title: '12-Session Journey',
    description: 'Complete life transformation through intensive coaching and healing',
    price: 'Evolution Package',
  },
]

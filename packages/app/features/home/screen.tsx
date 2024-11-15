import { ScrollView, YStack, Button, H2, XStack } from '@my/ui'
import { useState } from 'react'
import { useToastController } from '@my/ui'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import { ServiceCard } from '../components/ServiceCard'
import { BookingSheet } from '../components/BookingSheet'
import { Service } from '../../constants/types'

const services: Service[] = [
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

export function HomeScreen() {
  const [openBooking, setOpenBooking] = useState(false)
  const toast = useToastController()

  return (
    <ScrollView>
      <YStack f={1} p="$6" space="$6" bg="$background">
        <Navigation />
        <Header />

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

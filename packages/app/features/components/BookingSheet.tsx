import { Sheet, Button, Input, XStack, YStack } from '@my/ui'
import { Calendar, Clock, User, Mail, Phone } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { BookingFormData } from '../../constants/types'

interface BookingSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: () => void
}

export function BookingSheet({ open, onOpenChange, onSubmit }: BookingSheetProps) {
  const [formData, setFormData] = useState<BookingFormData>({
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
      <Sheet.Overlay
        animation="slowAnimation"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Frame p="$4" gap="$2" bg="$background">
        <YStack gap="$3" jc="center" ai="center">
          <XStack ai="center" gap="$1">
            <User />
            <Input
              flex={1}
              placeholder="Your Name"
              value={formData.name}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, name: text }))}
            />
          </XStack>

          <XStack ai="center" gap="$1">
            <Mail />
            <Input
              flex={1}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, email: text }))}
            />
          </XStack>

          <XStack ai="center" gap="$1">
            <Phone />
            <Input
              flex={1}
              placeholder="Phone Number"
              value={formData.phone}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, phone: text }))}
            />
          </XStack>

          <XStack ai="center" gap="$1">
            <Calendar />
            <Input
              flex={1}
              placeholder="Preferred Date"
              value={formData.date}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, date: text }))}
            />
          </XStack>

          <XStack ai="center" gap="$1">
            <Clock />
            <Input
              flex={1}
              placeholder="Preferred Time"
              value={formData.time}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, time: text }))}
            />
          </XStack>

          <Button borderColor="$borderColor" onPress={onSubmit} mt="$4">
            Submit Booking Request
          </Button>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}

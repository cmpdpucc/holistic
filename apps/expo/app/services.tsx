import { Stack } from 'expo-router'
import { Text } from '@my/ui'

export default function Services() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Services',
          headerShown: false,
        }}
      />
      <Text>Services</Text>
    </>
  )
}

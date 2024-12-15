import { Stack } from 'expo-router'

import { ServicesScreen } from 'app/features/Services'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Services',
          headerShown: false,
        }}
      />

      <ServicesScreen />
    </>
  )
}

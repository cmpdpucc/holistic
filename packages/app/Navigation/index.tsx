// packages/app/navigation/index.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Define the parameters each screen expects
export type AppStackParamList = {
  home: {
    // Add any parameters your home screen needs
  }
  services: {
    // Add any parameters your services screen needs
    categoryId?: string
    serviceType?: 'individual' | 'group'
  }
  // Add other routes with their parameters
}

export const Stack = createNativeStackNavigator<AppStackParamList>()

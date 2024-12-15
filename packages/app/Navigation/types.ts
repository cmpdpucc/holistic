// packages/app/navigation/types.ts
export type AppStackParamList = {
  home: {
    // Home screen currently doesn't take any parameters
    // but you could add them in the future
  }
  services: {
    // Based on your ServiceCard component
    serviceId?: string
    title?: string
    price?: string
  }
  'pages-example-user': {
    id: string // From your user detail screen
  }
  // Add other routes from your TAB_ITEMS
}

// You can also create a type for your tab items
export type TabItem = {
  name: string
  href: keyof AppStackParamList
}

// This will ensure type safety when using navigation
export type NavigationProps<T extends keyof AppStackParamList> = {
  navigation: {
    navigate: (screen: T, params: AppStackParamList[T]) => void
  }
}

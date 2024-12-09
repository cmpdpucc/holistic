export interface Service {
  title: string
  description: string
  price: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
}

// export interface NavItem {
//   label: string
//   href: string
//   icon?: React.ComponentType // For mobile menu icons
// }

// export interface NavbarProps {
//   logo?: string | React.ReactNode
//   items: NavItem[]
// }

export interface NavItem {
  name: string
  href: string
  icon?: any // Using any for now since we're using Lucide icons
  isExternal?: boolean
}

export interface NavGroup {
  label?: string
  items: NavItem[]
}

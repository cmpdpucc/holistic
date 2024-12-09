import { Home, Users, Building2, BookOpen, Phone } from '@tamagui/lucide-icons'
import { NavItem } from './types'

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    name: 'Products',
    href: '/products',
    icon: Home,
  },
  {
    name: 'People',
    href: '/people',
    icon: Users,
  },
  {
    name: 'Company',
    href: '/company',
    icon: Building2,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: BookOpen,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
  },
]

// Utility function for navigation
export const getNavHref = (href: string, isWeb = false) => {
  return isWeb ? href : href.replace(/^\//, '').replace(/\//g, '-')
}

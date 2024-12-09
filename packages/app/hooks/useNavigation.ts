import { useRouter } from 'solito/navigation'
import { Platform } from 'react-native'
import { NavItem } from '../constants/types'
import { getNavHref } from '../constants/navigation'

export const useAppNavigation = () => {
  const router = useRouter()
  const isWeb = Platform.OS === 'web'

  const navigate = (item: NavItem) => {
    if (item.isExternal && isWeb) {
      window.open(item.href, '_blank')
      return
    }

    const href = getNavHref(item, isWeb)
    router.push(href)
  }

  return {
    navigate,
    isWeb,
  }
}

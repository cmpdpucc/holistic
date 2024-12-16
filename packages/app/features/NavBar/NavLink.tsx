import { Button, Text } from '@my/ui'
import { useLink } from 'solito/navigation'

type NavLinkProps = {
  name: string
  href: string
  closeMenu?: () => void
}

export function NavLink({ name, href, closeMenu }: NavLinkProps) {
  const link = useLink({ href })

  return (
    <Button
      {...link}
      onPress={(e) => {
        link.onPress(e)
        closeMenu?.()
      }}
      pl="$4"
      pr="$4"
      bg="$backgroundFocus"
      justifyContent="center" // Centers the text vertically
      alignItems="center" // Centers the text horizontally
      borderRadius="$10"
    >
      {name}
    </Button>
  )
}

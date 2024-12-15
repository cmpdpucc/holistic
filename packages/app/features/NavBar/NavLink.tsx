import { Button, Text } from '@my/ui'
import { useLink } from 'solito/navigation'

import { AppStackParamList } from 'app/Navigation/types'

import { Link } from 'solito/link'

type NavLinkProps = {
  name: string
  href: keyof AppStackParamList
}

export function NavLink({ name, href }: { name: string; href: string }) {
  const link = useLink({ href: href as string })

  return (
    <Link href={href}>
      <Button
        bg="$backgroundFocus"
        justifyContent="center" // Centers the text vertically
        alignItems="center" // Centers the text horizontally
        borderRadius="$10"
      >
        {name}
      </Button>
    </Link>
  )
}

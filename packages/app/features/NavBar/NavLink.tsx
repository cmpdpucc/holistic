import { Button, Text } from '@my/ui'
import { useLink } from 'solito/navigation'

export function NavLink({ name, href }: { name: string; href: string }) {
  const link = useLink({ href })

  return (
    <Button
      {...link}
      onPress={(e) => {
        link.onPress(e)
      }}
      bg="$backgroundFocus"
      //zIndex={1}
      justifyContent="center" // Centers the text vertically
      alignItems="center" // Centers the text horizontally
      height="98%"
      flexGrow={1}
      borderRadius="$10"
    >
      <Text>{name}</Text>
    </Button>
  )
}

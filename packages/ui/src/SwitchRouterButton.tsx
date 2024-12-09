import { Anchor, Button } from 'tamagui'

export const SwitchRouterButton = ({ pagesMode = false }: { pagesMode?: boolean }) => {
  return (
    <Anchor
      ta="center"
      color="$primary"
      href={pagesMode ? '/' : '/pages-example'}
    >
      <Button>Change router: {pagesMode ? 'pages' : 'app'}</Button>
    </Anchor>
  )
}

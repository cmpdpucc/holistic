// components/auth/AuthButton.tsx
import { Button, Text, Avatar, PopoverContent, Popover, PopoverTrigger, YStack } from 'tamagui'
import { useState } from 'react'
import { useRouter } from 'solito/navigation'
import { UserCircle } from '@tamagui/lucide-icons'
import { SiGoogle } from 'react-icons/si'
import { useAuth } from 'api/src/auth/AuthContext'
import { authService } from 'api/src/auth/auth.service'

export function AuthButton() {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth() // Using the auth context instead of local state
  const router = useRouter()

  const handleAuth = async () => {
    try {
      setLoading(true)
      const response = await authService.signInWithGoogle()
      if (response.error) {
        // You might want to show an error toast here
        console.error('Auth error:', response.error)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      setLoading(true)
      const response = await authService.signOut()
      if (response.error) {
        console.error('Sign out error:', response.error)
      } else {
        router.push('/') // Or wherever you want to redirect after sign out
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger asChild>
        <Button
          size="$3"
          circular
          padding="$2"
          backgroundColor="transparent"
          hoverStyle={{ backgroundColor: '$background' }}
        >
          {user?.avatar_url ? (
            <Avatar circular size="$3">
              <Avatar.Image src={user.avatar_url} />
              <Avatar.Fallback backgroundColor="$background">
                <UserCircle size={24} />
              </Avatar.Fallback>
            </Avatar>
          ) : (
            <UserCircle size={24} />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <YStack padding="$3" gap="$3" minWidth={200}>
          {user ? (
            <>
              <YStack>
                <Text fontWeight="bold">{user.full_name}</Text>
                <Text>{user.email}</Text>
              </YStack>
              <Button size="$3" onPress={handleSignOut} disabled={loading}>
                <Text>{loading ? 'Signing out...' : 'Sign Out'}</Text>
              </Button>
            </>
          ) : (
            <Button
              size="$3"
              onPress={handleAuth}
              disabled={loading}
              icon={<SiGoogle size={16} style={{ marginRight: 8 }} />}
            >
              <Text>{loading ? 'Signing in...' : 'Sign in with Google'}</Text>
            </Button>
          )}
        </YStack>
      </PopoverContent>
    </Popover>
  )
}

// // components/auth/AuthButton.tsx
// import { Button, Text, Avatar, PopoverContent, Popover, PopoverTrigger, YStack } from 'tamagui'
// import { supabase } from 'api/utils/supabase'
// import { useState, useEffect } from 'react'
// import { User } from '@supabase/supabase-js'
// import { useRouter } from 'solito/navigation'
// import { UserCircle } from '@tamagui/lucide-icons'

// // Import Google icon
// import { SiGoogle } from 'react-icons/si'

// export function AuthButton() {
//   const [loading, setLoading] = useState(false)
//   const [user, setUser] = useState<User | null>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const getUser = async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser()
//       setUser(user)
//     }
//     getUser()

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null)
//       if (session?.user) {
//         router.push('/')
//       }
//     })

//     return () => {
//       subscription.unsubscribe()
//     }
//   }, [router])

//   const handleAuth = async () => {
//     try {
//       setLoading(true)
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//         options: {
//           redirectTo: `${window.location.origin}/auth/callback`,
//         },
//       })
//       if (error) throw error
//     } catch (error) {
//       console.error('Error:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleSignOut = async () => {
//     try {
//       setLoading(true)
//       const { error } = await supabase.auth.signOut()
//       if (error) throw error
//     } catch (error) {
//       console.error('Error:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Popover placement="bottom-end">
//       <PopoverTrigger asChild>
//         <Button
//           size="$3"
//           circular
//           padding="$2"
//           backgroundColor="transparent"
//           hoverStyle={{ backgroundColor: '$background' }}
//         >
//           {user?.user_metadata?.picture ? ( // Changed from avatar_url to picture
//             <Avatar circular size="$3">
//               <Avatar.Image src={user.user_metadata.picture} />
//               <Avatar.Fallback backgroundColor="$background">
//                 <UserCircle size={24} />
//               </Avatar.Fallback>
//             </Avatar>
//           ) : (
//             <UserCircle size={24} />
//           )}
//         </Button>
//       </PopoverTrigger>

//       <PopoverContent
//         borderWidth={1}
//         borderColor="$borderColor"
//         enterStyle={{ y: -10, opacity: 0 }}
//         exitStyle={{ y: -10, opacity: 0 }}
//         elevate
//         animation={[
//           'quick',
//           {
//             opacity: {
//               overshootClamping: true,
//             },
//           },
//         ]}
//       >
//         <YStack padding="$3" gap="$3" minWidth={200}>
//           {user ? (
//             <>
//               <YStack>
//                 <Text fontWeight="bold">{user.user_metadata?.full_name}</Text>
//                 <Text>{user.email}</Text>
//               </YStack>
//               <Button size="$3" onPress={handleSignOut} disabled={loading}>
//                 <Text>{loading ? 'Signing out...' : 'Sign Out'}</Text>
//               </Button>
//             </>
//           ) : (
//             <Button
//               size="$3"
//               onPress={handleAuth}
//               disabled={loading}
//               icon={<SiGoogle size={16} style={{ marginRight: 8 }} />}
//             >
//               <Text>{loading ? 'Signing in...' : 'Sign in with Google'}</Text>
//             </Button>
//           )}
//         </YStack>
//       </PopoverContent>
//     </Popover>
//   )
// }

import { Button } from "@/components/UI/Button/Button"
import { useAuthStore } from "@/store/store"

export const Logout = () => {
  const logout = useAuthStore(store => store.actions.logout)
  return (
    <Button onClick={() => logout()}>Logout</Button>
  )
}

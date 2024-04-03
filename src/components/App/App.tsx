import { useAuthStore } from "@/store/auth.store";
import { AppRouter } from "../AppRouter/AppRouter"
import Providers from "../Providers/Providers"
import { filesService } from "@/services";
import { useEffect } from "react";
import { useFilesStore } from "@/store/files.store";

function App() {
  const isAuthenticated = useAuthStore(s => s.isAuthenticated());
  useEffect(() => {
    const init = async () => {

      if (isAuthenticated) {
        const files = await filesService.getAll({ recent: true });
        const pinned = await filesService.getAll({ recent: true, pinned: true });
        const storage = await filesService.getStorageInfo();

        useFilesStore.setState({ files, pinned, storage })
      }

      return null
    }

    init()
  })

  return (
    <>
      <Providers>
        <AppRouter />
      </Providers>
    </>
  )
}

export default App

import { AppRouter } from "../AppRouter/AppRouter"
import Providers from "../Providers/Providers"

function App() {
  return (
    <>
      <Providers>
        <AppRouter />
      </Providers>
    </>
  )
}

export default App

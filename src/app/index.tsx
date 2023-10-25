import { RouterProvider } from "react-router-dom"
import { AppProvider } from "./provider"
import { Router } from "./provider/router"

function App() {

  return (
    <AppProvider>
        <RouterProvider router={Router()}/>
    </AppProvider>
  )
}

export default App

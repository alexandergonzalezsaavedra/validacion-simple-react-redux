import { useSelector } from 'react-redux'
import Login from "./pages"
import Listado from './pages/listado'
export const App = () => {
  const { tokenUser } = useSelector(state => state.tokenAccess)
  return (
    <>
      {
        (() => {
          if (!tokenUser) {
            return (
              <Login />
            )
          } else {
            return (
              <Listado />
            )
          }
        })()
      }

    </>
  )
}
export default App
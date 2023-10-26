import { HashRouter } from "react-router-dom";
import { useAuth } from '../hooks/auth'
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth()
 return(
  <HashRouter>
    { user ? <AppRoutes/> : <AuthRoutes/>}
  </HashRouter>
 )
}
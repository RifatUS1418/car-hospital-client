import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider/AuthProvider"

const useAuth = () => {
    const auth = useContext(AuthContext);
}

export default useAuth;
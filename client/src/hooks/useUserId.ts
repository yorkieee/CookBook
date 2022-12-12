import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const useUserId = () => {
    const { user } = useContext(AuthContext);
    
    if (!user) return ''

    return user.user.uid
  }
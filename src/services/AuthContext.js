import { createContext } from "react";

export const AuthContext = createContext({
  isAuth: false,
  setIsAuth: () => {},
  userRole: null,
  setUserRole: () => {}
});
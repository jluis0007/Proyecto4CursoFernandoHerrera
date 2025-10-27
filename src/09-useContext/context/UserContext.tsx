import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { users, type User } from "../data/user-mock.data";

/* interface UserContextProps { // este lo usariamos como el tipo de children dentro del componente
  children: React.ReactNode;
} */
type AuthStatus = "checking" | "authenticated" | "not-authenticated";
interface UserContextProps {
  //state
  authStatus: AuthStatus;
  user: User | null;

  //Methods
  login: (userID: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvideer /* : FC<PropsWithChildren> */ = ({
  children,
}: /* UserContextProps */ PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handlelogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }
    setUser(user);
    setAuthStatus("authenticated");
    localStorage.setItem("userId", userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setAuthStatus("not-authenticated");
    setUser(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      handlelogin(+storedUserId);
    }
    handleLogout();
  }, []);

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handlelogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};

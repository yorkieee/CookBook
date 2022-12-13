import { createContext, useState, ReactNode } from "react";

type userType = {
  success: boolean;
  user: {
    uid: string;
    name: string;
    email: string;
  };
} | null;

type AuthContextValue = {
  user: userType;
  register: (
    email: string,
    password: string,
    nameForm: string
  ) => Promise<{ success: boolean; error: string }>;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error: string }>;
  logout: () => void;
};

const initialAuth: AuthContextValue = {
  user: null,
  register: () => {
    throw new Error("context not provided.");
  },
  login: () => {
    throw new Error("context not provided.");
  },
  logout: () => {
    throw new Error("logout not successful.");
  },
};

export const AuthContext = createContext<AuthContextValue>(initialAuth);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userType>(null);

  const backendUrl = "https://pern-pi.vercel.app";

  const register = async (
    email: string,
    password: string,
    nameForm: string
  ) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name: nameForm }),
    };

    const res = await fetch(`${backendUrl}/signup`, options);
    const { success, error, jwt, name, uid } = await res.json();
    localStorage.setItem("jwt", jwt);

    setUser({
      success: true,
      user: {
        uid,
        name,
        email,
      },
    });

    return { success, error };
  };

  const login = async (email: string, password: string) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    const res = await fetch(`${backendUrl}/login`, options);
    const { success, error, name, token, uid } = await res.json();

    localStorage.setItem("jwt", token);

    if (success) {
      setUser({
        success: true,
        user: {
          uid,
          name,
          email,
        },
      });
    }

    return { success, error };
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

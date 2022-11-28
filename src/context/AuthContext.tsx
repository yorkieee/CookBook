import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

const backendUrl = "http://localhost:5001";

type user = {
  success: boolean;
  user: {
    name: string;
    email: string;
  };
};

export type AuthContextValue = {
  user: user | null;
  isLoggedIn: boolean;
  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; error: string }>;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error: string }>;
  logout: () => void;
};
const initialAuth: AuthContextValue = {
  user: null,
  isLoggedIn: false,

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
  const [user, setUser] = useState<user | null>(initialAuth.user);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
    const { success, error, jwt, name } = await res.json();
    localStorage.setItem("jwt", jwt);
    setUser({ ...user, name });
    return { success, error };
  };

  const login = async (email: string, password: string) => {
    console.log("email", email);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/login`, options);
    const { success, token, error, name } = await res.json();
    localStorage.setItem("jwt", token);
    setUser({ ...user, name });
    setIsLoggedIn(true);
    return { success, error };
  };

  const getProfile = async () => {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        method: "get",
        params: { id: 1 },
      };

      const data = await axios.get(`${backendUrl}/profile`, options);

      if (data.data) {
        setUser(data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, register, login, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

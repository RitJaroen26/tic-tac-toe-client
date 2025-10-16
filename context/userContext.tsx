"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
    username: string | null;
    setUsername: (name: string | null) => void;
}

const UserContext = createContext<UserContextType>({
    username: null,
    setUsername: () => {}
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState<string | null>(() => {
        return typeof window !== "undefined" ? localStorage.getItem("username") : null;
    });

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
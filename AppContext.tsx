
import React, { createContext, useState, ReactNode } from 'react';

type UserContextType = {
  event: { id: string };
  setEvent: React.Dispatch<React.SetStateAction<{ id: string }>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [event, setEvent] = useState({ id: 'event-id' });

  return (
    <UserContext.Provider value={{ event, setEvent }}>
      {children}
    </UserContext.Provider>
  );
};

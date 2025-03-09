"use client";

import React from "react";

import { AuthScreenContext } from "./AuthScreenContext";

export interface AuthScreenProviderProps {
  children: React.ReactNode;
}

export function AuthScreenProvider({ children }: AuthScreenProviderProps) {
  const [authScreen, setAuthScreen] = React.useState<{ phone: string }>();

  const value = React.useMemo(
    () => ({
      value: authScreen,
      set: (phone: string) => setAuthScreen({ phone }),
    }),
    [authScreen]
  );

  return (
    <AuthScreenContext.Provider value={value}>
      {children}
    </AuthScreenContext.Provider>
  );
}

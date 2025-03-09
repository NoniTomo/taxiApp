import { useStorageState } from "@/hooks/useStorageState";
import { AuthContext } from "./AuthContext";
import type { PropsWithChildren } from "react";

export function AuthProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  console.log("session = ", session);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession("xxx");
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

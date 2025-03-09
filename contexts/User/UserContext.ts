import React from "react";

export interface UserContextParams {
  value?: User;
  set: (user: User | undefined) => void;
}

export const UserContext = React.createContext<UserContextParams>({
  value: undefined,
  set: () => {},
});

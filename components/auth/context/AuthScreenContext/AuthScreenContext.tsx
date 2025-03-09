"use client";

import React from "react";

export interface AuthScreenContextParams {
  value?: { phone: string };
  set: (phone: string) => void;
}

export const AuthScreenContext = React.createContext<AuthScreenContextParams>({
  value: undefined,
  set: () => {},
});

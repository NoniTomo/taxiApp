import React from "react";

import { AuthScreenContext } from "./AuthScreenContext";

export const useAuthScreen = () => React.useContext(AuthScreenContext);

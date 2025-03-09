import React from "react";

export interface OrderContextParams {
  value?: Order;
  set: (user: Order | undefined) => void;
}

export const OrderContext = React.createContext<OrderContextParams>({
  value: undefined,
  set: () => {},
});

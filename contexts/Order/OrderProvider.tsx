import React from "react";

import { OrderContext } from "./OrderContext";

export interface OrderProviderProps {
  children: React.ReactNode;
  defaultOrder?: Order;
}

export function OrderProvider({
  children,
  defaultOrder = { payType: "nonСash" },
}: OrderProviderProps) {
  const [order, setOrder] = React.useState<Order | undefined>(defaultOrder);

  const value = React.useMemo(() => ({ value: order, set: setOrder }), [order]);

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

interface User {
  phone: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

type Fares = "economy" | "comfort" | "comfortPlus" | "child" | "cargo";
type PayType = "cash" | "nonСash";

interface Order {
  startAddress?: YamapSearch;
  finishAddress?: YamapSearch;
  fares?: Fares;
  payType: PayType;
}

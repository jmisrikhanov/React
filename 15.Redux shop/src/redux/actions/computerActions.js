import { SELL_COMPUTER } from "../types/types";

export const sellComputer = (number = 1) => {
  return {
    type: SELL_COMPUTER,
    payload: number,
  };
};

import { SELL_WATCH } from "../types/types";

export const sellWatch = (number = 1) => {
  return {
    type: SELL_WATCH,
    payload: number,
  };
};

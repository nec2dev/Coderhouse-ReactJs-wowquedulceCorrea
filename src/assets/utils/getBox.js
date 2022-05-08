import { box } from "./box";

export const getBox = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(box), 2000);
    });
  };
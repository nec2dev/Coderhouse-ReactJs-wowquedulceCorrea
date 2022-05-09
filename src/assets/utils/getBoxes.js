import { boxes } from "./boxes";

export const getBoxes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(boxes), 2000);
  });
};

export const getBoxById = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(boxes), 2000);
    });
  };


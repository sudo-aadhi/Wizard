import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classnames) => {
  return twMerge(clsx(classnames));
};

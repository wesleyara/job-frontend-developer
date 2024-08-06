import { type ClassValue, clsx } from "clsx";
import { objectToArray } from "essentials-utils";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const classificationArray = (obj: any) => {
  return objectToArray(obj).filter(item => item.name);
};

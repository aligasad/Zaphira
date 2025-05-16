import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine and merge Tailwind CSS classes
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

// import { ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
 
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }
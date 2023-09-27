import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { SERVER_URL } from '../../constants/settings';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const getServerSidePhotoLink = (
  module: string,
  photo: string = 'default.jpg'
) => {
  return `${SERVER_URL}/img/${module}/${photo}`;
};
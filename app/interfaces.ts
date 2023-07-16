import { StaticImageData } from "next/image";

export interface INavItem {
    label: string;
    href: string;
    }

export interface ISlideImage {
  id: number;
  url: StaticImageData;
  alt?: string;
}

export interface IBook {
  id: string;
  authors: string;
  title: string;
  averageRating: number;
  ratingsCount: number;
  description: string;
  amount: number;
  currencyCode: string;
  thumbnail: string;
  coverMedium?: string;
}

export interface ICartItem {
  id: IBook["id"],
  quantity: number,
  price: number,
  product: IBook,

}

export interface IUser {
  name: string;
  email: string;
  bio: string;
  image: string;
}

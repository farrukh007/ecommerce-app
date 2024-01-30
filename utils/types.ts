import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    name: string;
    category: string;
    tagline: string;
    price: number;
    image: string | StaticImageData;
};
import { Product } from "./types";
import P1 from "@/public/assests/female-1.png";
import P2 from "@/public/assests/female-2.png";
import P3 from "@/public/assests/female-3.png";
import P4 from "@/public/assests/female-4.png";
import P5 from "@/public/assests/female-5.png";
import P6 from "@/public/assests/female-6.png";
import P7 from "@/public/assests/female-7.png";
import P8 from "@/public/assests/female-8.png";
import P9 from "@/public/assests/female-9.png";
import P10 from "@/public/assests/male-1.png";
import P11 from "@/public/assests/male-2.png";

export const Products: Product[] = [
    {
        id: 1,
        name: 'Cameryn Sash Tie Dress',
        category: 'Female',
        tagline: 'Dress',
        price: 545,
        image: P1,
    },
    {
        id: 2,
        name: 'Brushed Raglan Sweatshirt',
        category: 'Female',
        tagline: 'Sweater',
        price: 195,
        image: P3,
    },
    {
        id: 3,
        name: 'Flex Sweatshirt',
        category: 'Female',
        tagline: 'Sweater',
        price: 175,
        image: P2,
    },
    {
        id: 4,
        name: 'Flex Sweatpants',
        category: 'Female',
        tagline: 'Pants',
        price: 175,
        image: P4,
    },
    {
        id: 5,
        name: 'Pink Fleece Sweatpants',
        category: 'Female',
        tagline: 'Pants',
        price: 195,
        image: P5,
    },
    {
        id: 6,
        name: 'Lite Sweatpants',
        category: 'Female',
        tagline: 'Pants',
        price: 150,
        image: P6,
    },
    {
        id: 7,
        name: 'Imperial Alpaca Hoodie',
        category: 'Female',
        tagline: 'Jackets',
        price: 525,
        image: P7,
    },
    {
        id: 8,
        name: 'Flex Push Button Bomber',
        category: 'Male',
        tagline: 'Jackets',
        price: 225,
        image: P10,
    },
    {
        id: 9,
        name: 'Muscle Tank',
        category: 'Female',
        tagline: 'T Shirts',
        price: 75,
        image: P8,
    },
    {
        id: 10,
        name: 'Brushed Bomber',
        category: 'Female',
        tagline: 'Jackets',
        price: 225,
        image: P9,
    },
    {
        id: 11,
        name: 'Raglan Sweatshirt',
        category: 'Male',
        tagline: 'Sweater',
        price: 195,
        image: P11,
    },
];
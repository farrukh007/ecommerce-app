import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const ProductCard = (props: {
    id: number,
    name: string,
    category: string,
    tagline: string,
    price: number,
    image: string | StaticImageData,
}) => {
    return (
        <section className='py-5'>
            <Link href={`/products/${props.id}`}>
                <Image src={props.image} alt='product' className='h-70 w-60' />
            </Link>
            <h3 className='font-bold text-lg mt-3'>{props.name}</h3>
            <div className='flex gap-x-2'>
                <h2 className='font-bold text-base text-gray-400'>{props.category}</h2>
                <h2 className='text-base font-semibold text-gray-400'>{props.tagline}</h2>
            </div>
            <p className='font-bold text-lg'>${props.price}</p>
            <Button className='h-3 px-4 py-4 mt-2 gap-x-2 text-xs'>
                <ShoppingCart />Add to Cart
            </Button>
        </section>
    )
}

export default ProductCard
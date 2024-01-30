import Image from 'next/image';
import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import Promotion from '@/views/Promotion';
import Newsletter from '@/views/Newsletter';

export default function Home() {
  return (
   <div>
    <Hero />

    {/* Promotion */}
    <Promotion />

    {/* Products List */}
    <ProductList />

     {/* News Letter */}
     <Newsletter />
   
   </div>
  )
}

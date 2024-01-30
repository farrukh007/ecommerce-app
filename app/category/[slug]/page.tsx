import ProductCard from '@/components/ProductCard';
import { Products } from '@/utils/mock';

const getProductByCategory = (category: string) => {
    return Products.filter((product) => product.category === category);
};


export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug);

    return (
        <div className='flex justify-evenly mt-16 py-10 flex-wrap'>

            {
                result.length > 0 ? (
                    result.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                            id={product.id}
                            tagline={product.tagline}
                        />
                    ))
                ) : (

                    <p>No Product Found</p>
                )
            }

        </div>
    )
}
import { Products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
const AllProducts = () => {
    // const productChecks = Products.slice(0,10);
  return (
    <div className='flex justify-evenly mt-6 py-10 flex-wrap'>
            {
                Products.map((product)=>(
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
            }
    </div>
  )
}

export default AllProducts
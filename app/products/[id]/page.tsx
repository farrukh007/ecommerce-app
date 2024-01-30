import { Products } from "@/utils/mock";
import Image from "next/image";
import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const getProductDetail = (id: number) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["XS", "S", "M", "L", "XL"];
export default function Page({ params }: { params: { id: number } }) {
  const result = getProductDetail(params.id);

  return (
    <div className="flex mt-16 py-10 flex-wrap">
      {result.map((product, index) => (
        <div key={index} className="flex justify-between gap-10">
          {/* Left Image */}
          <div>
            <Image
              src={product.image}
              alt={product.name}
              className="h-[600px] w-[600px]"
            />
          </div>
          {/* Right Content */}
          <div>
            <div>
              {/* <h1>Product Detail:</h1> */}
              <h1 className="font-sans text-3xl mt-3">{product.name}</h1>
              <h2 className="text-2xl font-semibold text-gray-400">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="text-base font-bold mt-6">SELECT SIZE</h3>

              {/* Sizes */}
              <div className="flex gap-x-6">
                {sizes.map((size, index) => {
                  return (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border duration-300 hover:shadow-xl mt-2 center"
                    >
                      <span className="text-sm text-gray-600 font-bold">
                        {size}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Quantity */}
              <div className="flex items-center gap-x-4 mt-6">
                <h3 className="text-base font-bold">Quantity:</h3>
                <div>
                  <Quantity />
                </div>
              </div>
              {/* Add to Cart */}
              <div className="center gap-x-4">
                <Button className="h-6 px-8 py-8 mt-6 gap-x-4 text-lg">
                  <ShoppingCart />
                  Add to Cart
                </Button>
                <h2 className="font-sans text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '@/components/ProductCard';
import { Products } from '@/utils/mock';

const ProductList = () => {
    const productChecks = Products.slice(0, 10);
    //Carousel Settings
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className='mt-[100px]'>
                <h3 className='text-blue-600 font-sans font-bold text-sm center mb-2'>PRODUCTS</h3>
                <h2 className="center scroll-m-20 pb-2 text-4xl font-bold tracking-tight transition-colors first:mt-2">
                    Check What We Have
                </h2>
            </div>

            <div className='mt-10'>

                <Slider {...settings}>
                    {
                        productChecks.map((product) => (
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
                </Slider>
            </div>
        </div>
    )
}

export default ProductList
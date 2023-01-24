import React from 'react'
import Image from 'next/image'
import SkinMedica from '../../public/images/SkinMedica.png'
import Elta from '../../public/images/Elta.png'
import Oleplex from '../../public/images/Olaplex.png'
import Products from '../data/products'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 770 },
    items: 2
  },

  smallTablet: {
    breakpoint: { max: 770, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
function FeaturedProducts() {
  return (
    <div className="mt-24 lg:max-w-6xl container mx-auto  ">
      <div className=" max-h-12 mb-12 text-center lg:text-start lg:mb-4 col-span-9 text-4xl lg:text-5xl text-cadiz-no-color text-zinc-900 font-bold">
        Trending Products
      </div>

      <Carousel responsive={responsive}>
        {Products.map((boy) => {
          return (
            <div key={boy.id}>
              <div className="border-2 shadow-md min-h-[30rem]  w-[22rem]  mx-auto">
                <div className="flex justify-center ">
                  <Image
                    className="self-center max-h-72"
                    src={boy.image}
                    alt="eyetreatment "
                  />
                </div>
                <div className="grid h-48 grid-rows-4   gap-2 items-center ">
                  <div className="mt-9 row-span-3 text-center h-20 text-cadiz-no-color text-zinc-700 text-lg font-medium ">
                    {boy.description}
                  </div>
                  <div className="row-span-1max-h-fit text-center md:max-w-xs flex justify-center  lg:text-lg text-cadiz-m font-normal  text-zinc-900 text-lg">
                    {boy.title}
                  </div>
                  <div className="row-span-1 justify-center items-end max-h-fit flex">
                    <button className="bg-rich-blue hover:bg-deep-blue text-cadiz-no-color text-white tracking-wide font-bold text-base py-2 px-4 rounded  md:w-36 ">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>

      {/* 
      <div className="col-span-9 lg:col-span-3 max-w-sm rounded overflow-hidden shadow-lg ">
        <div className="flex justify-center">
          <Image
            className="self-center max-h-72"
            src={Elta}
            alt="eyetreatment "
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-normal text-center text-cadiz-no-color text-zinc-700 text-lg mb-2">
            SkinCeuticals C E Ferulic Antioxidant Serum
          </div>
          <p className="text-zinc-900  text-center text-cadiz-m  text-xl font-medium">
            Skin Care $41.00
          </p>
          <div className=" justify-center   py-4 max-h-fit flex">
            <button className="bg-rich-blue hover:bg-deep-blue text-cadiz-no-color text-white tracking-wide font-bold text-base py-2 px-4 rounded  md:w-36 ">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-9 lg:col-span-3 ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="flex justify-center">
            <Image
              className="self-center max-h-72"
              src={Oleplex}
              alt="eyetreatment "
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-normal text-center text-cadiz-no-color text-zinc-700 text-lg mb-2">
              SkinCeuticals C E Ferulic Antioxidant Serum
            </div>
            <p className="text-zinc-900  text-center text-cadiz-m  text-xl font-medium">
              Skin Care $41.00
            </p>
            <div className=" justify-center   py-4 max-h-fit flex">
              <button className="bg-rich-blue hover:bg-deep-blue text-cadiz-no-color text-white tracking-wide font-bold text-base py-2 px-4 rounded  md:w-36 ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeaturedProducts

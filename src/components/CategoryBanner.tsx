import React from 'react'
import Image from 'next/image'
import Category from '../../public/images/CategoryPlaceholder.png'

function CategoryBanner() {
  return (
    <div>
      <div className="mt-8 grid bg-white container mx-auto  max-w-6xl items-center   grid-cols-1 lg:grid-cols-3  p-12">
        <div
          className="grid max-h-96 grid-rows-2  max-w-fit lg:max-w-xs gap-4 
     items-center"
        >
          <div className="row-span-1 text-center text-4xl  lg:text-5xl text-cadiz-m text-zinc-900 font-medium">
            Lorem Ipsum
          </div>
          <div className="row-span-1 text-center text-base  lg:text-lg text-cadiz-m text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur. A.
          </div>
        </div>
        <div className="col-span-2 flex justify-center lg:justify-end items-center  ">
          <Image
            src={Category}
            className="max-w-2xl lg:max-w-full"
            alt="image"
          />
        </div>
      </div>
    </div>
  )
}

export default CategoryBanner

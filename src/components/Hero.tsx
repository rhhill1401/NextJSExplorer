import React from 'react'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import flower from '../../public/images/flower.png'

function Hero() {
  return (
    <div className="grid container mt-28 mx-auto max-w-[79rem] max-h-max grid-cols-1 lg:grid-cols-3 grid-rows-1 bg-white">
      <div className="col-span-1 flex justify-center items-center">
        <div
          className="grid max-h-96 grid-rows-4 max-w-xs gap-4 
         items-center p-9 lg:p-0"
        >
          <div className="row-span-1">
            <h1 className="text-6xl  text-center lg:text-left text-custom font-medium">
              Explorer
            </h1>
          </div>
          <div className="row-span-2 text-center lg:text-left text-base  lg:text-lg text-cadiz-no-color font-normal text-zinc-500 tracking-wide">
            Lorem ipsum dolor sit amet consectetur. Sagittis pellentesque varius
            eget non arcu nulla. Consequat massa nulla tellus purus.
          </div>
          <div className="flex  justify-center lg:justify-start  lg:self-end">
            <button className="bg-rich-blue hover:bg-deep-blue text-cadiz-no-color text-white tracking-wide font-bold text-base py-2 px-4 rounded  max-h-12 md:w-36 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-1">
        <Image
          src={flower}
          className="md:max-w-auto xl:max-w-[56rem]"
          alt="image"
        />
      </div>
    </div>
  )
}

export default Hero

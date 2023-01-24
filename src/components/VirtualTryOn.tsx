import React from 'react'
import Image from 'next/image'
import Fair from '../../public/images/Fair.png'
import Medium from '../../public/images/Medium.png'
import LightMedium from '../../public/images/LightMedium.png'
import Deep from '../../public/images/Deep.png'
import DescriptionLight from '@/shared/DescriptionLight'

function VirtualTryOn() {
  return (
    <div className="mt-7 grid bg-deep-blue container mx-auto min-w-[100vw] max-h-[60rem] grid-cols-1 lg:grid-cols-2 gap-x-24 items-center p-12">
      <div className="col-span-1  mb-6 lg:mb-0 flex justify-center lg:justify-end max-w-7xl ">
        <div className="grid grid-rows-2 grid-flow-col  max-h-fit gap-2 ">
          <Image
            src={Fair}
            alt="image"
            className="row-span-1 col-span-1 max-h-[16rem]"
          />
          <Image
            src={Medium}
            alt="image"
            className="row-span-1 col-span-1 max-h-[16rem]"
          />
          <Image
            src={LightMedium}
            alt="image"
            className="row-span-1 object-cover col-span-1 max-h-[16rem]"
          />
          <Image
            src={Deep}
            alt="image"
            className="row-span-1 col-span-1 max-h-[16rem]"
          />
        </div>
      </div>
      <div>
        <DescriptionLight
          title="Lorem Ipsum"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dolorem, repellat culpa quam voluptatibus esse consequatur excepturiaut doloremque eius nisi sint eligendi possimus eveniet voluptatesalias consectetur porro officiis."
          buttonName="Learn More"
        />
      </div>
    </div>
  )
}

export default VirtualTryOn

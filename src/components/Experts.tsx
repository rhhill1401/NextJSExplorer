import React from 'react'
import Image from 'next/image'
import expert from '../../public/images/experts.jpg'
import DescriptionLight from '@/shared/DescriptionLight'

function Experts() {
  return (
    <div className=" mt-7 grid bg-brown-medium container mx-auto min-w-[100vw] grid-cols-1 lg:grid-cols-2 gap-x-24 items-center p-12 ">
      <div className="col-span-1 flex justify-center lg:justify-end items-center  ">
        <Image src={expert} className="max-w-7xl lg:max-h-fit" alt="image" />
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

export default Experts

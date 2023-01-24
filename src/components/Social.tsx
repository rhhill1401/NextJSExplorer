import React from 'react'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import phone from '../../public/images/phone.png'
import socialStyles from '../styles/social.module.scss'
import Description from '../shared/Description'
function Social() {
  return (
    <div className="mt-28 grid bg-white container mx-auto max-w-6xl  grid-cols-1 lg:grid-cols-2 gap-x-24 p-12">
      <div className="col-span-1 flex justify-center lg:justify-end items-center  ">
        <Image
          src={phone}
          className="max-w-auto mb-6 lg:mb-0  lg:max-w-[26rem]"
          alt="image"
        />
      </div>
      <Description
        title="Lorem Ipsum"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dolorem, repellat culpa quam voluptatibus esse consequatur excepturiaut doloremque eius nisi sint eligendi possimus eveniet voluptatesalias consectetur porro officiis."
        buttonName="Learn More"
      />
    </div>
  )
}

export default Social

import React from 'react'

interface Props {
  title: string
  text: string
  buttonName: string
}

function DescriptionLight({ title, text, buttonName }: Props) {
  return (
    <div className="col-span-1  flex justify-center lg:justify-start items-center">
      <div
        className="grid  max-h-96 grid-rows-4  max-w-fit mt-11 lg:max-w-xs gap-4 
     items-center "
      >
        <div
          className="mt-7 row-span-1  text-center lg:text-left  text-4xl lg:text-5xl text-cadiz-no-color text-white font-medium
          "
        >
          {title}
        </div>
        <div className="row-span-2 max-h-fit text-center md:max-w-xs lg:text-left flex justify-center text-base lg:text-lg text-cadiz-no-color font-normal text-white tracking-wide">
          {text}
        </div>
        <div className="row-span-1 justify-center  max-h-fit flex lg:justify-start">
          <button className="bg-rich-blue hover:bg-deep-blue text-cadiz-no-color text-white tracking-wide font-bold text-base py-2 px-4 rounded  md:w-36 ">
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DescriptionLight

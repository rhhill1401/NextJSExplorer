import React, { useState } from 'react';
import flower from '../../public/images/flower.png';
import Models from '../../public/images/Models.png';
import Image from 'next/image';
import Category from '../../public/images/CategoryPlaceholder.png';

const TutorialLayout: React.FC = () => {
  const [title, setTitle] = useState<string>('Try it On');
  return (
    <div className='grid container mt-24 mx-auto max-w-6xl max-h-[175rem] grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-x-7 gap-y-7 '>
      <div className='col-span-4 lg:col-span-2  flex justify-center items-center bg-white'>
        <div className='relative'>
          <video
            className='object-cover h-[36rem] '
            src={require('../static/tutorial.mp4')}
            autoPlay
            loop
            muted
          />
          <div className='absolute bottom-2 left-10 right-0 lg:text-5xl z-20  text-white font-medium text-cadiz-m '>
            Tutorials
          </div>
          <div className='absolute inset-y-0  bg-zinc-800/30 h-full w-full'></div>
        </div>
      </div>
      <div className='col-span-4 lg:col-span-2 row-span-1 flex justify-center max-h-[max] p-12 bg-light-medium'>
        <div className='grid grid-rows-7 max-h-full gap-4'>
          <div className=' row-span-1 text-3xl text-center lg:text-5xl font-medium text-cadiz-m text-zinc-900'>
            {title.toLocaleUpperCase()}
          </div>
          <div className=' row-span-1 text-base text-center max-w-xs lg:text-lg font-medium text-cadiz-no-color text-zinc-500'>
            Lorem ipsum dolor sit amet. Sagittis pellentesque
          </div>
          <div className='row-span-4 flex justify-center relative'>
            <Image
              src={Models}
              className='md:max-w-full min-w-full'
              alt='image'
            />
            <div className='absolute inset-y-0 right-0 border-solid border-zinc-900 border-l-2    bg-zinc-800/50 h-full w-40'></div>
          </div>
        </div>
      </div>
      <div className='row-span-1 col-span-4   '>
        <div className=' grid bg-white container mx-auto h-[36rem] max-w-6xl items-center grid-cols-1 lg:grid-cols-3  p-12'>
          <div
            className='grid  max-h-96 grid-rows-1  lg:grid-rows-2 lg:max-w-xs text-center    gap-4 
     items-center '
          >
            <div className='row-span-1 text-center text-4xl lg:text-5xl text-cadiz-m text-zinc-900 font-medium'>
              Lorem Ipsum
            </div>
            <div className='row-span-1 text-cadiz-no-color text-zinc-500 text-base lg:text-lg  font-normal'>
              Lorem ipsum dolor sit amet consectetur. A.
            </div>
          </div>
          <div className='col-span-2 flex justify-center lg:justify-end items-center  '>
            <Image
              src={Category}
              className='max-w-2xl lg:max-w-full'
              alt='image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialLayout;

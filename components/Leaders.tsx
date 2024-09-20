import React from 'react';
import { GlobeDemo } from './ui/GridGlobe';
import { logos } from '@/data';
import Image from 'next/image';
import { CardDemo } from './ui/AnimatedCard';

const Leaders = () => {
  return (
    <div className='w-full h-auto bg-slate-900 py-1 pl-10'>
      <h1 className='text-3xl font-normal text-slate-100 mb-1 xs:text-xl py-8 xl:pl-44 lg:pl-40 md:pl-36 xs:pl-32 select-none'>
        Join a leader in 19 categories
      </h1>
      <div className='flex flex-col xl:flex-row lg:flex-row md:flex-col'>
        <div className='flex-1 text-slate-200 text-xl py-4 xl:pl-44 lg:pl-40 md:pl-36 pr-5 xl:pr-0 md:pr-0 font-normal leading-8 select-none'>
          <p>
            Semrush Named a Leader in 19 Categories, including Competitive Intelligence and Market Intelligence, in G2&rsquo;s Summer 2023 Report.
          </p>
          <CardDemo />
        </div>
      </div>
      
    </div>
  );
}

export default Leaders;

          {/**
           * 

          <p className='px-4 md:px-8 lg:px-10 mt-12 text-slate-300'>Trusted by</p>
          <div className='px-10 flex flex-wrap gap-4 mt-4'>
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                //className='h-12 object-contain'
                width={150}
                height={150}
              />
            ))}
          </div>
                     */}
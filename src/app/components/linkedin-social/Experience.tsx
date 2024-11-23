import React from 'react';

interface ExperienceInterface {
  title: string;
  subtitle: string;
  data: string;
  extrasubtitle: string;
  img: string;
}

const Experience = ({
  img,
  title,
  subtitle,
  extrasubtitle,
  data,
}: ExperienceInterface) => {
  return (
    <div className='flex flex-row gap-2 items-start mt-5'>
      <img className='w-[60px] h-[60px]' src={img} alt='nebraska' />
      <div className='flex flex-col gap-1'>
        <h4 className='text-[13px]'>{title}</h4>
        <span className='text-[10px]'>{subtitle}</span>
        <span className='text-[10px]'>{extrasubtitle}</span>
        <p className='text-[9px] text-gray-500 mt-1'>{data}</p>
      </div>
    </div>
  );
};

export default Experience;

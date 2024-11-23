import React from 'react';

interface CertificationsInterface {
  title: string;
  subtitle: string;
  img: string;
  link: string;
}

const Certifications = ({
  title,
  subtitle,
  img,
  link,
}: CertificationsInterface) => {
  return (
    <div className=' mt-2'>
      <div className='flex flex-row gap-2 items-center'>
        <img
          src={img}
          alt={title}
          className='w-[60px] h-[60px] border-2 border-gray-100'
        />
        <div>
          <h4 className='text-[13px]'>{title}</h4>
          <p className='text-[9px] text-gray-500'>{subtitle}</p>
        </div>
      </div>
      <a
        className='border-[1px] border-black  p-2 rounded-full text-[10px] ml-[70px]'
        target='_blank'
        href={link}
      >
        Mostrar credencial
      </a>
    </div>
  );
};

export default Certifications;

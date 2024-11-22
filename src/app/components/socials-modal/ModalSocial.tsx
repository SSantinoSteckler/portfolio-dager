import React from 'react';

const ModalSocial = () => {
  return (
    <div className='bg-[#ddd5f1] p-4 border-t-2 border-[#7758bf] grid grid-cols-4  w-full  gap-2'>
      <img
        className=' w-[40px] h-[40px] object-cover'
        src='/instagram.png'
        alt='instagram'
      />

      <img
        src='/github-logo.png'
        alt='github'
        className=' w-[40px] h-[40px] object-cover'
      />

      <img
        src='/twitch-logo-violeta.png'
        alt='twitch'
        className=' w-[40px] h-[40px] object-cover'
      />

      <img
        src='/youtube-logo.png'
        alt='youtube'
        className=' w-[50px] h-[50px] object-cover'
      />
    </div>
  );
};

export default ModalSocial;

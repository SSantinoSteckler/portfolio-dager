import React from 'react';

const ModalSocial = () => {
  return (
    <section className='w-[407px] h-[330px] bg-[#826293] flex flex-col gap-[15px] p-[29px_32px_24px] text-[#826293]'>
      <article className='bg-[#D9D9D9] p-5 rounded-lg gap-4 flex flex-col'>
        <h2 className='text-[32px] self-center'>Mis Redes</h2>
        <div className='flex flex-col gap-1 text-[1rem]'>
          <a
            href='https://www.youtube.com/@DotDager'
            className='flex w-full h-23px items-center justify-center hover:bg-[#82629378] hover:text-white hover:cursor-pointer'
            rel='noreferrer'
            title='YouTube'
            target='_blank'
          >
            YouTube
          </a>
          <a
            href='https://www.twitch.tv/dagerxiv'
            className='flex w-full h-23px items-center justify-center hover:bg-[#82629378] hover:text-white hover:cursor-pointer'
            rel='noreferrer'
            title='Twitch'
            target='_blank'
          >
            Twitch
          </a>
          <a
            href='https://github.com/MarianoVilla'
            className='flex w-full h-23px items-center justify-center hover:bg-[#82629378] hover:text-white hover:cursor-pointer'
            rel='noreferrer'
            title='Github'
            target='_blank'
          >
            Github
          </a>
          <a
            href='https://www.instagram.com/dager.32/'
            className='flex w-full h-23px items-center justify-center hover:bg-[#82629378] hover:text-white hover:cursor-pointer'
            rel='noreferrer'
            title='Instagram'
            target='_blank'
          >
            Instagram
          </a>
          <a
            href='https://www.linkedin.com/in/mariano-luis-villa/'
            className='flex w-full h-23px items-center justify-center hover:bg-[#82629378]  hover:text-white hover:cursor-pointer'
            rel='noreferrer'
            title='LinkedIn'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>
      </article>
      <footer className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <div className='bg-[#D9D9D9] rounded-full w-5 h-5'></div>
          <div className='bg-[#D9D9D9] rounded-full w-5 h-5'></div>
          <div className='bg-[#D9D9D9] rounded-full w-5 h-5'></div>
        </div>
        <div className='bg-[#D9D9D9] rounded-sm w-6 h-[10px] '></div>
      </footer>
    </section>
  );
};

export default ModalSocial;

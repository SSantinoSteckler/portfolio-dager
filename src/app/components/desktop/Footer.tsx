'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import dagerImg from '../../../../public/dager1.jpg';
import { FooterBtn } from './FooterBtn';
import { useAudioStore } from '@/app/stores/store-app';
import MutedIcon from '../playlist/MutedIcon';
import ModalSocial from '../socials-modal/ModalSocial';

export const Footer = () => {
  const { isMuted, toggleMute, setIsPlayList } = useAudioStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(!isModalOpen);

  return (
    <footer className='relative h-[69px] w-full bg-[#826293] flex items-center justify-around gap-5 p-[12px_18px] g-[40px] press'>
      <div className='outline outline-4 outline-[#D9D9D9] w-[57px] h-full'>
        <Image
          src={dagerImg}
          className='w-full h-full blur-[1.1px]'
          alt='dot-dager-face'
          placeholder='blur'
        />
      </div>
      <div className='h-full w-full outline outline-4 outline-[#D9D9D9] flex items-center p-[4px_16px] bg-[#A4A4A4]'>
        <span className='text-[14px]'>www.dotdager.com</span>
      </div>
      <FooterBtn onClick={toggleMute}>
        <div>
          {isMuted ? (
            <MutedIcon />
          ) : (
            <svg
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
              className='h-[26.6px] w-[26.6px]'
            >
              <path
                fill='currentColor'
                d='M11 2h2v20h-2v-2H9v-2h2V6H9V4h2zM7 8V6h2v2zm0 8H3V8h4v2H5v4h2zm0 0v2h2v-2zm10-6h-2v4h2zm2-2h2v8h-2zm0 8v2h-4v-2zm0-10v2h-4V6z'
              />
            </svg>
          )}
        </div>
      </FooterBtn>
      <FooterBtn onClick={setIsPlayList}>
        <div>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            className='h-[26.6px] w-[26.6px]'
          >
            <path
              fill='currentColor'
              d='M10 13h6V5h6v4h-4v10h-8zm2 2v2h4v-2zM2 17h6v2H2zm6-4H2v2h6zM2 9h12v2H2zm12-4H2v2h12z'
            />
          </svg>
        </div>
      </FooterBtn>
      <FooterBtn onClick={openModal}>
        <div>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            className='h-[26.6px] w-[26.6px]'
          >
            <path
              fill='currentColor'
              d='M11 0H5v2H3v6h2v2h6V8H5V2h6zm0 2h2v6h-2zM0 14h2v4h12v2H0zm2 0h12v-2H2zm14 0h-2v6h2zM15 0h4v2h-4zm4 8h-4v2h4zm0-6h2v6h-2zm5 12h-2v4h-4v2h6zm-6-2h4v2h-4z'
            />
          </svg>
        </div>
      </FooterBtn>

      {isModalOpen && (
        <div className='absolute max-w-[200px] w-full bottom-[110%] left-[80%] transform -translate-x-1/2 z-10'>
          <ModalSocial />
        </div>
      )}
    </footer>
  );
};

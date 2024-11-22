'use client';
import { useState, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  name: string;
  minWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  maxWidth?: number;
  modalRef?: React.RefObject<HTMLDivElement>;
}

export const Window = ({
  children,
  name,
  minWidth = 700,
  minHeight = 400,
  maxHeight = 800,
  maxWidth = 1000,
  modalRef,
}: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - startPos.current.x;
    const y = e.clientY - startPos.current.y;
    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach events to the document to track mouse movements even if the mouse moves outside the window.
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section
      className={`bg-[#ddd5f1] absolute desktop-window`}
      style={{
        left: position.x,
        top: position.y,
        minHeight: `${minHeight}px`,
        minWidth: `${minWidth}px`,
        maxHeight: `${maxHeight}px`,
        maxWidth: `${maxWidth}px`,
      }}
      ref={modalRef}
    >
      <header
        className='flex justify-between items-center h-[57] w-full'
        ref={windowRef}
        onMouseDown={handleMouseDown}
      >
        <article className='w-full h-[57px] bg-[#7758BF] border-b-4 border-[#A185E3] flex items-center pl-5'>
          <span className='text-[12px]'>{name}</span>
        </article>
        <button className='w-[57px] h-[57px] bg-[#B74B4C] flex justify-center items-center shadow-[inset_0_0_0_6px_#AE4244] hover:shadow-[#B35152] hover:bg-[#B55B5C] close-window-btn transition-colors'>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            className='w-[26.25px] h-[26.25px]'
          >
            <path
              fill='#ffffff'
              d='M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z'
            ></path>
          </svg>
        </button>
      </header>
      <article className='w-full h-full p-5'>{children}</article>
    </section>
  );
};

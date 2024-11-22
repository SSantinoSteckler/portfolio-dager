'use client';
import { useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  name: string;
  width?: number;
  height?: number;
  modalRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
}

export const Window = ({
  children,
  name,
  width = 1348,
  height = 770,
  modalRef,
}: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Posición inicial del elemento

  const parentRef = document.getElementById('desktop-view');

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (!isDragging || !parentRef) return;

    const parentRect = parentRef.getBoundingClientRect();

    // Calcular posición relativa al padre
    const x = event.clientX - parentRect.left;
    const y = event.clientY - parentRect.top;

    // Actualizar posición del elemento
    setPosition({
      x: Math.max(0, Math.min(x, parentRect.width)), // Asegurarse de no salir del padre
      y: Math.max(0, Math.min(y, parentRect.height)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section
      className={`bg-[#ddd5f1] absolute`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        height: `${height}px`,
        width: `${width}px`,
      }}
      ref={modalRef}
    >
      <header
        onMouseDown={handleMouseDown}
        className='flex justify-between items-center h-[57] w-full'
      >
        <article className='w-full h-[53px] bg-[#7758BF] border-b-4 border-[#A185E3]'>
          <span>{name}</span>
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
      {children}
    </section>
  );
};

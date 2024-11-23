import { useState, useEffect, useRef } from 'react';

let currentZIndex = 10;

interface Props {
  children: React.ReactNode;
  name: string;
  minWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  maxWidth?: number;
  onClick: () => void;
}

export const Window = ({
  onClick,
  children,
  name,
  minWidth = 700,
  minHeight = 400,
  maxHeight = 800,
  maxWidth = 1000,
}: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 500, y: 60 });
<<<<<<< HEAD
=======
  const [zIndex, setZIndex] = useState(0);

>>>>>>> ff5fcb161d8c78838486995e7b487a976651637f
  const windowRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    currentZIndex++;
    setZIndex(currentZIndex);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = position;
    setIsDragging(true);
    startPos.current = {
      x: e.clientX - x,
      y: e.clientY - y,
    };

    // Traer la ventana al frente
    currentZIndex++;
    setZIndex(currentZIndex);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !windowRef.current) return;

    const windowElement = windowRef.current.getBoundingClientRect();

    const x = Math.min(
      Math.max(e.clientX - startPos.current.x, 0),
      window.innerWidth - windowElement.width
    );

    const y = Math.min(
      Math.max(e.clientY - startPos.current.y, 0),
      window.innerHeight - windowElement.height
    );

    setPosition({ x, y });
  };

  const handleMouseUp = () => setIsDragging(false);

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
    <div
      ref={windowRef}
      className={`bg-[#ddd5f1] fixed desktop-window`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        minHeight: `${minHeight}px`,
        minWidth: `${minWidth}px`,
        maxHeight: `${maxHeight}px`,
        maxWidth: `${maxWidth}px`,
        zIndex,
      }}
      onMouseDown={handleMouseDown}
    >
      <header className='flex justify-between items-center h-[57px] w-full'>
        <div className='w-full h-[57px] bg-[#7758BF] border-b-4 border-[#A185E3] flex items-center pl-5'>
          <span className='text-[12px] text-white'>{name}</span>
        </div>
        <button
          onClick={onClick}
          className='w-[57px] h-[57px] bg-[#B74B4C] flex justify-center items-center shadow-[inset_0_0_0_6px_#AE4244] hover:shadow-[#B35152] hover:bg-[#B55B5C] transition-colors'
        >
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
      <main className='p-5'>{children}</main>
    </div>
  );
};

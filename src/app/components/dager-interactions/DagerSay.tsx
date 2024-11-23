'use client';

import { useEffect, useState } from 'react';

interface Props {
  code:
    | 'bienvenida'
    | 'risa'
    | 'virus'
    | 'linkedin'
    | 'dotgpt'
    | 'gatitos'
    | 'lumber-jack'
    | string;
  duration?: number;
}

export const DagerSay = ({ code, duration = 2500 }: Props) => {
  const [modalClass, setModalClass] = useState('dager-modal'); // Estado para la clase del modal
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const modalTimeOut = setTimeout(() => {
      setModalClass('dager-close-modal');
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(modalTimeOut);
  }, [duration]);

  const dagerSay = [
    { code: 'bienvenida', sayThis: 'Puto el que entra' },
    { code: 'risa', sayThis: 'JAJAJA te la comiste toda' },
    { code: 'virus', sayThis: 'Sospechoso...' },
    { code: 'linkedin', sayThis: 'Luego podrías contactarme' },
    { code: 'dotgpt', sayThis: 'Ayer hablamos toda la noche sobre filosofía' },
    { code: 'gatitos', sayThis: 'Mucha ternura junta' },
    { code: 'lumber-jack', sayThis: 'Este juego se me hace conocido...' },
  ];

  const sayThis = dagerSay.find((item) => item.code === code)?.sayThis || '';

  if (!sayThis) return null;

  return (
    isVisible && (
      <article className='absolute z-[999] bottom-[50px]'>
        <div
          className={`${modalClass} w-[350px] min-h-[120px] max-h-[200px] border-4 border-[#826293] border-solid rounded-[1px] flex justify-center items-center text-[0.9rem] relative bg-[#1D1B1B] text-white p-4`}
        >
          <p>{sayThis}</p>
        </div>
      </article>
    )
  );
};

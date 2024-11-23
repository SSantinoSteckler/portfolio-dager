'use client';

import { useEffect } from 'react';

interface Props {
  code: 'bienvenida' | 'risa' | 'virus' | 'linkedin' | 'dotgpt' | 'gatitos';
  duration?: number;
}

export const DagerSay = ({ code, duration = 3000 }: Props) => {
  let modalClass = 'dager-modal';

  useEffect(() => {
    const modalTimeOut = setTimeout(() => {
      modalClass = 'dager-close-modal';
    }, duration);

    return () => clearTimeout(modalTimeOut);
  }, []);

  const dagerSay = [
    {
      code: 'bienvenida',
      sayThis: 'Puto el que entra',
    },
    {
      code: 'risa',
      sayThis: 'JAJAJA te la comiste toda',
    },
    {
      code: 'virus',
      sayThis: 'Sospechoso...',
    },
    {
      code: 'likedin',
      sayThis: 'Luego podrías contactarme',
    },
    {
      code: 'dotgpt',
      sayThis: 'Ayer hablamos toda la noche sobre filosofía',
    },
    {
      code: 'gatitos',
      sayThis: 'Mucha ternura junta',
    },
  ];

  let sayThis = '';

  for (let i = 0; i < dagerSay.length; i++) {
    if (dagerSay[i].code === code) {
      sayThis = dagerSay[i].sayThis;
    }
  }

  return (
    sayThis.length && (
      <article className='absolute z-[999] bottom-[50px]'>
        <div
          className={`${modalClass} w-[350px] min-h[150px] max-h-[200px] border-4 border-[#826293] border-solid rounded-[1px] flex justify-center items-center text-[0.9rem] relative bg-[#1D1B1B] text-white p-4`}
        >
          <p>{sayThis}</p>
        </div>
      </article>
    )
  );
};

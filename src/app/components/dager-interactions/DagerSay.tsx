'use client';

interface Props {
  code: 'bienvenida' | 'risa' | 'virus' | 'linkedin' | 'dotgpt' | 'gatitos';
}

export const DagerSay = ({ code }: Props) => {
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
      <article className='absolute z-[999]'>
        <div className='dager-modal w-[350px] min-h[150px] max-h-[200px] border-4 border-[#826293] border-solid m-[50px_auto] rounded-[1px] flex justify-center items-center text-[0.9rem] relative bg-[#1D1B1B] text-white p-4'>
          <p>{sayThis}</p>
        </div>
      </article>
    )
  );
};

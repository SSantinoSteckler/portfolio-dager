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
      sayThis:
        'NOOO mi contrato millonario con Microjost, me re cagaron JAJAJA',
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
      <div className=''>
        <p>{sayThis}</p>
      </div>
    )
  );
};

'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState<string | JSX.Element>(
    'Hola Dager, ¿listo para ver tu portfolio? Haz click aquí'
  );

  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    let newValue;
    let newPosition = {
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
    };

    if (clickCount === 0) {
      newValue = 'Mentira gordi mejor click aquí';
    } else if (clickCount === 1) {
      newValue = 'Okey nono mejor Click aquí jejox';
    } else if (clickCount === 2) {
      newValue = 'Ni ella jugo tanto conmigo😭';
    } else {
      newValue = (
        <Link
          style={{ fontSize: '25px' }}
          href='/retro'
          rel='noopener noreferrer'
        >
          Bueno ahora si tio Dager aquí te dejo tu portfolio hecho con mucho
          cariño💗 (CON 200 DOLARES PODRÍA COMPRAR MUCHOS{' '}
          <span className='text-green-800'> PEPINOS</span>)
        </Link>
      );
      newPosition = { top: 50, left: 50 };
    }

    setValue(newValue);
    setPosition(newPosition);
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <section className='h-screen'>
      <div className='flex justify-center items-center w-full h-full'>
        <p
          onClick={handleClick}
          style={{
            fontSize: '20px',
            position: 'absolute',
            top: `${position.top}%`,
            left: `${position.left}%`,
            cursor: 'pointer',
            transition: 'top 0.5s, left 0.5s',
          }}
        >
          {value}
        </p>
      </div>
    </section>
  );
}

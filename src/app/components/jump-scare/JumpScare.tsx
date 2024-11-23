'use client';

import { useEffect } from 'react';

interface Props {
  delay?: number;
}

export const JumpScare = ({ delay = 1000 }: Props) => {
  let visible;
  const sound = new Audio('');

  useEffect(() => {
    const jumpScareTimeOut = setTimeout(() => {
      visible = '';
    }, delay);

    return () => clearTimeout(jumpScareTimeOut);
  }, []);

  return (
    <div>
      <span>Bu</span>
    </div>
  );
};

'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CatImage {
  url: string;
}

const CatsGalery = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);

  const fetchCatImages = async (limit = 8, totalCalls = 4) => {
    try {
      let allImages: CatImage[] = [];

      for (let i = 0; i < totalCalls; i++) {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=${limit}`
        );
        const data: CatImage[] = await response.json();

        allImages = [...allImages, ...data];
      }

      setCatImages(allImages.slice(0, 28));
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
    }
  };

  useEffect(() => {
    fetchCatImages(8, 4);
  }, []);

  return (
    <div className='w-[800px] h-[500px]  p-4 overflow-y-scroll flex justify-center py-5'>
      <div className='flex flex-wrap flex-row gap-3 justify-center   '>
        {catImages.map((cat, index) => (
          <Image
            key={index}
            src={cat.url}
            width={210}
            height={190}
            className='object-cover rounded-xl cursor-pointer border-[#826293] border-2 bg-white'
            alt={`Cat Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CatsGalery;

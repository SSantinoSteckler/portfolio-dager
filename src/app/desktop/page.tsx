'use client';
import { useState } from 'react';
import { DesktopIcon } from '../components/desktop/DesktopIcon';
import { DesktopView } from '../components/desktop/DesktopView';
import { Footer } from '../components/desktop/Footer';
import { DotGPT } from '../components/dotgpt/DotGpt';
import PlayList from '../components/playlist/PlayList';
import SpacialDager from '../components/space-dager-game/spacial-dager';
import SnakeGame from '../components/game-snake/snake';
import CatsGalery from '../components/cats-galery/CatsGalery';

export default function DesktopPage() {
  const [isOpenDotGpt, setIsOpenDotGpt] = useState(false);
  const [isOpenSpaceXDager, setIsOpenSpaceXDager] = useState(false);
  const [isOpenSnake, setIsOpenSnake] = useState(false);
  const [isOpenFolderCats, setIsOpenFolderCats] = useState(false);

  const handleClickDotGpt = () => {
    setIsOpenDotGpt(!isOpenDotGpt);
  };

  const handleClickSpaceXDager = () => {
    setIsOpenSpaceXDager(!isOpenSpaceXDager);
  };

  const handleClickSnake = () => {
    setIsOpenSnake(!isOpenSnake);
  };

  const handleClickFolderCats = () => {
    setIsOpenFolderCats(!isOpenFolderCats);
  };

  return (
    <section className='bg-[#ddd8df] p-[24px] gap-5 flex flex-col h-screen overflow-hidden'>
      <DesktopView>
        <div className='flex gap-2 justify-start items-start flex-col '>
          <DesktopIcon
            img='/dagergpt.png'
            name='DotGpt'
            onClick={handleClickDotGpt}
            isOpen={isOpenDotGpt}
          >
            <DotGPT></DotGPT>
          </DesktopIcon>
          <DesktopIcon
            img='/spacenave.jpg'
            onClick={handleClickSpaceXDager}
            name='SpaceDager'
            isOpen={isOpenSpaceXDager}
          >
            <SpacialDager />
          </DesktopIcon>
          <DesktopIcon
            img='/snakelogo.png'
            onClick={handleClickSnake}
            name='SnakeDager'
            isOpen={isOpenSnake}
          >
            <SnakeGame />
          </DesktopIcon>
          <DesktopIcon
            img='/folder.jpg'
            onClick={handleClickFolderCats}
            name='Fotos Gatitos'
            isOpen={isOpenFolderCats}
          >
            <CatsGalery />
          </DesktopIcon>
        </div>
        {/* <Window name='dad'>
          <DotGPT />
        </Window> */}

        <PlayList />
      </DesktopView>
      <Footer />
    </section>
  );
}

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
import { useVirusStore } from '../stores/store-app';
import Linkedin from '../components/linkedin-social/Linkedin';

export default function DesktopPage() {
  const [isOpenDotGpt, setIsOpenDotGpt] = useState(false);
  const [isOpenSpaceXDager, setIsOpenSpaceXDager] = useState(false);
  const [isOpenSnake, setIsOpenSnake] = useState(false);
  const [isOpenFolderCats, setIsOpenFolderCats] = useState(false);
  const [isOpenLinkedin, setIsOpenLinkedin] = useState(false);
  const { setIsVirusActive, isVirusActive } = useVirusStore();

  const [showIntro, setShowIntro] = useState(true);

  const handleVideoEnd = () => {
    setShowIntro(false);
  };

  const handleClickDotGpt = () => setIsOpenDotGpt(!isOpenDotGpt);
  const handleClickSpaceXDager = () => setIsOpenSpaceXDager(!isOpenSpaceXDager);
  const handleClickSnake = () => setIsOpenSnake(!isOpenSnake);
  const handleClickFolderCats = () => setIsOpenFolderCats(!isOpenFolderCats);
  const handleClickLinkedin = () => setIsOpenLinkedin(!isOpenLinkedin);
  const handleClickVirus = () => {
    setIsVirusActive();
  };

  if (showIntro) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          backgroundColor: 'black',
        }}
      >
        <video
          src='/preview.mp4'
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        ></video>
      </div>
    );
  }

  const isCursorActive = isVirusActive ? 'virus-active' : '';

  return (
    <section
      className={`bg-[#ddd8df] p-[24px] gap-5 flex flex-col h-screen overflow-hidden`}
    >
      <DesktopView className={`${isCursorActive}`}>
        <div
          className={`grid grid-cols-2 grid-row-4 justify-start items-start flex-col`}
        >
          <DesktopIcon
            img='/dagergpt.png'
            name='DotGpt'
            onClick={handleClickDotGpt}
            isOpen={isOpenDotGpt}
          >
            <DotGPT />
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
            img='/php.png'
            name='contrato.php (digo.pdf)'
            onClick={handleClickVirus}
          ></DesktopIcon>

          <DesktopIcon
            img='/folder.jpg'
            onClick={handleClickFolderCats}
            name='Fotos Gatitos'
            isOpen={isOpenFolderCats}
          >
            <CatsGalery />
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
            img='/linkedin.png'
            name='Linkedin'
            isOpen={isOpenLinkedin}
            onClick={handleClickLinkedin}
            minWidth={900}
            minHeight={400}
          >
            <Linkedin />
          </DesktopIcon>
        </div>
        <PlayList />
      </DesktopView>
      <Footer />
    </section>
  );
}

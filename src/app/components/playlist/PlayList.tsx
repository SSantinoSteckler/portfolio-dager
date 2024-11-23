'use client';
import React, { useRef, useState, useEffect } from 'react';
import PlayIcon from './PlayIcon';
import StopIcon from './StopIcon';
import { useAudioStore } from '@/app/stores/store-app';

const PlayList = () => {
  interface Song {
    title: string;
    url: string;
    image: string;
  }

  const songs: Song[] = [
    {
      title: 'Centrando un div',
      url: '/videoplayback3.m4a',
      image: '/dagermusic5.png',
    },
    {
      title: 'Laburando un martes',
      url: '/videoplayback2.m4a',
      image: '/dagermusic.png',
    },
    {
      title: 'La cancion del pepino',
      url: '/videoplayback.m4a',
      image: '/dagermusic3.png',
    },
    {
      title: 'C++ Remix',
      url: '/videoplayback1.m4a',
      image: '/dagermusic4.png',
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const currentSong = songs[currentSongIndex];

  const { isMuted, isPlaylist } = useAudioStore();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentSongIndex]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error('Error al intentar reproducir:', err));
      }
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const clickPercentage = clickPosition / rect.width;
      const newTime = clickPercentage * (audioRef.current.duration || 0);
      audioRef.current.currentTime = newTime;
      setProgress(clickPercentage * 100);
    }
  };

  const handleSongClick = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      {isPlaylist ? (
        <div className='bg-[#826293] max-w-full sm:max-w-[430px] px-4 py-4 flex flex-col justify-around gap-4 box-shadow w-full mx-4 sm:mx-8 2xl:max-h-[550px] max-h-[500px]'>
          <div className='flex justify-center'>
            <h3 className='text-[22px] text-white'>Playlist</h3>
          </div>
          <div className='p-2 bg-[#DDD8DF] flex gap-2 flex-col'>
            {songs.map((song, index) => (
              <div
                key={index}
                className={`py-1 px-2 ${
                  index === currentSongIndex
                    ? 'bg-[#826293] text-white hover:bg-[#8d6f9e]'
                    : 'bg-[#a4a4a4] hover:bg-[#82629378]'
                } cursor-pointer`}
                onClick={() => handleSongClick(index)}
              >
                <div className='flex flex-row gap-2 items-center'>
                  <img
                    src={song.image}
                    className='w-[50px] h-[50px] object-cover m-1 border-2 rounded-full'
                    alt={song.title}
                  />
                  <span className='text-[12px]'>{song.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-[#DDD8DF] p-4 py-6 flex flex-row gap-3 items-center'>
            <div
              onClick={togglePlayPause}
              className='bg-[#826293] p-3 rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer'
            >
              {isPlaying ? <StopIcon /> : <PlayIcon />}
            </div>

            <div className='w-full'>
              <span className='text-[#826293] text-[12px]'>
                {currentSong.title}
              </span>
              <div
                className='relative w-full bg-[#CCC] h-2 mt-2 rounded cursor-pointer'
                onClick={handleProgressClick}
                ref={progressBarRef}
              >
                <div
                  className='absolute bg-[#826293] h-2 rounded'
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <audio
                ref={audioRef}
                src={currentSong.url}
                onTimeUpdate={handleTimeUpdate}
                onEnded={nextSong}
              />
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default PlayList;

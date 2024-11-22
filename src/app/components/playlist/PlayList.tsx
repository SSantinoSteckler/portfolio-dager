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
      title: 'El Meneaito',
      url: '/videoplayback3.m4a',
      image: '/dagermusic5.png',
    },
    {
      title: 'Danza kuduro',
      url: '/videoplayback2.m4a',
      image: '/dagermusic.png',
    },
    {
      title: 'La canción del pepino',
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

  const { isMuted, toggleMute } = useAudioStore();

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
    <div className='bg-[#826293] max-w-full sm:max-w-[530px] px-6 py-6 flex flex-col gap-9 box-shadow w-full mx-4 sm:mx-8 my-5'>
      <div className='flex justify-center'>
        <h3 className='text-[28px] text-white'>Playlist</h3>
      </div>
      <div className='p-3 bg-[#DDD8DF] flex gap-3 flex-col'>
        {songs.map((song, index) => (
          <div
            key={index}
            className={`py-2 ${
              index === currentSongIndex
                ? 'bg-[#826293] text-white'
                : 'bg-gray-400'
            } cursor-pointer`}
            onClick={() => handleSongClick(index)}
          >
            <div className='flex flex-row gap-2 items-center'>
              <img
                src={song.image}
                className='w-[60px] h-[60px] object-cover m-2 border-2 rounded-full'
                alt={song.title}
              />
              <span>{song.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-[#DDD8DF] p-5 py-6 flex flex-row gap-4 items-center'>
        <div
          onClick={togglePlayPause}
          className='bg-[#826293] p-4 rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer'
        >
          {isPlaying ? <StopIcon /> : <PlayIcon />}
        </div>

        <div className='w-full'>
          <span className='text-[#826293] text-[14px]'>
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
  );
};

export default PlayList;

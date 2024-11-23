// src/app/stores/store-app.ts
import { create } from 'zustand';

interface AudioStore {
  isMuted: boolean;
  isPlaylist: boolean;
  toggleMute: () => void;
  setIsPlayList: () => void;
}

interface VirusStore {
  isVirusActive: boolean;
  setIsVirusActive: () => void;
}

interface DagerSay {
  window: string;
  setWindow: (value: string) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  isMuted: false,
  isPlaylist: true,
  setIsPlayList: () => {
    set((state) => ({
      isPlaylist: !state.isPlaylist,
    }));
  },
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));

export const useVirusStore = create<VirusStore>((set) => ({
  isVirusActive: false,
  setIsVirusActive: () =>
    set((state) => ({ isVirusActive: !state.isVirusActive })),
}));

export const useDagerSay = create<DagerSay>((set) => ({
  window: '',
  setWindow: (value) => set(() => ({ window: value })),
}));

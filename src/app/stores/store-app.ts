// src/app/stores/store-app.ts
import { create } from 'zustand';

interface AudioStore {
  isMuted: boolean;
  toggleMute: () => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  isMuted: false,
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));

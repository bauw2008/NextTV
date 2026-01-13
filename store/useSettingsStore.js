'use client';

import { create } from 'zustand';
import { DEFAULT_VIDEO_SOURCES, DEFAULT_DANMAKU_SOURCES } from '../lib/constants';

export const useSettingsStore = create((set) => ({
  videoSources: DEFAULT_VIDEO_SOURCES,
  danmakuSources: DEFAULT_DANMAKU_SOURCES,
  toggleSource: (id, type) => set((state) => {
    const key = type === 'video' ? 'videoSources' : 'danmakuSources';
    return {
      [key]: state[key].map((source) =>
        source.id === id ? { ...source, enabled: !source.enabled } : source
      ),
    };
  }),
  addSource: (source) => set((state) => {
    const key = source.type === 'video' ? 'videoSources' : 'danmakuSources';
    return {
      [key]: [...state[key], source],
    };
  }),
  removeSource: (id, type) => set((state) => {
    const key = type === 'video' ? 'videoSources' : 'danmakuSources';
    return {
      [key]: state[key].filter((source) => source.id !== id),
    };
  }),
}));

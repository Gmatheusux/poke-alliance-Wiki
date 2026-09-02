import { create } from 'zustand';

export const useLayoutStore = create((set) => ({
  isOmnisearchOpen: false,
  openOmnisearch: () => set({ isOmnisearchOpen: true }),
  closeOmnisearch: () => set({ isOmnisearchOpen: false }),
  toggleOmnisearch: () => set((state) => ({ isOmnisearchOpen: !state.isOmnisearchOpen })),
}));

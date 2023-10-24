import { create } from "zustand";

const useImages = create((set) => ({
  loading: false,
  images: [],

  setLoading: (loading) => set({ loading }),
  setImages: (images) => set({ images }),
}));

export default useImages;

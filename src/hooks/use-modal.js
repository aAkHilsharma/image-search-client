import { create } from "zustand";

const useImageModal = create((set) => ({
  isOpen: false,
  data: {},
  dataTest: "",

  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setData: (data, dataTest) => set({ data, dataTest }),
}));

export default useImageModal;

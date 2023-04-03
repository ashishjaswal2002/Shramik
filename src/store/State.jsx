import {create} from 'zustand';

const useModalStore = create((set) => ({
  isOpen: false,
  isLogin:false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),

  loggedIn:()=>set({isLogin:true}),
  logout:()=>set({isLogin:false})
}));

export default useModalStore;
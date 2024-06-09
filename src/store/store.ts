import { create } from "zustand";
import { createUserSlice, UserSlice } from "./user-slice";

export type Store = UserSlice;

export const useStore = create<Store>()((...args)=>({
    ...createUserSlice(...args)
}))
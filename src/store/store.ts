import { create } from "zustand";
import { createUserSlice, UserSlice } from "./user-slice";
import { immer } from "zustand/middleware/immer";

export type Store = UserSlice;

export const useStore = create<Store>()(immer((...args)=>({
    ...createUserSlice(...args)
})
))
import { create } from "zustand";
import { createUserSlice, UserSlice } from "./user-slice";
import { immer } from "zustand/middleware/immer";
import { CartSlice, createCartSlice } from "./cart-slice";
import { subscribeWithSelector } from "zustand/middleware";

export type Store = UserSlice & CartSlice;

export const useStore = create<Store>()(
    subscribeWithSelector(
        immer((...args)=>({
            ...createUserSlice(...args),
            ...createCartSlice(...args),
        })
    ))
)
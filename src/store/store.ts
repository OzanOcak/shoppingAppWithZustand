import { create } from "zustand";
import { createUserSlice, UserSlice } from "./user-slice";
import { immer } from "zustand/middleware/immer";
import { CartSlice, createCartSlice } from "./cart-slice";
import { persist, subscribeWithSelector } from "zustand/middleware";

export type Store = UserSlice & CartSlice;

export const useStore = create<Store>()(
    persist(
        subscribeWithSelector(
          immer((...args)=>({
            ...createUserSlice(...args),
            ...createCartSlice(...args),
          })),
        ),
        {name:'local-storage'}
    )
)
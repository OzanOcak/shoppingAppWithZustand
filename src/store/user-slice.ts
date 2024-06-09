import { StateCreator } from "zustand";

export type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;
}

export type UserActions = {
    setAdress:(address:string)=>void;
}

export type UserSlice = UserState & UserActions;

export const createUserSlice : StateCreator<UserSlice,[],[],UserSlice> = 
(set) => ({
    address:'',
    age: 0,
    fullName: '',
    userName: '',
    setAdress: (addr)=>set((state)=>({...state,address:addr}))
});
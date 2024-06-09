import { StateCreator } from "zustand";

export type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;
}

export type UserActions = {
    setAddress:(address:string)=>void;
    fetchUser: () => Promise<void>;
}

export type UserSlice = UserState & UserActions;

export const createUserSlice : StateCreator<UserSlice,[['zustand/immer',never]],[],UserSlice> = 
(set) => ({
    address:'',
    age: 0,
    fullName: '',
    userName: '',
    setAddress: (addr)=>
        set((state)=>{
           state.address=addr;
    }),
    fetchUser: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		set({
			address: '',
			fullName: 'Joh Doe',
			userName: 'JohDoe@test.com',
			age: 32,
		});
	},
});
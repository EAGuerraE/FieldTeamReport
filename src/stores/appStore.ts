import { create } from 'zustand';
interface AppState{activeUserId:string;setActiveUserId:(id:string)=>void}
export const useAppStore=create<AppState>((set)=>({activeUserId:localStorage.getItem('activeUserId')||'u1',setActiveUserId:(id)=>{localStorage.setItem('activeUserId',id);set({activeUserId:id});}}));

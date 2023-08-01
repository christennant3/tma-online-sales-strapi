import { type } from 'os';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

interface User {
  id: number;
  firstname: string;
  email: string;
  token: string | null;
}

interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {


  state: () => {
    return  {
      user: null as User | null,
      token: null as string | null,
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },


  actions: {
    setToken(token: string) {
      this.token = token
    },

    setUser(user: User) {

      this.user = user
    }

  },


  getters: {

    isLoggedIn: (state) => !!state.token,
  },
  



})
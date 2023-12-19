import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (token) => {
      token.value = token
    }
    return {
      token,
      setToken
    }
  },
  {
    persist: true
  }
)

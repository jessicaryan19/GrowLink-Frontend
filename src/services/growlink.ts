import { API_URL } from '@/constants/env'
import type { RegisterUserRequest } from '@/types/user'
import axios from 'axios'


const api = axios.create({
  baseURL: API_URL
})

export const registerUser = async (request: RegisterUserRequest) => {
    try {
        const res = await api.post(`${API_URL}/v1/user/register`, request)

        return res.data
    } catch (error) {
        console.error('Error registering user:', error)
        throw error
    }
}
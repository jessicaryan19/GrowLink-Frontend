import { API_URL } from '@/constants/env'
import type { ProjectListRequest, Project } from '@/types/project'
import type { RegisterUserRequest, StudentListRequest, Student } from '@/types/user'
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

export const loginUser = async (email: string, password: string) => {
    try {
        const res = await api.post(`/v1/user/login`, { email, password })

        return res.data
    } catch (error) {
        console.error('Error logging in user:', error)
        throw error
    }
}

export const getProjectList = async (request: ProjectListRequest): Promise<{ projects: Project[], total: number }> => {
    console.log("ENV", import.meta.env);
    console.log("API_URL", API_URL);

    try {
        const res = await api.get(`/v1/project/list`, { params: request })
        return res.data
    } catch (error) {
        console.error('Error fetching project list:', error)
        throw error
    }
}

export const getStudentList = async (request: StudentListRequest): Promise<{ students: Student[], total_count: number, page: number, limit: number, total_pages: number }> => {
    try {
        const res = await api.get(`/v1/user/students`, { params: request })
        return res.data
    } catch (error) {
        console.error('Error fetching student list:', error)
        throw error
    }
}

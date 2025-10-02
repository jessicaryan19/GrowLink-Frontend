

export type RegisterUserRequest = {
  email: string
  password: string
  role: string
  company_name?: string
  university?: string
}

export type Student = {
  uuid: string
  user_uuid: string
  email: string
  name: string
  university: string
  skills: string[] | null
  created_at: string
}

export type StudentListRequest = {
  search?: string
  location?: string
  skills?: string
  page: number
  limit: number
}

export type StudentListResponse = {
  students: Student[]
  total_count: number
  page: number
  limit: number
  total_pages: number
}
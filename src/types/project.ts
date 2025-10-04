
export type Project = {
    uuid: string
    name: string
    description: string
    status: string
    duration: string
    timeline: string
    skills: string[]
    deliverables: string
    created_at: string
    created_by: string
}

export type ProjectListRequest = {
    search?: string
    budget?: string
    skills?: string
    page: number
    limit: number
}

export type CreateProjectRequest = {
    name: string
    description: string
    duration: number
    timeline: string
    deliverables: string
    skills: string[]
}
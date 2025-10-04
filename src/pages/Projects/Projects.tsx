import { Button } from "@/components/ui/button";
import FilterContainer from "../../components/forms/FilterContainer";
import { Plus } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import type { SelectOption } from "@/components/forms/SelectField";
import { useState, useEffect } from "react";
import SelectField from "@/components/forms/SelectField";
import SearchBar from "@/components/forms/SearchBar";
import { Link } from "react-router-dom";
import { getProjectList } from "@/services/growlink";
import type { Project } from "@/types/project";

export default function Projects() {
    const budgetOptions: SelectOption[] = [{ label: 'All Budgets', value: 'all' }];
    const skillOptions: SelectOption[] = [{ label: 'All Skills', value: 'all' }];

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [totalProjects, setTotalProjects] = useState<number>(0);
    const currentPage = 1;
    const limit = 20;

    const fetchProjects = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await getProjectList({
                search: searchTerm || undefined,
                page: currentPage,
                limit: limit
            });
            
            setProjects(response.projects || []);
            setTotalProjects(response.total || 0);
        } catch (err) {
            setError('Failed to fetch projects. Please try again.');
            console.error('Error fetching projects:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [searchTerm]);


    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex justify-between">
                <div className="flex flex-col gap-2">
                    <h1>Browse Projects</h1>
                    <div className="text-muted-foreground">Find exciting opportunities to work with Indonesian UMKM</div>
                </div>
                <Button>
                    <Plus />
                    <Link to='/projects/create'>
                        Post Project
                    </Link>
                </Button>
            </div>

            <FilterContainer title="Filter Projects">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <SelectField options={budgetOptions} defaultValue="all" />
                <SelectField options={skillOptions} defaultValue="all" />
                <Button variant="outline">Clear Filters</Button>
            </FilterContainer>

            <div className="container px-10 flex flex-col gap-4">
                <div className="text-muted-foreground">
                    {isLoading ? (
                        "Loading projects..."
                    ) : error ? (
                        <span className="text-red-500">{error}</span>
                    ) : (
                        `Showing ${Math.min(projects.length, limit)} of ${totalProjects} projects`
                    )}
                </div>
                
                {isLoading ? (
                    <div className="grid grid-cols-2 gap-6">
                        {/* Loading skeleton */}
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-8">
                        <p className="text-red-500 mb-4">{error}</p>
                        <Button onClick={fetchProjects}>Retry</Button>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">No projects found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <ProjectCard 
                                key={project.uuid}
                                project={project}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
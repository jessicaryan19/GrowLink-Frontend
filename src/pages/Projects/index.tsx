import { Button } from "@/components/ui/button";
import FilterProjects from "./FilterProjects";
import { Plus } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";

export default function Projects() {
    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container flex justify-between">
                <div className="flex flex-col gap-2">
                    <h1>Browse Projects</h1>
                    <div className="text-muted-foreground">Find exciting opportunities to work with Indonesian UMKM</div>
                </div>
                <div>
                    <Button>
                        <Plus/>
                        Post Project
                    </Button>
                </div>
            </div>

            <FilterProjects />

            <div className="container text-muted-foreground">
                Showing 1-20 of 100 projects
            </div>

            <div className="container grid grid-cols-2 gap-6">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>

    )
}
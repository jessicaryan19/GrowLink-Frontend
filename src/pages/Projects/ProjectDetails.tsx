import IconLabel from "@/components/forms/IconLabel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Clock, DollarSign, MapPin, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProjectDetails } from "@/services/growlink";
import type { Project } from "@/types/project";

export default function ProjectDetails() {
    const { projectId } = useParams<{ projectId: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            if (!projectId) {
                setError("Project ID is required");
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const projectData = await getProjectDetails(projectId);
                setProject(projectData);
            } catch (err) {
                setError("Failed to fetch project details. Please try again.");
                console.error("Error fetching project details:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center py-10 gap-10">
                <div className="container px-10">
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-96 rounded-lg"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center py-10 gap-10">
                <div className="container px-10">
                    <div className="text-center py-8">
                        <p className="text-red-500 mb-4">{error}</p>
                        <Button onClick={() => window.location.reload()}>Retry</Button>
                    </div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex flex-col items-center py-10 gap-10">
                <div className="container px-10">
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">Project not found.</p>
                        <Link to="/projects">
                            <Button className="mt-4">Back to Projects</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const formattedDate = project.created_at ? new Date(project.created_at).toLocaleDateString() : "";
    const statusVariant = project.status === "open" ? "default" : "destructive";
    
    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex gap-6">
                <div className="w-2/3 flex flex-col gap-6">
                    <Card>
                        <CardContent className="flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-6">
                                    <h1>{project.name}</h1>
                                    <div className="text-muted-foreground">
                                        <IconLabel icon={Calendar} label={`Posted ${formattedDate}`} />
                                    </div>
                                </div>
                                <Badge variant={statusVariant as "default" | "destructive"}>
                                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                </Badge>
                            </div>

                            <div className="w-full grid grid-cols-3 gap-4">
                                <Button className="col-span-2" size='lg' disabled={project.status !== "open"}>
                                    <Link to={`/projects/${project.uuid}/apply`}>Apply Now</Link>
                                </Button>
                                <Button variant='outline' size='lg'>
                                    Save Project
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Project Description</CardTitle>
                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Skills & Expertise</CardTitle>
                            <div className="flex gap-2 flex-wrap">
                                {project.skills && project.skills.length > 0 ? (
                                    project.skills.map((skill, index) => (
                                        <Badge key={index} variant='outline'>{skill}</Badge>
                                    ))
                                ) : (
                                    <span className="text-muted-foreground">No specific skills listed</span>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Requirements</CardTitle>
                            <ul className="list-disc list-inside text-muted-foreground flex flex-col">
                                <li>Experience with social media marketing</li>
                                <li>Familiarity with Indonesian market and culture</li>
                                <li>Strong communication skills</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Expected Deliverables</CardTitle>
                            <CardDescription>
                                {project.deliverables}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-1/3 flex flex-col gap-6">
                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <Avatar className="h-14 w-14 rounded-lg">
                                    <AvatarImage src="https://github.com/evilrabbit.png" />
                                    <AvatarFallback className="rounded-lg">IC</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                    <CardTitle>Organization Name</CardTitle>
                                    <div className="text-muted-foreground">Jessica Ryan</div>
                                </div>
                            </div>

                            <div className="text-muted-foreground">
                                <IconLabel icon={Building} label="Food & Beverages" />
                                <IconLabel icon={MapPin} label="Jakarta, Indonesia" />
                            </div>

                            <Button variant="outline">
                                View Profile
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Project Details</CardTitle>
                            <div className="text-muted-foreground">
                                <IconLabel icon={DollarSign} label="Rp 500,000 - Rp 1,000,000" />
                                <IconLabel icon={Clock} label={`${project.duration} ${project.timeline}`} />
                                <IconLabel icon={Users} label="8 applicants" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/10">
                        <CardContent className="flex flex-col gap-4 items-center">
                            <CardTitle>Ready to Apply?</CardTitle>
                            <div className="text-muted-foreground">
                                Showcase your skills and win this project
                            </div>
                            <Button 
                                className="w-full" 
                                disabled={project.status !== "open"}
                            >
                                <Link to={`/projects/${project.uuid}/apply`}>
                                    {project.status === "open" ? "Apply Now" : "Project Closed"}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
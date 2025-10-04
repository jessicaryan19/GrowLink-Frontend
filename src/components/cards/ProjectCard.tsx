import { Building, Clock, DollarSign, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import IconLabel from "../forms/IconLabel";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import UserAvatar from "../common/UserAvatar";
import type { Project } from "@/types/project";

export type ProjectCardProps = {
    type?: 'default' | 'summary';
    project?: Project;
}

export function ProjectCard({
    type = 'default',
    project
}: ProjectCardProps) {
    // Use default values if no project is provided (for backwards compatibility)
    const projectName = project?.name || "Project Title";
    const projectStatus = project?.status || "Closed";

    return (
        <Card>
            <CardHeader >
                <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                        <UserAvatar variant="square"/>
                        <div>
                            <CardTitle>{projectName}</CardTitle>
                            <CardDescription>Project Organization</CardDescription>
                        </div>
                    </div>
                    {type !== 'summary' && (
                        <Badge variant={projectStatus === 'open' ? 'default' : 'destructive'}>
                            {projectStatus}
                        </Badge>
                    )}
                </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
                <div className={cn(
                    "grid text-muted-foreground",
                    { "grid-cols-2 gap-2": type !== 'summary' }
                )}>
                    <IconLabel icon={Building} label="Food & Beverages" />
                    <IconLabel icon={MapPin} label="Jakarta, Indonesia" />
                </div>

                {type !== 'summary' && (
                    <CardDescription>
                        Looking for creative students to help create engaging social media content for our traditional batik business.
                        Need someone familiar with Instagram, TikTok, and Facebook marketing.
                    </CardDescription>
                )}

                <div className="flex gap-2">
                    <Badge variant="outline">Social Media</Badge>
                    <Badge variant="outline">Marketing</Badge>
                </div>

                <div className={cn(
                    "grid text-muted-foreground",
                    { "grid-cols-2 gap-2": type !== 'summary' }
                )}>
                    <IconLabel icon={Clock} label="3 months" />
                    <IconLabel icon={DollarSign} label="Rp 500,000 - Rp 1,000,000" />
                    <IconLabel icon={Users} label="8 applicants" />
                </div>
            </CardContent>

            {type !== 'summary' && (
                <CardFooter className="flex justify-between items-end">
                    <p className="text-muted-foreground text-sm">Posted May 15, 2024</p>
                    <Button>
                        <Link to={`/projects/${project?.uuid || 1}`}>
                            View Details
                        </Link>
                    </Button>
                </CardFooter>
            )}
        </Card>
    )
}
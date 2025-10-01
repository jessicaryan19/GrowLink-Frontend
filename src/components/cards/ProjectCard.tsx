import { Clock, DollarSign, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function ProjectCard() {
    return (
        <Card>
            <CardHeader >
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Project Title</CardTitle>
                        <CardDescription>Project Organization</CardDescription>
                    </div>
                    <Badge variant='destructive'>Closed</Badge>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <CardDescription>
                    Looking for creative students to help create engaging social media content for our traditional batik business.
                    Need someone familiar with Instagram, TikTok, and Facebook marketing.
                </CardDescription>

                <div className="flex gap-2">
                    <Badge variant="outline">Social Media</Badge>
                    <Badge variant="outline">Marketing</Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Location
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Timeline
                    </div>
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Budget
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Applicants
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
                <p className="text-muted-foreground">Posted 2 days ago</p>
                <Button>
                    View Details
                </Button>
            </CardFooter>
        </Card>
    )
}
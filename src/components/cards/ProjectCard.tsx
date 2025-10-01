import { Clock, DollarSign, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import IconLabel from "../forms/IconLabel";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export function ProjectCard() {
    return (
        <Card>
            <CardHeader >
                <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                        <Avatar className="h-14 w-14 rounded-lg">
                            <AvatarImage src="https://github.com/evilrabbit.png" />
                            <AvatarFallback className="rounded-lg">IC</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Project Title</CardTitle>
                            <CardDescription>Project Organization</CardDescription>
                        </div>
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
                    <IconLabel icon={MapPin} label="Remote" />
                    <IconLabel icon={Clock} label="3 months" />
                    <IconLabel icon={DollarSign} label="Rp 500,000 - Rp 1,000,000" />
                    <IconLabel icon={Users} label="Applicants" />
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
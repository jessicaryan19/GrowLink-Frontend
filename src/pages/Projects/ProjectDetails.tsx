import IconLabel from "@/components/forms/IconLabel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Clock, DollarSign, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import UserAvatar from "@/components/common/UserAvatar";

export default function ProjectDetails() {
    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex gap-6">
                <div className="w-2/3 flex flex-col gap-6">
                    <Card>
                        <CardContent className="flex flex-col gap-6">
                            <div className="flex justify-center items-start">
                                <div className="flex flex-col gap-6">
                                    <h1>Project Title Project Title Project Title Project Title</h1>
                                    <div className="text-muted-foreground">
                                        <IconLabel icon={Calendar} label="Posted May 15, 2024" />
                                    </div>
                                </div>
                                <Badge variant="destructive">Closed</Badge>
                            </div>

                            <div className="w-full grid grid-cols-3 gap-4">
                                <Button className="col-span-2" size='lg'>
                                    <Link to='/projects/1/apply'>Apply Now</Link>
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
                                Looking for creative students to help create engaging social media content for our traditional batik business.
                                Need someone familiar with Instagram, TikTok, and Facebook marketing.
                                Looking for creative students to help create engaging social media content for our traditional batik business.
                                Need someone familiar with Instagram, TikTok, and Facebook marketing.
                                Looking for creative students to help create engaging social media content for our traditional batik business.
                                Need someone familiar with Instagram, TikTok, and Facebook marketing.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Skills & Expertise</CardTitle>
                            <div className="flex gap-2">
                                <Badge variant='outline'>Social Media</Badge>
                                <Badge variant="outline">Marketing</Badge>
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
                            <ul className="list-disc list-inside text-muted-foreground flex flex-col">
                                <li>10 social media posts (images and captions)</li>
                                <li>5 short videos (15-30 seconds each)</li>
                                <li>Content calendar for 1 month</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-1/3 flex flex-col gap-6">
                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <UserAvatar variant="square" />
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
                                <IconLabel icon={Clock} label="3 months" />
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
                            <Button className="w-full">
                                <Link to='/projects/1/apply'>Apply Now</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
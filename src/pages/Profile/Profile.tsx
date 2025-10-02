import ContactCard from "@/components/cards/profile/ContactCard";
import StatisticsCard from "@/components/cards/profile/StatisticsCard";
import UserAvatar from "@/components/common/UserAvatar";
import IconLabel from "@/components/forms/IconLabel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ExternalLink, GraduationCap, Link, Mail, MapPin, Phone, Star } from "lucide-react";

export default function Profile() {
    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex gap-6">
                <div className="w-2/3 flex flex-col gap-6">
                    <Card>
                        <CardContent>
                            <div className="flex gap-6">
                                <UserAvatar size="lg" />
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <div className="text-4xl font-bold">Username</div>
                                            <CardDescription>
                                                <IconLabel icon={GraduationCap} label="Universitas Bina Nusantara" />
                                                <IconLabel icon={MapPin} label="Jakarta, Indonesia" />
                                                <div className="flex items-center gap-1">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="font-medium">5.0</span>
                                                    <span className="text-muted-foreground">
                                                        (10 projects)
                                                    </span>
                                                </div>
                                            </CardDescription>
                                        </div>
                                        <div>
                                            <Button>Invite to Apply</Button>
                                        </div>
                                    </div>

                                    <CardDescription>
                                        Passionate computer science student with 2+ years of experience in web development. Specialized in creating modern, responsive websites and user-friendly interfaces for small businesses.
                                    </CardDescription>
                                </div>
                            </div>
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
                            <CardTitle>Portfolio</CardTitle>

                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Past Projects & Reviews</CardTitle>
                            <div className="flex flex-col gap-4">
                                <Card>
                                    <CardContent>
                                        <CardTitle>Project Name</CardTitle>
                                        <CardDescription>Project Organization</CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-1/3 flex flex-col gap-6">
                    <ContactCard />
                    <StatisticsCard />
                </div>
            </div>
        </div>
    )
}
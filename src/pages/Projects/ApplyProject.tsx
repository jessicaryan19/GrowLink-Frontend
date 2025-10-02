import UserAvatar from "@/components/common/UserAvatar";
import IconLabel from "@/components/forms/IconLabel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Building, Clock, DollarSign, MapPin, Users } from "lucide-react";

export default function ApplyProject() {
    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex flex-col gap-2">
                <h1>Apply to Project</h1>
                <div className="text-muted-foreground">Submit your application to work on this project</div>
            </div>

            <div className="container px-10 flex gap-6">
                <div className="w-2/3 flex flex-col gap-6">
                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Your Pitch</CardTitle>
                            <div className="flex flex-col gap-2">
                                <CardDescription>Why are you the right person for this project? <span className="text-destructive">*</span></CardDescription>
                                <Textarea
                                    className="h-30"
                                    placeholder="Explain your approach, relevant experience, and why you're excited about this project..."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Attach Portfolio Samples</CardTitle>
                            <CardDescription>Select relevant work samples to showcase your abilities</CardDescription>

                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Cover Letter (Optional)</CardTitle>
                            <div className="flex flex-col gap-2">
                                <CardDescription>Additional message to the client</CardDescription>
                                <Textarea
                                    className="h-30"
                                    placeholder="Any additional information you'd like to share..."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/10">
                        <CardContent className="flex flex-col gap-4">
                            <CardTitle>Before you submit</CardTitle>
                            <ul className="list-disc list-inside text-muted-foreground flex flex-col">
                                <li>Make sure your pitch clearly explains your approach</li>
                                <li>Select your most relevant portfolio samples</li>
                                <li>Double-check your spelling and grammar</li>
                                <li>Be professional and enthusiastic</li>
                            </ul>
                            <Button size="lg">
                                Submit Application
                            </Button>
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
                </div>
            </div>
        </div>
    )
}
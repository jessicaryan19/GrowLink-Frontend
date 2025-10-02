import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import IconLabel from "../forms/IconLabel";
import { GraduationCap, MapPin, Star } from "lucide-react";
import type { Student } from "@/types/user";

export type StudentCardProps = {
    student?: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
    // Use default values if no student is provided (for backwards compatibility)
    const studentName = student?.name || "Student Name";
    const studentUniversity = student?.university || "Universitas Bina Nusantara";
    const studentSkills = student?.skills || ["Social Media", "Marketing"];

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                        <Avatar className="h-14 w-14">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>IC</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-2">
                            <CardTitle>{studentName}</CardTitle>
                            <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">5.0</span>
                                <span className="text-muted-foreground">
                                    (10 projects)
                                </span>
                            </div>
                        </div>
                    </div>

                    <Badge variant='secondary'>Available</Badge>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                    <IconLabel icon={GraduationCap} label={studentUniversity} />
                    <IconLabel icon={MapPin} label="Jakarta, Indonesia" />
                </div>

                <CardDescription>
                    Passionate UI/UX designer with experience in creating user-centered designs for local businesses.
                    Love helping UMKM modernize their digital presence.
                </CardDescription>

                <div className="flex gap-2">
                    {studentSkills && studentSkills.length > 0 ? (
                        studentSkills.map((skill, index) => (
                            <Badge key={index} variant="outline">{skill}</Badge>
                        ))
                    ) : (
                        <>
                            <Badge variant="outline">No skills listed</Badge>
                        </>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
                <div>
                    <span className="text-xl font-semibold">Rp 75,000</span>
                    <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">View Profile</Button>
                    <Button>Hire Now</Button>
                </div>
            </CardFooter>
        </Card>
    )
}
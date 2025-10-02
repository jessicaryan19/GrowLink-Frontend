import SelectField, { type SelectOption } from "@/components/forms/SelectField";
import TagInput from "@/components/forms/TagInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { Tag } from "react-tag-input";

export default function CreateProject() {
    const budgetOptions: SelectOption[] = []
    const timelineOptions: SelectOption[] = []

    const [skills, setSkills] = useState<Tag[]>([]);

    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex flex-col gap-2">
                <h1>Create New Project</h1>
                <div className="text-muted-foreground">Find talented students to help grow your business</div>
            </div>

            <div className="container px-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Project Details</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-4">
                        <div>Project Title <span className="text-destructive">*</span></div>
                        <Input placeholder="e.g., Design a logo for my coffee shop" />

                        <div>Project Description <span className="text-destructive">*</span></div>
                        <Textarea className="h-30" placeholder="Describe your project details, requirements, goals, and expectations..." />

                        <div>Budget Range <span className="text-destructive">*</span></div>
                        <SelectField placeholder="Select budget range" options={budgetOptions} />

                        <div>Project Timeline <span className="text-destructive">*</span></div>
                        <SelectField placeholder="Select budget range" options={timelineOptions} />

                        <div>Required Skills <span className="text-destructive">*</span></div>
                        <TagInput placeholder="Add required skills" tags={skills} setTags={setSkills}/>

                        <div>Expected Deliverables <span className="text-destructive">*</span></div>
                        <Textarea className="h-30" placeholder="What do you expect to receive? (e.g., logo files, website design, marketing plan)" />
                    </CardContent>

                    <CardFooter>
                        <Button className="w-full" size="lg">
                            <Plus />
                            Create Project
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
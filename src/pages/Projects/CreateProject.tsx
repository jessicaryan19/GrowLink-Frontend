import SelectField, { type SelectOption } from "@/components/forms/SelectField";
import TagInput from "@/components/forms/TagInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { Tag } from "react-tag-input";
import { createProject } from "@/services/growlink";
import type { CreateProjectRequest } from "@/types/project";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
    const navigate = useNavigate();
    
    const budgetOptions: SelectOption[] = [
        { label: "Under Rp 1,000,000", value: "under-1m" },
        { label: "Rp 1,000,000 - Rp 5,000,000", value: "1m-5m" },
        { label: "Rp 5,000,000 - Rp 10,000,000", value: "5m-10m" },
        { label: "Above Rp 10,000,000", value: "above-10m" }
    ];
    
    const timelineOptions: SelectOption[] = [
        { label: "Year", value: "year" },
        { label: "Month", value: "month" },
        { label: "Week", value: "week" },
        { label: "Day", value: "day" },
    ];

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        duration: 0,
        timeline: "",
        deliverables: ""
    });
    
    const [skills, setSkills] = useState<Tag[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: keyof typeof formData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Basic validation
        if (!formData.name.trim()) {
            setError("Project title is required");
            setIsLoading(false);
            return;
        }

        if (!formData.description.trim()) {
            setError("Project description is required");
            setIsLoading(false);
            return;
        }

        if (!formData.timeline) {
            setError("Project timeline is required");
            setIsLoading(false);
            return;
        }

        if (!formData.duration || formData.duration <= 0) {
            setError("Project duration must be greater than 0 days");
            setIsLoading(false);
            return;
        }

        if (!formData.deliverables.trim()) {
            setError("Expected deliverables are required");
            setIsLoading(false);
            return;
        }

        try {
            const projectData: CreateProjectRequest = {
                name: formData.name,
                description: formData.description,
                duration: formData.duration,
                timeline: formData.timeline,
                deliverables: formData.deliverables,
                skills: skills.map(skill => skill.text)
            };

            const businessId = "a0e0cf84-0cac-4942-90f3-b10d6e963479";
            
            await createProject(projectData, businessId);
            
            navigate('/projects');
        } catch (err) {
            setError('Failed to create project. Please try again.');
            console.error('Error creating project:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex flex-col gap-2">
                <h1>Create New Project</h1>
                <div className="text-muted-foreground">Find talented students to help grow your business</div>
            </div>

            <div className="container px-10">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Details</CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col gap-4">
                            {error && (
                                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
                                    {error}
                                </div>
                            )}

                            <div>Project Title <span className="text-destructive">*</span></div>
                            <Input 
                                placeholder="e.g., Design a logo for my coffee shop" 
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                            />

                            <div>Project Description <span className="text-destructive">*</span></div>
                            <Textarea 
                                className="h-30" 
                                placeholder="Describe your project details, requirements, goals, and expectations..." 
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                required
                            />

                            <div>Budget Range <span className="text-destructive">*</span></div>
                            <SelectField 
                                placeholder="Select budget range" 
                                options={budgetOptions} 
                                value={selectedBudget}
                                onValueChange={(value: string) => setSelectedBudget(value)}
                            />

                            <div>Project Timeline <span className="text-destructive">*</span></div>
                            <SelectField 
                                placeholder="Select timeline" 
                                options={timelineOptions} 
                                value={formData.timeline}
                                onValueChange={(value: string) => handleInputChange('timeline', value)}
                            />

                            <div>Project Duration<span className="text-destructive">*</span></div>
                            <Input 
                                type="number"
                                placeholder="e.g., 30" 
                                value={formData.duration || ''}
                                onChange={(e) => handleInputChange('duration', parseInt(e.target.value) || 0)}
                                min="1"
                                required
                            />

                            <div>Required Skills <span className="text-destructive">*</span></div>
                            <TagInput 
                                placeholder="Add required skills" 
                                tags={skills} 
                                setTags={setSkills}
                            />

                            <div>Expected Deliverables <span className="text-destructive">*</span></div>
                            <Textarea 
                                className="h-30" 
                                placeholder="What do you expect to receive? (e.g., logo files, website design, marketing plan)" 
                                value={formData.deliverables}
                                onChange={(e) => handleInputChange('deliverables', e.target.value)}
                                required
                            />
                        </CardContent>

                        <CardFooter>
                            <Button 
                                type="submit" 
                                className="w-full" 
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Creating Project...
                                    </>
                                ) : (
                                    <>
                                        <Plus />
                                        Create Project
                                    </>
                                )}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    )
}
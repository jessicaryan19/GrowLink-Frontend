import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Target } from "lucide-react";

export default function Benefits() {
    return (
        <div className="w-full flex flex-col items-center gap-4 py-20">
            <h1>Benefits</h1>
            <div>Creating value for students, businesses, and society</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                                        <IconComponent className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                        <CardDescription>{benefit.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {benefit.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    )
}

const benefits = [
    {
        icon: Target,
        title: "For Students",
        description: "Gain real-world experience while earning income",
        points: [
            "Build professional portfolio",
            "Earn competitive rates (Rp 50K-100K/hour)",
            "Flexible work arrangements",
            "Direct mentorship from business owners"
        ]
    },
    {
        icon: Heart,
        title: "For UMKM",
        description: "Access affordable talent to grow your business",
        points: [
            "Cost-effective solutions (50-70% less than agencies)",
            "Fresh perspectives from digital natives",
            "Support local education ecosystem",
            "Build long-term partnerships"
        ]
    }
];
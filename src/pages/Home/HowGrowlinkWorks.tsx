import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, FileText, Users } from "lucide-react";

export default function HowGrowlinkWorks() {
    return (
        <div className="w-full flex flex-col items-center gap-4 py-10 bg-muted">
            <h1>How Growlink Works</h1>
            <div>Simple, transparent process that benefits both students and UMKM businesses</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => {
                    const IconComponent = step.icon;

                    return (
                        <Card>
                            <CardHeader className="text-center pt-8">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-secondary/20`}>
                                    <IconComponent className={`h-8 w-8 text-secondary`} />
                                </div>
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {step.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {step.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

const steps = [
    {
        icon: FileText,
        title: "Post & Browse",
        description: "UMKM owners post detailed project requirements with clear budgets. Students browse and find opportunities that match their skills and interests.",
        details: [
            "Clear project descriptions with deliverables",
            "Transparent budget ranges (starting from Rp 500K)",
            "Skill-based matching system",
            "Timeline and milestone planning"
        ],
    },
    {
        icon: Users,
        title: "Connect & Match",
        description: "Students submit proposals with portfolios. UMKM owners review applications, check ratings, and select the best candidates for their projects.",
        details: [
            "Portfolio showcase with previous work",
            "Rating system based on past projects",
            "Direct communication through messaging",
            "University verification for students"
        ],
    },
    {
        icon: CheckCircle,
        title: "Deliver & Review",
        description: "Projects are completed with milestone tracking. Both parties leave reviews, building trust and reputation for future collaborations.",
        details: [
            "Milestone-based project tracking",
            "Secure file sharing and deliverables",
            "Mutual review system",
            "Payment protection for both parties"
        ],
    },
];
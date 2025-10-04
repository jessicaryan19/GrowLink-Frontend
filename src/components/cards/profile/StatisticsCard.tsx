import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function StatisticsCard() {
    return (
        <Card>
            <CardContent className="flex flex-col gap-4">
                <CardTitle>Statistics</CardTitle>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="text-muted-foreground">Projects Posted</div>
                        <div className="font-bold">12</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-muted-foreground">Projects Completed</div>
                        <div className="font-bold">12</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-muted-foreground">Average Rating</div>
                        <div className="font-bold">12</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-muted-foreground">Member Since</div>
                        <div className="font-bold">January 2024</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
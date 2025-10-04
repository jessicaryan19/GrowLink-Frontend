import IconLabel from "@/components/forms/IconLabel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ExternalLink, Mail, Phone } from "lucide-react";

export default function ContactCard() {
    return (
        <Card>
            <CardContent className="flex flex-col gap-4">
                <CardTitle>Contact Information</CardTitle>
                <div className="text-muted-foreground flex flex-col gap-2">
                    <IconLabel icon={Mail} label="username@gmail.com" />
                    <IconLabel icon={Phone} label="+621234567890" />
                    <IconLabel icon={ExternalLink} label="www.website.com" />
                </div>
            </CardContent>
        </Card>
    )
}
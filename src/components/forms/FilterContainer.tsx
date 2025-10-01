import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Filter} from "lucide-react";
import { type ReactNode } from "react";

type FilterContainerProps = {
    children?: ReactNode
}
export default function FilterContainer({
    children
}: FilterContainerProps) {
    
    return (
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Filter Projects
                    </CardTitle>
                    <CardContent className="grid grid-cols-4 gap-4 px-0 pt-4">
                        {children}
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}
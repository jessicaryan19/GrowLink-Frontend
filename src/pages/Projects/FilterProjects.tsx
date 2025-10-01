import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SelectField, { type SelectOption } from "@/components/forms/SelectField";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, Clock, DollarSign, Users, Plus } from "lucide-react";
import { useState } from "react";

export default function FilterProjects() {
    const budgetOptions: SelectOption[] = [{ label: 'All Budgets', value: 'all' }];
    const skillOptions: SelectOption[] = [{ label: 'All Skills', value: 'all' }];

    const [searchTerm, setSearchTerm] = useState<string>("");
    return (
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Filter Projects
                    </CardTitle>
                    <CardContent className="grid grid-cols-4 gap-4 px-0 pt-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search projects..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <SelectField placeholder='Select Budget' options={budgetOptions} defaultValue="all" />
                        <SelectField placeholder='Select Skill' options={skillOptions} defaultValue="all" />
                        <Button variant="outline">Clear Filters</Button>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}
import { Button } from "@/components/ui/button";
import FilterContainer from "../../components/forms/FilterContainer";
import type { SelectOption } from "@/components/forms/SelectField";
import { useState } from "react";
import SelectField from "@/components/forms/SelectField";
import SearchBar from "@/components/forms/SearchBar";
import StudentCard from "@/components/cards/StudentCard";

export default function Students() {
    const locationOptions: SelectOption[] = [{ label: 'All Locations', value: 'all' }];
    const skillOptions: SelectOption[] = [{ label: 'All Skills', value: 'all' }];

    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container flex justify-between">
                <div className="flex flex-col gap-2">
                    <h1>Find Talented Students</h1>
                    <div className="text-muted-foreground">
                        Connect with skilled Indonesian students ready to help your business grow
                    </div>
                </div>
            </div>

            <FilterContainer>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <SelectField options={locationOptions} defaultValue="all" />
                <SelectField options={skillOptions} defaultValue="all" />
                <Button variant="outline">Clear Filters</Button>
            </FilterContainer>

            <div className="container flex flex-col gap-4">
                <div className="text-muted-foreground">
                    Showing 1-20 of 100 students
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                </div>
            </div>
        </div>
    )
}
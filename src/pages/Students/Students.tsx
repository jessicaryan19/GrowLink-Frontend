import { Button } from "@/components/ui/button";
import FilterContainer from "../../components/forms/FilterContainer";
import type { SelectOption } from "@/components/forms/SelectField";
import { useState, useEffect } from "react";
import SelectField from "@/components/forms/SelectField";
import SearchBar from "@/components/forms/SearchBar";
import StudentCard from "@/components/cards/StudentCard";
import { getStudentList } from "@/services/growlink";
import type { Student } from "@/types/user";

export default function Students() {
    const locationOptions: SelectOption[] = [{ label: 'All Locations', value: 'all' }];
    const skillOptions: SelectOption[] = [{ label: 'All Skills', value: 'all' }];

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [totalStudents, setTotalStudents] = useState<number>(0);
    const currentPage = 1;
    const limit = 10;

    const fetchStudents = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await getStudentList({
                search: searchTerm || undefined,
                page: currentPage,
                limit: limit
            });
            
            setStudents(response.students || []);
            setTotalStudents(response.total_count || 0);
        } catch (err) {
            setError('Failed to fetch students. Please try again.');
            console.error('Error fetching students:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, [searchTerm]);

    return (
        <div className="flex flex-col items-center py-10 gap-10">
            <div className="container px-10 flex justify-between">
                <div className="flex flex-col gap-2">
                    <h1>Find Talented Students</h1>
                    <div className="text-muted-foreground">
                        Connect with skilled Indonesian students ready to help your business grow
                    </div>
                </div>
            </div>

            <FilterContainer title="Filter Students">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <SelectField options={locationOptions} defaultValue="all" />
                <SelectField options={skillOptions} defaultValue="all" />
                <Button variant="outline">Clear Filters</Button>
            </FilterContainer>

            <div className="container px-10 flex flex-col gap-4">
                <div className="text-muted-foreground">
                    {isLoading ? (
                        "Loading students..."
                    ) : error ? (
                        <span className="text-red-500">{error}</span>
                    ) : (
                        `Showing ${Math.min(students.length, limit)} of ${totalStudents} students`
                    )}
                </div>
                
                {isLoading ? (
                    <div className="grid grid-cols-2 gap-6">
                        {/* Loading skeleton */}
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-8">
                        <p className="text-red-500 mb-4">{error}</p>
                        <Button onClick={fetchStudents}>Retry</Button>
                    </div>
                ) : students.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">No students found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-6">
                        {students.map((student) => (
                            <StudentCard 
                                key={student.uuid}
                                student={student}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
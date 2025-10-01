import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
    searchTerm: string,
    setSearchTerm: (term: string) => void,
}
export default function SearchBar({
    searchTerm,
    setSearchTerm
}: SearchBarProps) {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search students..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
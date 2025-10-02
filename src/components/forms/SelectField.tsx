import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export type SelectOption = {
    label: string,
    value: string,
}
export type SelectFieldProps = {
    placeholder?: string,
    options?: SelectOption[],
    defaultValue?: string,
}
export default function SelectField({
    placeholder = "Select an option",
    options = [],
    defaultValue,
}: SelectFieldProps) {
    return (
        <Select defaultValue={defaultValue}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
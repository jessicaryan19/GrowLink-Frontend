import type { ElementType } from "react";

export type IconLabelProps = {
    icon: ElementType;
    label: string;
}
export default function IconLabel({ icon: Icon, label }: IconLabelProps) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            {label}
        </div>
    )
}
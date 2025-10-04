import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type UserAvatarProps = {
    variant?: 'default' | 'square',
    size?: 'md' | 'lg'
}
const userAvatarVariants = {
    default: "rounded-full",
    square: "rounded-lg"
}
const userAvatarSize = {
    md: "w-14 h-14",
    lg: "w-28 h-28"
}

export default function UserAvatar({
    variant = 'default',
    size = 'md',
}: UserAvatarProps) {
    return (
        <Avatar className={cn(
            userAvatarVariants[variant],
            userAvatarSize[size]
        )}>
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback className={cn(
                userAvatarVariants[variant]
            )}>
                IC
            </AvatarFallback>
        </Avatar>
    )
}
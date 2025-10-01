import growlinkLogoLight from "@/assets/growlink-light.svg"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils";

const menuList = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Students", href: "/students" },
]

export default function AppNavigation() {
    const location = useLocation();
    const isActive = (href: string) => {
        return location.pathname === href;
    };

    return (
        <header className="bg-white flex justify-center py-4 sticky top-0 z-50 border-b">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img src={growlinkLogoLight} alt="GrowLink" className="w-48" />
                </Link>

                <nav className="flex gap-20">
                    {menuList.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn('px-3 py-2 font-semibold transition-colors text-black', {
                                'underline underline-offset-10 text-primary': isActive(item.href),
                                'hover:opacity-80 hover:text-primary': !isActive(item.href),
                            })}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-2">
                    <Button variant="ghost">Login</Button>
                    <Button>Get Started</Button>
                </div>
            </div>
        </header>
    )
}
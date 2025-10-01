import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import growlinkLogo from "@/assets/growlink-white.svg"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"

const menuList = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Students", href: "/students" },
]

export default function AppNavigation() {
    const location = useLocation();
    const isActive = (href: string) => {
        return location.pathname === href;
    }
    return (
        <header className="bg-primary flex justify-center py-4 sticky top-0 z-50">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img src={growlinkLogo} alt="Growlink" className="w-48" />
                </Link>

                <nav className="flex gap-20">
                    {menuList.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`px-3 py-2 font-medium transition-colors text-primary-foreground  ${isActive(item.href)
                                ? "underline underline-offset-10"
                                : "hover:opacity-80"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-4">
                    <Button variant="white">Login</Button>
                    <Button variant="secondary">Get Started</Button>
                </div>

            </div>
        </header>
    )
}
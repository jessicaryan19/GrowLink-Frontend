import { Link } from "react-router-dom";
import growlinkLogoLight from "@/assets/growlink-light.svg"
import { Separator } from "@/components/ui/separator"
import { Heart } from "lucide-react";

export default function AppFooter() {
    return (
        <footer className='flex justify-center bg-muted'>
            <div className="container py-10 flex flex-col gap-10">
                <div className="grid grid-cols-4 gap-10">
                    <div className="flex flex-col gap-4 col-span-2">
                        <Link to="/">
                            <img src={growlinkLogoLight} alt="GrowLink" className="w-48" />
                        </Link>
                        <div className="text-muted-foreground w-2/3">
                            Empowering Indonesian students to grow their skills while helping UMKM businesses thrive through
                            affordable, high-quality freelance projects.
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div>Platform</div>
                        <div className="flex flex-col gap-2 text-muted-foreground">
                            <Link to="/projects">Browse Projects</Link>
                            <Link to="/students">Find Students</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div>Support</div>
                        <div className="flex flex-col gap-2 text-muted-foreground">
                            <Link to="/">Help Center</Link>
                            <Link to="/">Contact Us</Link>
                            <Link to="/">Safety Guidelines</Link>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="flex items-center gap-2">
                    © 2025 GrowLink. Made with
                    <Heart className="inline h-4 w-4 text-destructive fill-destructive" />
                    for Indonesian students and UMKM.
                </div>
            </div>
        </footer>
    )
}
import { Button } from "@/components/ui/button";

export default function Landing() {
    return (
        <div className="w-full flex flex-col items-center gap-4 py-40 gradient-primary bg-gradient-to-b text-primary-foreground">
            <h1 className="">Empowering Students,</h1>
            <h1>Growing UMKM</h1>
            <div>
                Connect Indonesian students with UMKM businesses for affordable, quality freelance projects.
                Build skills, grow businesses, create impact.
            </div>
            <div>
                <Button>Post a Project</Button>
                <Button>Find Projects</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
            </div>
        </div>
    )
}   
import { ArrowRightCircle } from "lucide-react";
import { MiddleProjectCard, SideProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <main className="min-h-screen mt-16 w-full bg-primary">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 text-zinc-50 dark:text-neutral-800">
        <div className="flex flex-col items-center gap-2 lg:gap-3">
          <div className="w-full flex items-center justify-center gap-3">
            <ArrowRightCircle className="-rotate-45" />
            <h1 className="text-xl">My Projects</h1>
          </div>
          <h1 className="text-center font-semibold text-5xl">
            Our works across industries
          </h1>
          <p className="text-center w-sm">
            Check out our awesome projects that are sure to grab attention on
            Instagram!
          </p>
        </div>
        <div className="w-full flex gap-2 justify-center items-center">
          <div className="w-fit flex flex-col gap-2 h-200">
            <SideProjectCard id="1" imageUrl="/images/project-1.webp" />
            <SideProjectCard id="1" imageUrl="/images/project-1.webp" />
            <SideProjectCard id="1" imageUrl="/images/project-1.webp" />
          </div>
          <div className="w-full flex flex-col gap-2 h-250">
            <MiddleProjectCard id="1" imageUrl="/images/project-1.webp" />
            <MiddleProjectCard id="1" imageUrl="/images/project-1.webp" />
            <MiddleProjectCard id="1" imageUrl="/images/project-1.webp" />
          </div>
          <div className="w-fit flex flex-col gap-2 h-200">
            <SideProjectCard id="1" imageUrl="/images/project-1.webp" />
            <SideProjectCard id="1" imageUrl="/images/project-1.webp" />
            <SideProjectCard id="1" imageUrl="/images/project-1.webp" />
          </div>
        </div>
        <Button
          asChild
          className="bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/80"
        >
          <Link href="/projects">
            View All Projects <ArrowRightCircle className="-rotate-45" />
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default ProjectSection;

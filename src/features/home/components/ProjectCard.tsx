import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  imageUrl: string;
}

export const MiddleProjectCard = ({ id, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group">
      <Link
        href={`/projects/${id}`}
        className={`flex items-center justify-center w-full h-84 bg-[url(${imageUrl})] bg-cover bg-center bg-no-repeat rounded-2xl grayscale group-hover:grayscale-0 group-hover:rounded-[50px] transition-all duration-500 ease-in-out`}
      >
        <Button className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          View Details <ArrowRightCircle className="-rotate-45" />
        </Button>
      </Link>
    </div>
  );
};
export const SideProjectCard = ({ id, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group">
      <Link
        href={`/projects/${id}`}
        className={`flex items-center justify-center w-92 h-72 bg-[url(${imageUrl})] bg-cover bg-center bg-no-repeat rounded-2xl grayscale group-hover:grayscale-0 group-hover:rounded-[50px] transition-all duration-500 ease-in-out`}
      >
        <Button className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          View Details <ArrowRightCircle className="-rotate-45" />
        </Button>
      </Link>
    </div>
  );
};

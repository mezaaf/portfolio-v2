import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="py-24">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex items-stretch gap-8 rounded-4xl bg-neutral-800 text-zinc-50 dark:bg-zinc-50 dark:text-neutral-800 h-[85vh]">
        <div className="w-full h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="font-extrabold text-7xl">Marchenda Ezafuwandhana</h1>
          <p className="max-w-sm indent-8 sm:indent-12 lg:indent-16">
            I build modern, scalable, and user friendly web
            applications—combining clean UI design with solid backend
            engineering to bring ideas to life.
          </p>
        </div>
        <div className="w-full max-w-lg flex flex-col justify-between items-end px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 items-end py-4 sm:py-6 lg:py-8">
            <h1 className="font-bold text-5xl">Developer</h1>
            <p className="text-lg">Frontend | Backend | Fullstack</p>
          </div>
          <div className="flex items-stretch gap-4 w-full">
            <Card className="p-2 aspect-square">
              <CardContent className="bg-neutral-400 dark:bg-neutral-700 overflow-hidden aspect-square p-0 rounded-md">
                <Image
                  src="/images/mezaaf.png"
                  alt="mezaaf"
                  width={78}
                  height={120}
                  className="w-full h-full object-cover object-center"
                />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Mezaaf</CardTitle>
                <CardDescription>Let&apos;s start our project</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Get in touch</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

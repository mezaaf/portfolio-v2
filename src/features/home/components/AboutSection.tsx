import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <main className="min-h-screen mt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 bg-accent rounded-3xl p-4 sm:p-6 lg:p-8">
        <div className="w-full flex items-start gap-4 sm:gap-6 lg:gap-8">
          <div className="w-full max-w-2xs flex items-center gap-3">
            <ArrowRightCircle className="-rotate-45" />
            <h1 className="text-xl">About me</h1>
          </div>
          <div className="w-full">
            <h1 className="text-5xl font-semibold">
              Results in every project — focused on design and functionality.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between gap-12 sm:gap-16 lg:gap-20">
          <div className="w-full max-w-sm overflow-hidden rounded-lg">
            <Image
              src="/images/mezaaf.jpg"
              alt="mezaaf"
              width={432}
              height={570}
              className="w-full h-120 object-cover object-center"
            />
          </div>
          <div className="w-full max-w-xl flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center">
            <h4 className="max-w-md indent-16">
              No fluff, just results. Clean, scalable, and user-friendly web
              applications. Frontend, Backend, and Fullstack solutions, project
              after project.
            </h4>
            <div className="w-full grid grid-cols-2 gap-1">
              <div className="bg-primary-foreground p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-5xl">50+</h1>
                  <h3 className="text-lg">01</h3>
                </div>
              </div>
              <div className="bg-primary-foreground p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-5xl">95%</h1>
                  <h3 className="text-lg">02</h3>
                </div>
              </div>
              <div className="bg-primary-foreground p-4 rounded-md">
                <div className="flex flex-col justify-between gap-12 sm:gap-16 lg:gap-20">
                  <h1 className="font-semibold text-xl text-end">
                    Success project completed
                  </h1>
                  <h3 className="">
                    We&apos;ve delivered 50+ projects that help companies
                    generate real results.
                  </h3>
                </div>
              </div>
              <div className="bg-primary-foreground p-4 rounded-md">
                <div className="flex flex-col justify-between gap-12 sm:gap-16 lg:gap-20">
                  <h1 className="font-semibold text-xl text-end">
                    Customer satisfaction rate
                  </h1>
                  <h3 className="">
                    Helping clients achieve real results with clean, scalable,
                    and efficient frontend, backend, and fullstack solutions.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;

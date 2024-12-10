import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
        <div className="flex flex-col xl:flex-row xl:pl-24 items-center justify-between xl:pt-8 xl:pb-14">  
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">Software Developer</span>
                <h1 className="h1">
                  Hello I'm <br /><span className="text-accent">Chamika Lasitharanga</span>
                </h1>
                <p className="xl:pl-6 max-w-[1000px] mb-9 text-white/80 xl:pt-3 ">I am a passionate software developer with a strong background in building scalable and efficient applications.
                  I enjoy tackling challenging problems and continuously learning new technologies. 
                  I am proficient in various programming languages and frameworks. I am dedicated to delivering high-quality software solutions that meet
                  user needs and drive business success.
                </p>

                {/*btn and socials */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button 
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                    </Button> 
                    <div className="mb-8 xl:mb-0">
                      <Socials 
                      containerStyles="flex items-center gap-4" 
                      iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent
                       text-base hover:bg-accent hover:text-primary hover:transition-all
                        duration-500" 
                      />
                    </div> 
                </div>

              </div>
            {/* photo */}
          <div className="order-1 xl:pr-6 xl:order-none mb-8:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
    </section>
  );
}

export default Home

"use client";
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  
 } from "react-icons/fa";

 import { SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about data
const about = {
  title: 'About me',
  description:"I am just a chill guy who loves to code and learn new things. I have a passion for front-end development and enjoy creating beautiful and functional websites. I am always looking for new opportunities to grow and expand my skills.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Chamika lasitharanga"
    },

    {
      fieldName: "Phone",
      fieldValue: "(+94 76 562 7424)"
    },

    {
      fieldName: "Experiance",
      fieldValue: "6 months"
    },

    {
      fieldName: "Nationality",
      fieldValue: "Sri Lanka"
    },

    {
      fieldName: "Email",
      fieldValue: "chamikalrajapakshe@gmail.com"
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },

    {
      fieldName: "Languages",
      fieldValue: "Sinhala, English"
    },
  ]
};

// experiance data
const experiance = {
  icon: '',
  title: 'My Experience',
  description: "I have gained valuable experience working as a software implementer for 6 months. During this time, I have honed my skills in implementing software solutions and collaborating with teams to deliver high-quality projects.Although I am still in the early stages of my career, I am eager to continue learning and growing as a developer.",
  
  items:[
    {
      company: "Blue lotus X",
      position: "Software implementer",
      duration: "6 months"
    },
  ],
    /* {
      company: "Code Alpha",
      position: "Web developer",
      duration: "6 months"
    },

    {
      company: "Blue lotus X",
      position: "Software implementer",
      duration: "6 months"
    },

    {
      company: "Blue lotus X",
      position: "Software implementer",
      duration: "6 months"
    },

    {
      company: "Blue lotus X",
      position: "Software implementer",
      duration: "6 months"
    },

    {
      company: "Blue lotus X",
      position: "Software implementer",
      duration: "6 months"
    },
    */ 
  
};

// education data
const education = {
  icon: ' ',
  title: 'My education',
  description: "I have completed various diplomas in software engineering and English, which have equipped me with the necessary skills and knowledge to excel in my career.",
  items:[
    {
      Institute: "National institiute of business management",
      Diploma: "Diploma in software engineering",
      duration: "2022-2023 (1 year)"
    },

    {
      Institute: "National institiute of business management",
      Diploma: "Higher national Diploma in software engineering",
      duration: "2022-2023 (1 year)"
    },

    {
      Institute: "Bririshway English academy",
      Diploma: "Diploma in english",
      duration: "6 months"
    },

  ],
};

// skills data

const skills = {
  title: "My skills",
  description: "I have a strong foundation in front-end development and have experience working with various technologies and tools.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";


import { animate, motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area"

const resume = () => {
  return (
    <motion.div initial={{opacity: 0}} 
    animate={{
      opacity: 1,
      transition:{delay: 2.4,
        duration: 0.4,
        ease: "easeIn",
      }
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-24"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experiance"
        className="flex flex-col xl:flex-row gap-[60px]">

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experiance">Experiance</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experiance */}
            <TabsContent value="experiance" className="w-full">
              <div  className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiance.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiance.description}
                </p>
                  <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experiance.items.map((item, index) => {
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          > 
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left" >{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        > 
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left" >{item.Diploma}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return <li key={index}> 
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skills.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skills.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>  
              
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((info, index) => {
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-2"
                      > 
                        <span className=" max-w-[260px] min-h[60px] text-center lg:text-left" >{info.fieldName}</span>
                        <span className="text-white/60">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume

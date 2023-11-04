import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      logo: <SiHtml5 />,
      level: "Advance",
      count: 85,
      color: "#dd4b24",
    },
    {
      logo: <SiCss3 />,
      level: "Intermediate",
      count: 70,
      color: "#2862e9",
    },
    {
      logo: <SiTailwindcss />,
      level: "Advance",
      count: 85,
      color: "#07b0ce",
    },
    {
      logo: <SiBootstrap />,
      level: "Advance",
      count: 85,
      color: "#7111f5",
    },

    {
      logo: <SiJavascript />,
      level: "Advance",
      count: 80,
      color: "#efd81c",
    },
    {
      logo: <SiRedux />,
      level: "Beginner",
      count: 40,
      color: "#7248b6",
    },
    {
      logo: <SiReact />,
      level: "Intermediate",
      count: 80,
      color: "#5ed3f3",
    },
    {
      logo: <SiFirebase />,
      level: "Intermediate",
      count: 80,
      color: "#ffcc30",
    },
    {
      logo: <SiMongodb />,
      level: "Intermediate",
      count: 70,
      color: "#419432",
    },
    {
      logo: <SiNodedotjs />,
      level: "Beginner",
      count: 40,
      color: "#419432",
    },
    {
      logo: <SiExpress />,
      level: "Intermediate",
      count: 70,
      color: "#ffff",
    },
  ];

  return (
    <section className="py-10  relative " name="skills">
      <div className="mt-10 text-zinc-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-sky-600">Skills</span>
        </h3>
        <p className="text-zinc-400 mt-3 text-lg">My Knowledge</p>
      </div>
      <div className="flex items-center justify-center  mt-12 gap-10 flex-wrap">
        {skills.map((skill, i) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            key={i}
            className="border-2 hover:animate-pulse relative min-w-[10rem] max-w-[16rem] bg-zinc-900 p-10 rounded-xl "
            style={{ borderColor: `${skill.color}` }}
          >
            <div
              style={{
                background: `conic-gradient(rgb(8, 150, 180) ${skill.count}%, #ddd ${skill.count}%)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full "
            >
              <div
                className="text-6xl h-28 w-28 bg-zinc-900 rounded-full flex items-center justify-center  "
                style={{ color: `${skill.color}` }}
              >
                {skill.logo}
              </div>
            </div>
            <p className="text-lg mt-3 text-center">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

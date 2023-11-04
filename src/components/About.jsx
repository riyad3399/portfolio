import aboutIMG from "../assets/aboutRiyad.png";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  const aboutInfo = [
    { text: "Experience", count: "01" },
    { text: "Completed Projects", count: "10" },
    { text: "Work Experience", count: "1" },
  ];

  return (
    <section name="about" className="py-10 text-white">
      <div className=" mb-10 text-center">
        <h4 className="font-semibold text-4xl">
          About <span className="text-sky-600">Me</span>
        </h4>
        <p className="text-zinc-400 my-3 text-lg">My Introducation</p>
      </div>
      <div className="flex md:flex-row  flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
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
          className="text-center"
        >
          <div className="text-zinc-300 my-3">
            <p className="text-justify leading-7 p-2">
              I'm a passionate frontend web developer with a keen eye for
              creating visually appealing and highly functional websites. My
              journey in the world of web development began with a fascination
              for turning creative ideas into interactive digital experiences.
              Since then, I've dedicated myself to mastering the art of
              front-end development, constantly staying up-to-date with the
              latest trends and technologies in the field.
            </p>
            <div className="flex gap-8 mt-10 items-center">
              {aboutInfo.map((info, i) => (
                <div key={i}>
                  <h4 className="md:text-4xl text-2xl font-semibold text-white">
                    {info.count}
                    <span className="text-sky-500">+</span>{" "}
                  </h4>
                  <span className="md:text-base text-xs">{info.text}</span>
                </div>
              ))}
            </div>
            <div className="flex sm:justify-start justify-center">
              <a href={resume} download={true}>
                <button className="btn-primary mt-5 ">
                  <AiOutlineDownload size={22} /> Download Resume
                </button>
              </a>
            </div>
          </div>
        </motion.div>
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
          className="flex-1 flex justify-center items-center mt-6 "
        >
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
            <img
              src={aboutIMG}
              alt="about photo"
              className="w-full object-cover bg-sky-600 rounded-lg "
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

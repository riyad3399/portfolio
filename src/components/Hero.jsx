import riyad from "../assets/riyad.png";
import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialFacebook,
} from "react-icons/sl";
import { motion } from "framer-motion";

const Hero = () => {
  const social_media = [
    {
      icon: <SlSocialFacebook />,
      title: "Facebook",
      link: "https://www.facebook.com/md.riyadkhan3399/",
    },
    {
      icon: <SlSocialGithub />,
      title: "Github",
      link: "https://github.com/riyad3399",
    },
    {
      icon: <SlSocialLinkedin />,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/md-riyad-khan-317537283/",
    },
  ];

  return (
    <section
      name="home"
      className="min-h-screen py-10 flex md:flex-row flex-col gap-4 items-center"
    >
      <motion.div
        className="flex-1 flex items-center justify-center h-full"
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
      >
        <img src={riyad} alt="photo" className="object-cover" loading="lazy" />
      </motion.div>
      <motion.div
        className="flex-1 md:text-left text-center "
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
      >
        <h4 className="md:text-5xl text-3xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-sky-600 md:text-6xl text-5xl">
            Hello!
            <br />
          </span>
          My Name is <span>Riyad khan</span>
        </h4>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-zinc-500">
          MERN Stack Developer
        </h4>
        <button className=" mt-4 btn-primary">Contact Me</button>
        <div className="mt-8 text-2xl flex items-center md:justify-start justify-center gap-5 ">
          {social_media.map((sm, i) => (
            <a
              key={i}
              title={sm.title}
              href={sm.link}
              className={`text-2xl rounded-full p-2 text-white border hover:bg-sky-600/10  duration-300`}
              target="_blank"
            >
              {sm.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

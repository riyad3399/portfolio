import riyad from "../assets/riyad.png";
import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialFacebook,
} from "react-icons/sl";

const Hero = () => {
  const social_media = [
    <SlSocialFacebook />,
    <SlSocialGithub />,
    <SlSocialLinkedin />,
  ];

  return (
    <section className="min-h-screen py-10 flex md:flex-row flex-col  items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={riyad} alt="photo" className="object-cover" loading="lazy"/>
      </div>
      <div className="flex-1 ">
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
          {social_media.map((icon, i) => (
            <button className="text-zinc-500 hover:text-white h-[38px] w-[38px] border rounded-full flex items-center justify-center" key={i}>{icon}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

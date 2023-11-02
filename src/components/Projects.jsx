import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// img
import img1 from "../assets/img2.png";
import img2 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import Animotion from "../animotionComponents/Animotion";

const myProjects = [
  {
    img: img1,
    name: "Sport Spark",
    githubLink: "https://github.com/riyad3399/sport-spark",
    liveLink: "https://sport-spark.web.app/",
  },
  {
    img: img2,
    name: "Cook's Corner",
    githubLink: "https://github.com/riyad3399/chef-recipe",
    liveLink: "https://cook-s-corner.web.app/",
  },
  {
    img: img3,
    name: "Racer x Toys",
    githubLink: "https://github.com/riyad3399/racer-x-toys",
    liveLink: "https://racerxtoys-df94f.web.app/",
  },
];

const Projects = () => {
  return (
    <section name="projects" className="py-10 text-white">
      <Animotion>
        <div className="text-center mb-5">
          <h3 className="text-4xl font-semibold">
            My <span className="text-sky-600">Projects</span>
          </h3>
          <p className="text-zinc-400 mt-3 text-lg">My awesome works</p>
        </div>
      </Animotion>
      <br />
      <div className="flex max-w-6xl  px-5 mx-auto items-center relative">
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
          className="w-full"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            slidesPerView={1.4}
            coverflowEffect={{
              rotate: 60,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
          >
            {myProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-zinc-700 rounded-xl">
                  <img
                    className="rounded-lg"
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                  />
                  <h3 className="text-lg md:my-4 my-2">{project.name} </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="text-sky-600 bg-zinc-800 px-2 py-1 rounded-lg inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="text-sky-600 bg-zinc-800 px-2 py-1 rounded-lg inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

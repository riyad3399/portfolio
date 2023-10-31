import hireme from "../assets/aboutRiyad.png";
import {motion} from "framer-motion"
const Hireme = () => {
  return (
    <section className="py-10 px-3 text-white">
      <motion.div
        initial={{
          opacity: 0,
          y: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 20,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="text-center"
      >
        <h4 className="text-4xl font-semibold">
          Hire <span className="text-sky-600">Me</span>
        </h4>
        <p className="text-zinc-400 text-lg mt-3">Do you have any work ?</p>
      </motion.div>
      <div className="bg-zinc-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-16 flex gap-6 md:flex-row flex-col-reverse items-center">
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
        >
          <h3 className="text-2xl font-semibold">
            Do you wnat any wark from me
          </h3>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-zinc-200 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            asperiores molestias consectetur aut voluptatum! Obcaecati rerum
            deleniti illum voluptatum ratione!
          </p>
          <button className="btn-primary mt-10">Sty Hello</button>
        </motion.div>
        <motion.img
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
          src={hireme}
          alt=""
          className="md:absolute bottom-0 -right-20 object-cover "
        />
      </div>
    </section>
  );
};

export default Hireme;

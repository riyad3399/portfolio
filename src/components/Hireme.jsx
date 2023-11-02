import Animotion from "../animotionComponents/Animotion";
import hireme from "../assets/aboutRiyad.png";
const Hireme = () => {
  return (
    <section className="py-10 px-3 text-white">
      <Animotion>
        <div className="text-center">
          <h4 className="text-4xl font-semibold">
            Hire <span className="text-sky-600">Me</span>
          </h4>
          <p className="text-zinc-400 text-lg mt-3">Do you have any work ?</p>
        </div>
      </Animotion>
      <div className="bg-zinc-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-16 flex gap-6 md:flex-row flex-col-reverse items-center">
        <Animotion>
          <div>
            <h3 className="text-2xl font-semibold">
              Do you wnat any wark from me
            </h3>
            <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-zinc-200 leading-6">
              Thank you for visiting my portfolio. If you're looking for a
              dedicated and experienced frontend web developer to bring your
              ideas to life, you've come to the right place. I'm passionate
              about creating exceptional web experiences, and I'd love to be
              part of your next project.
            </p>
            <button className="btn-primary mt-10">Sty Hello</button>
          </div>
        </Animotion>
        <Animotion>
          <img
            src={hireme}
            alt="hiremePhoto"
            className="md:absolute bottom-0 -right-20 object-cover "
            loading="lazy"
          />
        </Animotion>
      </div>
    </section>
  );
};

export default Hireme;

import aboutIMG from "../assets/aboutRiyad.png";

const About = () => {
  const aboutInfo = [
    { text: "Experience", count: "01" },
    { text: "Completed Projects", count: "10" },
    { text: "Work Experience", count: "1" },
  ];

  return (
    <section className="py-10 text-white">
      <div className="mt-8 text-center">
        <h4 className="font-semibold text-4xl">
          About <span className="text-sky-600">Me</span>
        </h4>
        <p className="text-zinc-400 my-3 text-lg">My Introducation</p>
      </div>
      <div className="flex md:flex-row  flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-zinc-300 my-3">
            <p className="text-justify leading-7 p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis quas ullam recusandae error esse molestias facilis
              provident quae aliquam fugiat aperiam maxime magnam suscipit
              repellat fugit cum laudantium culpa, nesciunt, et quo. Laborum
              iste commodi asperiores animi consequatur, modi doloremque
              necessitatibus quibusdam eos expedita porro pariatur perspiciatis
              aliquam repellat esse!
            </p>
            <div className="flex gap-8 mt-10 items-center">
              {aboutInfo.map((info, i) => (
                <div key={i}>
                  <h4 className="md:text-4xl text-2xl font-semibold text-white">
                    {info.count}
                    <span className="text-sky-500">+</span>{" "}
                  </h4>
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1hr5eqD9JWfEeLmp5pXo_UonayYLhER4j/view?usp=drive_link"
              download
              target="_blank"
            >
              <button className="btn-primary mt-5">Download CV</button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
            <img
              src={aboutIMG}
              alt="about photo"
              className="w-full object-cover bg-sky-600 rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

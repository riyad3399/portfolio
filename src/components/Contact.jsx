import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import {motion} from "framer-motion"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  

    emailjs
      .sendForm(
        "service_nyyp1wl",
        "template_hgjbjc8",
        form.current,
        "2ox6QWUWVsX8wJrCc"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Message send successful.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section name="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-sky-600">Me</span>
        </h3>
        <p className="text-zinc-400 mt-3 text-lg">Get in touch</p>

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
          className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl mx-auto bg-zinc-800 p-6 rounded-lg"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="from_email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="w-fit btn-primary"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

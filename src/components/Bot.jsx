import { FaWhatsapp } from "react-icons/fa";

const Bot = () => {
  return (
    <div className="fixed z-[999] bottom-5 right-5 h-12 w-12  text-[#ffff] bg-[#29ad17] rounded-full flex justify-center items-center animate-bounce">
      <FaWhatsapp  size={50}/>
    </div>
  );
};

export default Bot;

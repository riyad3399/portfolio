import { motion } from "framer-motion";

const Animotion = ({children}) => {
    return (
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
        {children}
      </motion.div>
    );
};

export default Animotion;
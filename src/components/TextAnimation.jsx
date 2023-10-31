import {motion} from "framer-motion"
const TextAnimation = ({children}) => {
    return (
        <motion.div initial={{}}>
            {children}
        </motion.div>
    );
};

export default TextAnimation;
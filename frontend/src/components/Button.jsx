import { motion } from "framer-motion";
const Button = ({ children }) => (
  <motion.button
    className={`bg-customOrangeLight py-2 px-4 sm:py-4 sm:px-8 rounded-full text-white hover:bg-customOrangeDark transition-all inline-block`}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.button>
);
export default Button;

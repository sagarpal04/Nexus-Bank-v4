import HeroImage from "../assets/HeroImage.png";
import { motion } from "framer-motion";

const HeroImageSection = () => (
  <div>
    <div className="relative flex justify-center items-center">
      <div className="absolute aspect-square h-[90%] rounded-full bg-[#f5f5eb] z-0"></div>
      <motion.img
        src={HeroImage}
        alt="Hero Image"
        className="relative w-auto h-[80%] z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export default HeroImageSection;

import { motion } from "framer-motion";
const Stats = ({ title, value }) => (
  <div className="flex items-center space-x-3">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-600">{title}</p>
    </motion.div>
  </div>
);
export default Stats;

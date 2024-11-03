import React from "react";
import { motion } from "framer-motion";
const HowItWorks = () => {
  return (
    <div className="relative flex justify-center">
      <div className="aspect-square h-[2000px] bg-[#f5f5eb] rounded-full absolute top-0 left-1/2 -translate-x-1/2 z-0"></div>
      <div className="relative z-10 flex flex-col items-center mt-20">
        <motion.span
          className="uppercase text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          - Process
        </motion.span>
        <motion.h2
          className=" text-3xl font-bold mt-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          How it works
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3  my-7 w-10/12 pl-4 transform lg:translate-x-16">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-9 bg-black aspect-square flex justify-center items-center rounded-full">
              <div className="text-white text-lg">1</div>
            </div>
            <div className="flex flex-col items-center w-10/12 mt-4">
              <h3>Create an Account</h3>
              <p className="text-gray-600 text-sm text-center">
                Sign up and set up your profile quickly.
              </p>
            </div>
          </motion.div>
          <div className="flex items-center">
            <div className="border-l-2 lg:border-l-0 lg:border-b-2 border-dashed border-gray-500 h-12 lg:h-0 lg:w-24"></div>
          </div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-9 bg-black aspect-square flex justify-center items-center rounded-full">
              <div className="text-white text-lg">2</div>
            </div>
            <div className="flex flex-col items-center w-10/12 mt-4">
              <h3>Transfer & Manage Funds</h3>
              <p className="text-gray-600 text-sm text-center">
                Transfer money instantly and access your payment history
                anytime.
              </p>
            </div>
          </motion.div>
          <div className="flex items-center">
            <div className="border-l-2 lg:border-l-0 lg:border-b-2 border-dashed border-gray-500 h-12 lg:h-0 lg:w-24"></div>
          </div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-9 bg-black aspect-square flex justify-center items-center rounded-full">
              <div className="text-white text-lg">3</div>
            </div>
            <div className="flex flex-col items-center w-10/12 mt-4">
              <h3>Manage Loans</h3>
              <p className="text-gray-600 text-sm text-center">
                Apply for loans and track your repayment progress effortlessly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

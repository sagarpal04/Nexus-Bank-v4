import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import CustomerImages from "./CustomerImages";
import StatsSection from "./StatsSection";
import HeroImageSection from "./HeroImageSection";
import { Link } from "react-router-dom";
const MainContent = () => {
  const text = "MAKE PAYMENTS EASY, SIMPLIFY YOUR FINANCES";
  const [index, setIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < text.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, [text.length]);

  useEffect(() => {
    let cursorTimeout;

    if (index >= text.length) {
      cursorTimeout = setTimeout(() => {
        setIsCursorVisible(false);
      }, 1000);
    } else {
      setIsCursorVisible(true);
    }

    return () => clearTimeout(cursorTimeout); // Clean up timeout on unmount
  }, [index, text.length]);

  return (
    <div className="mt-12 md:px-8 grid gap-x-4 grid-cols-1 lg:grid-cols-2 max-w-[1600px] mx-auto md:mt-24">
      <div>
        <div className="min-h-[200px] md:min-h-[200px] w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            {text.slice(0, index)}
            {isCursorVisible && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                style={{ marginLeft: "2px" }}
              >
                |
              </motion.span>
            )}
          </motion.h1>
        </div>
        <motion.p
          className="mt-6 text-gray-600 w-full md:w-10/12 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          A simple, secure way to create an account, transfer funds, check
          payment history, and manage loans. Take full control of your finances
          through your web application.
        </motion.p>
        <div className="flex gap-4 items-center mt-10 flex-wrap justify-center sm:justify-normal">
          <Link to={"/signup"}>
            <Button>Get Started</Button>
          </Link>
          <CustomerImages />
        </div>
        <StatsSection />
      </div>
      <HeroImageSection />
    </div>
  );
};
export default MainContent;

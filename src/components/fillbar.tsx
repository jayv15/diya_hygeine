import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FillBar = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3,     // Trigger when 30% in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ width: "20%" });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`mt-2 mb-4 bg-[#004aac] h-1`}
    />
  );
};

export default FillBar;
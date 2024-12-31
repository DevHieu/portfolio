import { motion, useInView, useAnimation, easeIn } from "motion/react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const RevealText = ({ children, isEven = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "fit-content", overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={
          isEven
            ? {
                hidden: { left: 0 },
                visible: { left: "100%" },
              }
            : { hidden: { right: 0 }, visible: { right: "100%" } }
        }
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: easeIn }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--white)",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

RevealText.propTypes = {
  children: PropTypes.node.isRequired,
  isEven: PropTypes.boolean,
};

export default RevealText;
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { useState } from 'react';

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealShort = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.1}}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealTop = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
 /*  const slideControls = useAnimation(); */

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  /*     slideControls.start("visible"); */
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};


export const SlideTabsExample = () => {
  return (
    <div className="bg-neutral-100 py-20">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

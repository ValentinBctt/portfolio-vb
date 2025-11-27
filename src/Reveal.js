import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const getScrollContainer = () => {
  // During SSR window is undefined; return a safe stub in that environment.
  if (typeof window === 'undefined') {
    return {
      addEventListener: () => {},
      removeEventListener: () => {},
    };
  }
  // Prefer the document's scrolling element when available, otherwise fallback to window.
  return document.scrollingElement || window;
};

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
          hidden: { opacity: 0, x: -5.0 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealNavBar = ({ children, width = "fit-content" }) => {
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
          hidden: { opacity: 0, x: 200 },
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

export const RevealArrow = ({ children, width = "fit-content" }) => {
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
        transition={{ duration: 0.5, delay: 1.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};


export const RevealRight = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
  const maskControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      maskControls.start({ x: '0%' });
    }
  }, [isInView, mainControls, maskControls]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: width }}>
      <motion.div
        ref={inViewRef}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.7, delay: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: '100%' }}
        animate={maskControls}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to left, rgba(255, 255, 255, 0) 50%, var(--green) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export const RevealIcon = ({ children, width = "fit-content" }) => {
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
        transition={{ duration: 0.7, delay: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 },
        }}
        style={{ width: width }}
      >
        {children}
      </motion.div>
    </div>
  );
};





export const SimpleParallax = ({ children, speed = 0.3, maxTranslate = 120 }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    let animationFrameId;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const windowH = window.innerHeight;

      const elemCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elemCenter - windowH / 2;

      let translateY = -distanceFromCenter * speed;
      translateY = Math.max(-maxTranslate, Math.min(maxTranslate, translateY));

      element.style.transform = `translateY(${translateY}px)`;

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, maxTranslate]);

  return (
    <div
      ref={wrapperRef}
      style={{
        display: "block",
        width: "50%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};
